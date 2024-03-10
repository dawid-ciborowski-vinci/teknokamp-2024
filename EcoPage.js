import Chart from 'chart.js/auto';

const createChart = (context, config) => new Chart(context, config);

const EcoPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h3>Welcome to your Eco-Responsability page!</h3>
        <div class="chart-container">
            <canvas id="energyChart"></canvas>
            <canvas id="priceChart"></canvas>
            <canvas id="impactChart"></canvas>
        </div>
    `;
    const energyCtx = document.getElementById('energyChart').getContext('2d');

    
    const priceCtx = document.getElementById('priceChart').getContext('2d');
    const impactCtx = document.getElementById('impactChart').getContext('2d');

    const energyData = [25, 25, 20, 15, 15];
    const priceData = [40, 60, 50, 30, 20];
    const impactData = [40, 60];

  
    const priceLabels = ['PRIX SOL', 'PRIX EOL', 'PRIX THER', 'PRIX NUC', 'PRIX HYD'];

    const energyLabels = ['Soleil', 'éoliennes', 'thermique', 'nucléaire', 'hydrogène']; // Correspond à priceLabels
    
    const hyLabels = ['HYDR VERT', 'THERMAL']

    const legendOptions = {
        position: 'top',
        labels: {
            font: {
                size: 20
            }
        }
    };
    
    const energyChart = createChart(energyCtx, {
        type: 'pie',
        data: {
            labels: energyLabels,
            datasets: [{ data: energyData, backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'] }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    legend: legendOptions,
                },
                title: {
                    display: true,
                    text: 'Consommation d\'énergie'
                }
            }
        },
    });

    const priceChart = createChart(priceCtx, {
        type: 'pie',
        data: {
            labels: priceLabels,
            datasets: [{ data: priceData, backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple'] }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    legend: legendOptions,
                },
                title: {
                    display: true,
                    text: 'Prix de l\'énergie'
                }
            }
        },
    });

    const impactChart =  createChart(impactCtx, {
        type: 'pie',
        data: {
            labels: hyLabels,
            datasets: [{ data: impactData, backgroundColor: ['green', 'orange'] }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    legend: legendOptions,
                },
                title: {
                    display: true,
                    text: 'Impact Énergétique'
                }
            }
        },
    });

    energyChart.canvas.addEventListener('click', (event) => {
        const activePoints = energyChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
        if (activePoints.length) {
            const { index } = activePoints[0];
            energyData[index] += 1;  // Augmente la consommation de la source cliquée
            energyChart.update();
    
            // Logique pour augmenter le prix
            if (index < priceData.length) {
                priceData[index] += index + 1;  // Exemple: augmenter plus pour les premiers éléments
                priceChart.update();
            }
    
            const nuclearIndex = energyLabels.indexOf('nucléaire');
            const soleilIndex = energyLabels.indexOf('Soleil');
            const eolienneIndex = energyLabels.indexOf('éoliennes');
    
            // Si l'utilisateur clique sur "nucléaire", augmentez également "Soleil" et "éoliennes"
            if (index === nuclearIndex) {
                if (soleilIndex !== -1) {
                    energyData[soleilIndex] += 1;  // Augmenter la consommation de "Soleil"
                }
                if (eolienneIndex !== -1) {
                    energyData[eolienneIndex] += 1;  // Augmenter la consommation d'"éoliennes"
                }
                // Assurez-vous de mettre à jour le graphique d'énergie pour refléter ces changements
                impactChart.update();
            }
        }
    });
    

    priceChart.canvas.addEventListener('click', (event) => {
        const activePoints = priceChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
        if (activePoints.length) {
            const { index } = activePoints[0];
    
            
            const increment = 5; // Ou toute autre logique de calcul
            priceData[index] += increment; // Augmente le prix
            priceChart.update();
    
            if (index < energyData.length) {
                energyData[index] += increment / 2; // Augmente également la consommation d'énergie
                energyChart.update();
            }
        }
    });
    
    
    
};

export default EcoPage;