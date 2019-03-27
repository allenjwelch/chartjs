const ctxLine = document.getElementById("lineChart");
const ctxBar = document.getElementById("barChart");
const ctxRadar = document.getElementById("radarChart");
const ctxDoughnut = document.getElementById("doughnutChart");
console.log(Date.now())

// Chart.defaults.global.responsive = false;
// Chart.defaults.global.hover.mode = "nearest";
Chart.defaults.global.animation.onComplete = () => {
	console.log('finished')
}

Chart.defaults.global.animation.duration = 3000;


let labels = [];
// let date = new Date();
// let nextDate;
var date = new Date();
var options = {
  month: "long",
  day: "numeric"
};
// date = date.toLocaleDateString("en-US", options);

for (i = 0; i < 5; i++) {
	date.setDate(date.getDate() + i);
	labels.push(date.toLocaleDateString("en-US", options));
}

console.log(date.toLocaleDateString("en-US", options));
console.log(labels);
// console.log(tomorrow.toLocaleDateString("en-US", options));


let lineChart = new Chart(ctxLine, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
        pointHoverBackgroundColor: "rgba(255, 255, 0, 1)"
      },
      {
        label: "# of Votes",
        data: [2, 5, 18, 10, 7, 8],
        lineTension: 0.1,
        backgroundColor: ["rgba(0, 0, 200, .1)"],
        borderColor: ["rgba(0, 0, 200, 1)"],
        borderWidth: 1,
        pointHoverBackgroundColor: [
          "rgba(200, 0, 0, 1)",
          "rgba(0, 0, 200, 1)",
          "rgba(255, 255, 0, 1)",
          "rgba(0, 255, 0, 1)"
        ]
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

let barChart = new Chart(ctxBar, {
	type: "bar",
	data: {
		labels: ["this", "that", "the other"],
		datasets: [{
				label: "These things...",
				data: [12, 19, 3],
				backgroundColor: [
					'rgba(0, 150, 0, .5)',
					'rgba(150, 0, 0, .5)',
					'rgba(0, 0, 100, .5)',
				],
				borderColor: [
					'rgba(0, 0, 0, 1)',
				],
		}]
	}
});

let radarChart = new Chart(ctxRadar, {
	type: "radar",
	data: {
		labels: ["this", "that", "the other", "more stuff", "other stuff"],
		datasets: [
			{
				label: "These things...",
				data: [12, 19, 3, 14, 7],
				backgroundColor: ['rgba(0, 150, 0, .5)'],
			},
			{
				label: "These other things...",
				data: [4, 9, 13, 4, 17],
				backgroundColor: ['rgba(150, 0, 0, .5)'],
			}
		]
	}
});

let doughnutChart = new Chart(ctxDoughnut, {
	type: "doughnut",
	data: {
		labels: ["this", "that", "the other", "more stuff", "other stuff"],
		datasets: [
			{
				label: "These things...",
				data: [12, 19, 3, 14, 7],
				backgroundColor: ['rgba(0, 150, 0, .5)'],
			},
		]
	}
});
