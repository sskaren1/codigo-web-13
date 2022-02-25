// Gráfica Bar

const contenedorBarChart=document.querySelector('#bar-chart').getContext('2d');

const barChart = new Chart(contenedorBarChart,{
    type: 'bar',
    data:{ 
    labels:['lunes','martes','miercoles','jueves','viernes','sabado','domingo'],
    datasets:[{
        label:'Número de usuarios por día',
        data:[30,40,50,80,150,60,200],
        borderWidth:3,
        borderColor:"#f2f",
        backgroundColor:["#ad0","#f01","#a34","#dac","#a34","#ead","#234","#eda"],
    }]
    }
});


// // Gráfica Doughnut
// const contenedorDoughnutChart=document.querySelector('#doughnut-chart').getContext('2d');

// const doughnutChart = new Chart(contenedorDoughnutChart,{
//     type: 'doughnut',
//     data:{ 
//     labels:['Computadoras','Celulares','Refrigeradoras','Parlantes'],
//     datasets:[{
//         label:'Productos Electrónicos',
//         data:[180,150,560,200],
//         borderWidth:3,
//         borderColor:"#f2f",
//         backgroundColor:["#ad0","#ead","#234","#eda"],
//     }]
//     }
// });

// otro modo mas resumido
const containerDoughnutChart = document.querySelector("#doughnut-chart").getContext("2d");
// Estos es para los datos
const dataForChart2 = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label:'Productos Electrónicos',
      data:[180,150,560,200],
      borderWidth:3,
      borderColor:"#f2f",
      backgroundColor:["#ad0","#ead","#234","#eda"],
    }
  ],
};
// Esto es para crear el tipo y dar la configuracion de datos
const configDoughnut = {
  type: 'doughnut',
  data: dataForChart2,
};
// Esto es para la creacion
const donutChart = new Chart(containerDoughnutChart, configDoughnut);



// Linear chart
const containerLineChart = document
  .querySelector("#lineal-chart")
  .getContext("2d");
const dataForChart = {
  labels: ["Computadoras", "Celulares", "Refrigeradoras", "Parlantes"],
  datasets: [
    {
      label: "PRODUCTOS ELECTRONICOS",
      data: [100, 230, 520, 267],
      backgroundColor: ["#f01", "green", "yellow", "orange"],
    },
  ],
};
const configLineal = {
  type: "line",
  data: dataForChart,
};
const lineChart = new Chart(containerLineChart, configLineal);


//Bubble Chart
const containerBubbleChart = document.querySelector("#bubble-chart").getContext("2d");

dataForChart.datasets[0].data=[
    {
        x:20,
        y:30,
        r:15,
    },
    {
        x:40,
        y:20,
        r:10,
    },
    {
        x:50,
        y:20,
        r:30,
    }
]
const configBubble = {
  type: "bubble",
  data: dataForChart,
};
const BubbleChart = new Chart(containerBubbleChart, configBubble);


// Polar chart
const containerPolarChart = document
  .querySelector("#polar-chart")
  .getContext("2d");

dataForChart.datasets[0].data = [300, 249, 321, 278];

const configPolar = {
  type: "polarArea",
  data: dataForChart,
};
const polarChart = new Chart(containerPolarChart, configPolar);


// Radar chart
const containerRadarChart = document.querySelector("#radar-chart");
const configRadarChart = {
  type: "radar",
  data: dataForChart,
};
const radarChart = new Chart(containerRadarChart, configRadarChart);

// Scatter chart
const containerScatterChart = document
  .querySelector("#scatter-chart")
  .getContext("2d");
  
dataForChart.datasets[0].data = [
  {
    x: -10,
    y: 0,
  },
  {
    x: 0,
    y: 10,
  },
  {
    x: 10,
    y: 5,
  },
  {
    x: 0.5,
    y: 5.5,
  },
];
const configScatter = {
  type: "scatter",
  data: dataForChart,
};
const scatterChart = new Chart(containerScatterChart, configScatter);