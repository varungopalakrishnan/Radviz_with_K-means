Instructions to execute the code:
1.	Install the required packages for the backend server file.
	pip install -U flask --user
	pip install -U flask-cors --user
	pip install -U numpy --user
	pip install -U pandas –user

2.	Execute the file ‘server.py’ present in the folder ‘backend’ from command line using the command “python server.py”.
3.	Host the file index.html using live server present in vs code.

Features implemented:
1. Draggable anchor with smooth transition.
2. Legends with colour code for each class.
3. On hover of mouse over the legends, the opacity of data-points changes in the visualization.
4. Implement feature to change .csv dynamically.
5. Reset feature to move the anchors to its initial position.
6. Change opacity of data-points using slider [2].
7. Additional information provided on hover of data-points in the visualization.
8. Position of anchors displayed while dragging the anchors.
9. Added option to choose clustering parameters for Kmeans clustering.
10. Option provided to choose between cluster colors or class-based colors.

-Radviz visualization implemented for the wine and iris dataset has been adapted from WYan’s [1] initial implementation.


References
[1]W. Chao, "WYanChao/RadViz", GitHub, 2019. [Online]. Available: https://github.com/WYanChao/RadViz. [Accessed: 06- Jul- 2019].
[2]"Change objects opacity", Bl.ocks.org, 2019. [Online]. Available: https://bl.ocks.org/EfratVil/2bcc4bf35e28ae789de238926ee1ef05. [Accessed: 07- Jul- 2019].
[3]M. Bostock, "D3.js - Data-Driven Documents", D3js.org, 2019. [Online]. Available: https://d3js.org/. [Accessed: 07- Jul- 2019].
[4]"Data Visualization with D3.js - Full Tutorial Course", YouTube, 2019. [Online]. Available: https://www.youtube.com/watch?v=_8V5o2UHG0E. [Accessed: 07- Jul- 2019].
[5]"D3.js Tutorial", www.tutorialspoint.com, 2019. [Online]. Available: https://www.tutorialspoint.com/d3js/. [Accessed: 07- Jul- 2019].
[6]C. format, N. Maveli, B. Solomon, J. Kumar and M. Gomez, "Convert Pandas DataFrame to JSON format", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/39257147/convert-pandas-dataframe-to-json-format. [Accessed: 28- Jul- 2019].
[7]H. Flask and R. Dunn, "How to serve static files in Flask", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask. [Accessed: 28- Jul- 2019].
[8]C. Ninja and A. Awuley, "Return JSON response from Flask view", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/13081532/return-json-response-from-flask-view. [Accessed: 28- Jul- 2019].
[9]"sklearn.cluster.KMeans — scikit-learn 0.21.2 documentation", Scikit-learn.org, 2019. [Online]. Available: https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html. [Accessed: 28- Jul- 2019].
[10]B. Khalid, L. Roys, P. Xiao and W. Huang, "Multiple parameters in in Flask approute", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/15182696/multiple-parameters-in-in-flask-approute. [Accessed: 28- Jul- 2019].
