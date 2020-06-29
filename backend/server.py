# code adapted from flask tutorial.
'''
pip install -U flask --user
pip install -U flask-cors --user
pip install -U numpy --user
pip install -U pandas --user
'''

from flask import Flask
from flask import request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin
from sklearn.cluster import KMeans

import numpy as np
import pandas as pd
import json

app = Flask(__name__,
            static_url_path='/test',
            static_folder='../')
cors = CORS(app)

datasets = [
    {
        'name': 'WhiteWineQuality',
    },
    {
        'name': 'RedWineQuality',
    },
    {
        'name': 'Iris',
    }
]

loaded_datasets = {
    'WhiteWineQuality': {
        'fname': 'winequality-white.csv',
    },
    'RedWineQuality': {
        'fname': 'winequality-red.csv',
    },
    'Iris': {
        'fname': 'Iris.csv'
    }
}


def load_dataset(name):
    if(name == 'WhiteWineQuality'):
        filename = 'winequality-white.csv'
    elif(name == 'Iris'):
        filename = 'iris.csv'
    else:
        filename = 'winequality-red.csv'
    #d = app.send_static_file(filename)
    df = pd.read_csv('../data/'+filename, encoding="ISO-8859-1")
    out = df.to_json(orient="records")
    return out, df


@app.route('/dataset', methods=['GET'])
@cross_origin()
def get_datasets():
    return jsonify(datasets)

# radviz
@app.route('/dataset/load', methods=['GET'])
@cross_origin()
def get_dataset_load():
    name = request.args.get('name')
    for data in datasets:
        if data['name'] == name:
            out_json, df = load_dataset(name)
            return out_json
    return (f"Dataset '{name}' not found!", 400)

# clustering
@app.route('/dataset/load/cluster', methods=['GET'])
@cross_origin()
def get_cluster_load():
    name = request.args.get('name')
    count = request.args.get('count')
    count = int(count)
    for data in datasets:
        if data['name'] == name:
            out, pre_df = load_dataset(name)
            if (name == 'Iris'):
                pre_df = pd.get_dummies(
                    pre_df, columns=['class'], prefix=['class'])
            df_cluster = cluster_KMeans(pre_df, count)
            return df_cluster
    return (f"Dataset '{name}' not found!", 400)


def cluster_KMeans(df_pre, count):
    clustering = KMeans(n_clusters=count, random_state=41,
                        precompute_distances=True).fit(df_pre)
    labels = clustering.labels_
    cluster_arr = np.array(labels)
    df_pre['labels'] = cluster_arr
    df_pre_json = df_pre.to_json(orient="records")
    return df_pre_json


if __name__ == '__main__':
    app.run(debug=True)
