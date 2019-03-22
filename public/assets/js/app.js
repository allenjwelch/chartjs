const ctx = document.getElementById("lineChart");
console.log(Date.now())

let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            pointHoverBackgroundColor: 'rgba(255, 255, 0, 1)',
        },
        {
            label: '# of Votes',
            data: [2, 5, 18, 10, 7, 8],
            lineTension: .1,
            backgroundColor: [
                'rgba(0, 0, 200, .1)',
            ],
            borderColor: [
                'rgba(0, 0, 200, 1)',
            ],
            borderWidth: 1,
            pointHoverBackgroundColor: [
                'rgba(200, 0, 0, 1)',
                'rgba(0, 0, 200, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0, 255, 0, 1)',
            ],
        },

        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    },
})
