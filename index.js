//script used to initialize csv files and call the
//RadViz function to Plot the visualization based on the choosen .csv file
let jsonResponse;

//radviz
const loadDataset = name => {
  const params = new URLSearchParams();
  params.append("name", name);
  return fetch("http://127.0.0.1:5000/dataset/load?" + params.toString(), {
    method: "GET"
  });
};

//clustering
const clusterDataset = (name, count) => {
  const params = new URLSearchParams();
  const params1 = new URLSearchParams();
  params.append("name", name);
  params1.append("count", count);
  return fetch(
    "http://127.0.0.1:5000/dataset/load/cluster?" +
      params.toString() +
      "&" +
      params1.toString(),
    {
      method: "GET"
    }
  );
};

//default call
loadDataset("RedWineQuality").then(response =>
  response.json().then(json => {
    jsonResponse = json;
    console.log("json", jsonResponse[1]);
    loadD3(jsonResponse, 1);
  })
);

//Radviz
function getIndex() {
  const sel = document.getElementById("dropdown").value;
  console.log(sel);
  //console.log(document.getElementById("dropdown").value);
  if (sel === "Red") {
    loadDataset("RedWineQuality").then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3(jsonResponse, 1);
      })
    );
  } else if (sel === "White") {
    loadDataset("WhiteWineQuality").then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3(jsonResponse, 1);
      })
    );
  } else if (sel === "Iris") {
    loadDataset("Iris").then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3I(jsonResponse, 1);
      })
    );
  }
}

//clustering
function getCluster() {
  const sel = document.getElementById("dropdown").value;
  const cluster_count = document.getElementById("dropdown_cluster").value;
  console.log(sel);
  console.log(cluster_count);
  //console.log(document.getElementById("dropdown").value);
  if (sel === "Red") {
    clusterDataset("RedWineQuality", cluster_count).then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3(jsonResponse, 2);
      })
    );
  } else if (sel === "White") {
    clusterDataset("WhiteWineQuality", cluster_count).then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3(jsonResponse, 2);
      })
    );
  } else if (sel === "Iris") {
    clusterDataset("Iris", cluster_count).then(response =>
      response.json().then(json => {
        jsonResponse = json;
        console.log("json", jsonResponse[1]);
        loadD3I(jsonResponse, 2);
      })
    );
  }
}

//color Scheme
function colorScheme() {
  if (document.getElementById("cluster").checked) {
    getCluster();
  } else if (document.getElementById("class").checked) {
    getIndex();
  }
}

function loadD3(data, counter) {
  console.log("loading red");
  $("svg#radviz").remove();
  const IDradviz = document.querySelector("#radviz");
  const titles = d3.keys(data[0]);
  const colorAccessor = function(d) {
    if (counter == 1) {
      return d["quality"];
    } else {
      return d["labels"];
    }
  };
  const dimensions = [
    "fixed acidity",
    "volatile acidity",
    "citric acid",
    "residual sugar",
    "chlorides",
    "free sulfur dioxide",
    "total sulfur dioxide",
    "density",
    "pH",
    "sulphates",
    "alcohol"
  ];
  const dimensionAnchor = Array.apply(null, { length: dimensions.length })
    .map(Number.call, Number)
    .map(x => (x * 2 * Math.PI) / dimensions.length);

  RadViz(counter)
    .DOMRadViz(IDradviz)
    .TableTitle(titles)
    .ColorAccessor(colorAccessor)
    .Dimensionality(dimensions)
    .DAnchor(dimensionAnchor)
    .DATA(data)
    .call();
}

function loadD3I(data, counter) {
  $("svg#radviz").remove();
  const IDradviz = document.querySelector("#radviz");
  const titles = d3.keys(data[0]);
  const colorAccessor = function(d) {
    if (counter == 1) {
      return d["class"];
    } else {
      return d["labels"];
    }
  };
  const dimensions = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];
  const dimensionAnchor = Array.apply(null, { length: dimensions.length })
    .map(Number.call, Number)
    .map(x => (x * 2 * Math.PI) / dimensions.length);

  RadViz(counter)
    .DOMRadViz(IDradviz)
    .TableTitle(titles)
    .ColorAccessor(colorAccessor)
    .Dimensionality(dimensions)
    .DAnchor(dimensionAnchor)
    .DATA(data)
    .call();
}
