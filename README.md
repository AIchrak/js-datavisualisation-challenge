# js-datavisualisation-challenge
## Objectives:
This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- DOM manipulation
- AJAX/FETCH request
- Using Third-party libraries
- problem-solving : design a logical solution to implement the - expected result
- Debugging using the console
- Understand the notion of "separation of concerns"

## Instructions:
1. **Inline data (data in the document)**
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

2. **Remote data, in real-time, via ajax**
There are data sitting at this URL : https://canvasjs.com/services/data/datapoints.php

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (h1) of the article.

Don't hesitate to adapt the code provided in this tutorial: Live Updating Charts from JSON API & AJAX, but adapt it to this third-party library: chart.js or ToastUi-Chart, because this tutorial uses another (not-free) library (canvasJS).

**Again:** if javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears.

## Methodology:
### Part 1:
1. Drawing graphs to have a model and know how I'm going to fetch my data.
2. Installing chart JS and understanding how the default code for the graphs work.
3. Understanding how *rows* and *cells* work to fetch my data.
4. Making simple loops to fetch one colomn.
5. Doing graph 2 and graph 1.
### Part 2:
1. Understand how to fetch the data.
2. Understand how to use the fetched data outside the asynch function. (took a while)
3. Watch videos provided on chart js youtube channel to update automatically a chart with fetched data.

**Problems encountered**:
- using the update function properly so that data appears on the graph.
- making the data update (make the url update so that new data add up every second).
- Making data of x axis keep increase after 9 and repeat [0 to 9].

### "Part 3":
1. Go back to part 1 to optimise my loops. 
2. Change style of my charts.

## Tools used:
- VS Code
- Javascript
- Chart Js website and youtube channel