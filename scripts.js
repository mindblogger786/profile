const ctx = document.getElementById('my-chart');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [20,25,30,35,40,60,65],
        datasets: [{
            label: 'Employer: K 73,500',
            data: ['25','27','29','31','33','35','37','39','41','43','45','47','50'],
            backgroundColor: 'rgb(0,0,255)'
        },
        {
            label: 'Employee: K 52,500',
            data: ['35','37','39','41','43','45','47','49','51','53','55','57','100'],
            backgroundColor: 'rgb(85, 85, 197)'
        },
        {
            label: 'Total Interest: K 244,313',
            data: ['60','80','100','110','130','150','170','190','210','235','260','290','310'],
            backgroundColor: 'rgb(138, 178, 230)'
        }
        ],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
        
    } 
});

// Progress bar 
let circularProgress1 = document.querySelector(".circular-progress1");
let circularProgress2 = document.querySelector(".circular-progress2");
let circularProgress3 = document.querySelector(".circular-progress3");
let progressValue1 = document.querySelector(".progress-value1");
let progressValue2 = document.querySelector(".progress-value2");
let progressValue3 = document.querySelector(".progress-value3");

let progressStart1 = 0,
    progressEnd1 = 78,
    speed1 = 25;

let progress1 = setInterval(() => {
    progressStart1++;

    progressValue1.textContent = `${progressStart1}%`;
    circularProgress1.style.background = `conic-gradient(rgb(11, 243, 193) ${progressStart1 * 3.6}deg, #baf0eb 0deg)`;

    if(progressStart1 == progressEnd1){
        clearInterval(progress1);
    }
}, speed1);


let progressStart2 = 0,
    progressEnd2 = 95,
    speed2 = 20;

let progress2 = setInterval(() => {
    progressStart2++;

    progressValue2.textContent = `${progressStart2}%`;
    circularProgress2.style.background = `conic-gradient(rgb(11, 243, 193) ${progressStart2 * 3.6}deg, #baf0eb 0deg)`;

    if(progressStart2 == progressEnd2){
        clearInterval(progress2);
    }
}, speed2);

let progressStart3 = 0,
    progressEnd3 = 56,
    speed3 = 35;

let progress3 = setInterval(() => {
    progressStart3++;

    progressValue3.textContent = `${progressStart3}%`;
    circularProgress3.style.background = `conic-gradient(rgb(11, 243, 193) ${progressStart3 * 3.6}deg, #baf0eb 0deg)`;

    if(progressStart3 == progressEnd3){
        clearInterval(progress3);
    }
}, speed3);