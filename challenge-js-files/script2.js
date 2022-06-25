// var et array pour graph 2:
let table2 = document.getElementById("table2");
let canva2 = document.createElement("canvas");
canva2.setAttribute("id", "myChart2");
canva2.setAttribute("width", "400");
canva2.setAttribute("height", "600");
let div2 = document.getElementById("mw-content-text");
div2.insertBefore(canva2, table2);
let tr = table2.querySelectorAll("tbody tr");
let payst2 = [];
let t2200709 = [];
let t2201012 = [];
//var et array pour graph1:
let table1 = document.getElementById("table1");
let canva1 = document.createElement("canvas");
canva1.setAttribute("id", "myChart");
canva1.setAttribute("width", "400");
canva1.setAttribute("height", "400");
let div1 = document.getElementById("mw-content-text");
div1.insertBefore(canva1, table1);
let tr1 = table1.querySelectorAll("tbody tr");
let pays1 = [];
let years = [];
let dataY1 = [];
let dataY2 = [];
let dataY3 = [];
let dataY4 = [];
let dataY5 = [];
let dataY6 = [];
let dataY7 = [];
let dataY8 = [];
let dataY9 = [];
let dataY10 = [];
let dataY11 = [];
let bodyContent = document.getElementById("bodyContent");
let canva3 = document.createElement("canvas");
canva3.setAttribute("id", "graphinserer");
canva3.setAttribute("width", "400");
canva3.setAttribute("height", "400");
let div3 = document.getElementById("content");
div3.insertBefore(canva3, bodyContent);
// array pour graph 2:
for (let i = 1; i < tr.length; i++) {
  payst2.push(tr[i].cells[1].innerText);
  t2200709.push(tr[i].cells[2].innerText);
  t2201012.push(tr[i].cells[3].innerText);
}
// fonction pour remplacer , par . dans décimal:
function remplacer_virgule_par_point(decimal) {
  return parseFloat((decimal + "").replace(",", "."));
}
//pour récup data table1:
let rowyears = tr1[0];
for (let i = 2; i < rowyears.cells.length; i++) {
  years.push(rowyears.cells[i].innerText);
}
for (let i = 1; i < tr1.length; i++) {
  pays1.push(tr1[i].cells[1].innerText);
  dataY1.push(remplacer_virgule_par_point(tr1[i].cells[2].innerText));
  dataY2.push(remplacer_virgule_par_point(tr1[i].cells[3].innerText));
  dataY3.push(remplacer_virgule_par_point(tr1[i].cells[4].innerText));
  dataY4.push(remplacer_virgule_par_point(tr1[i].cells[5].innerText));
  dataY5.push(remplacer_virgule_par_point(tr1[i].cells[6].innerText));
  dataY6.push(remplacer_virgule_par_point(tr1[i].cells[7].innerText));
  dataY7.push(remplacer_virgule_par_point(tr1[i].cells[8].innerText));
  dataY8.push(remplacer_virgule_par_point(tr1[i].cells[9].innerText));
  dataY9.push(remplacer_virgule_par_point(tr1[i].cells[10].innerText));
  dataY10.push(remplacer_virgule_par_point(tr1[i].cells[11].innerText));
  dataY11.push(remplacer_virgule_par_point(tr1[i].cells[12].innerText));
}
// Graphique 2
const Graphique2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(Graphique2, {
  type: "bar",
  data: {
    labels: payst2,
    datasets: [
      {
        label:
          "Prison population, average per year, 2007-09 (per 100,000 inhabitants)",
        data: t2200709,
        backgroundColor: ["rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      {
        label:
          "Prison population, average per year, 2010-12 (per 100,000 inhabitants)",
        data: t2201012,
        backgroundColor: ["rgba(255, 159, 64, 1)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
//Graphique 1:
const Graphique1 = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(Graphique1, {
  type: "line",
  data: {
    labels: pays1,
    datasets: [
      {
        label: years[0],
        data: dataY1,
        backgroundColor: ["rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[1],
        data: dataY2,
        backgroundColor: ["rgba(255, 159, 64, 1)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[2],
        data: dataY3,
        backgroundColor: ["rgba(63, 245, 39, 1)"],
        borderColor: ["rgba(63, 245, 39, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[3],
        data: dataY4,
        backgroundColor: ["rgba(245, 39, 80, 1)"],
        borderColor: ["rgba(245, 39, 80, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[4],
        data: dataY5,
        backgroundColor: ["rgba(39, 243, 245, 1)"],
        borderColor: ["rgba(39, 243, 245, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[5],
        data: dataY6,
        backgroundColor: ["rgba(230, 245, 39, 1)"],
        borderColor: ["rgba(230, 245, 39, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[6],
        data: dataY7,
        backgroundColor: ["rgba(170, 245, 39, 1)"],
        borderColor: ["rgba(170, 245, 39, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[7],
        data: dataY8,
        backgroundColor: ["rgba(245, 58, 39, 1)"],
        borderColor: ["rgba(245, 58, 39, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[8],
        data: dataY9,
        backgroundColor: ["rgba(45, 39, 245, 1)"],
        borderColor: ["rgba(45, 39, 245, 0.8)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[9],
        data: dataY10,
        backgroundColor: ["rgba(255, 159, 64, 1)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
        borderWidth: 1,
        pointRadius: 0,
      },
      {
        label: years[10],
        data: dataY11,
        backgroundColor: ["rgba(16, 124, 37, 1)"],
        borderColor: ["rgba(16, 124, 37, 0.8)"],
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
// Data graph Graphique 3:
let graphinserer = document.getElementById("graphinserer").getContext("2d");
let counter = 0;
let xdataarray = [];
//Créer graphique 3:
function updateChart() {
  let api_url = `https://canvasjs.com/services/data/datapoints.php?cache=${
    Math.random() * 20000000
  }`; //?cache math random pour qu'il aille chercher une new url car sinon les données seront les meme car enregistrer dans le cache.
  async function fetchData() {
    const response = await fetch(api_url);
    const datapoints = await response.json();
    return datapoints;
  } //https://www.youtube.com/watch?v=7GEWp0LZXp0
  fetchData().then((datapoints) => {
    const xdata = datapoints.map(function (index) {
      return counter * datapoints.length + index[0]; 
    });
    counter++;
    //console.log(xdata);
    //on doit changer Xdata pour continuer audelà de 9 et du coup faut un new datapoints car c'est both x et y.
      let coordonnee = []; //il ne faut pas la déclarer dehors de la fonction car sinon ça va à chaque fois rajouter un array au arraydejà dedans. En la déclarant ici ça va remettre à 0 l'array mais donner les new valeurs
      for (let i in datapoints) {
          let v1 = [xdata[i], datapoints[i][1]];
          coordonnee.push(v1)    
      }//console.log(datapoints);
    addData(myChart3, xdata, coordonnee);
  });// interval (rajoute l'interval à chaque fois) faut utiliser clear
  setTimeout(updateChart, 1000);
}
updateChart();
function addData(myChart3, xdata, coordonnee) {
  for (let i in xdata) {
    myChart3.config.data.labels.push(xdata[i]);
  }
  for (let j in coordonnee) {
    myChart3.config.data.datasets.forEach((dataset) => {
      dataset.data.push(coordonnee[j]);
    });
  }
  myChart3.update();
}
const data = {
  labels: [],
  datasets: [
    { 
      label: "Remote data update",
      data: [],//c'est X et Y
      backgroundColor: ["rgba(9, 124, 27, 0.8)"],
      borderColor: ["rgba(9, 124, 27, 0.8)"],
      borderWidth: 2,
      pointRadius: 0,
    },
  ],
};
const config = {
  type: "line",
  data: data,
};
const myChart3 = new Chart(graphinserer, config);