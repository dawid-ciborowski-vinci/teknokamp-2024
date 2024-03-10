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
        
       
</div>

    `;
    const energyCtx = document.getElementById('energyChart').getContext('2d');

    
    const priceCtx = document.getElementById('priceChart').getContext('2d');
    const impactCtx = document.getElementById('impactChart').getContext('2d');

    const energyData = [25, 25, 20, 15, 15];
    const priceData = [40, 60, 50, 30, 20];
    const impactData = [50, 50];

  
    const priceLabels = ['PRIX SOL', 'PRIX EOL', 'PRIX THER', 'PRIX NUC', 'PRIX HYD'];

    const energyLabels = ['Soleil', 'éoliennes', 'thermique', 'nucléaire', 'hydroélectrique']; // Correspond à priceLabels
    
    const hyLabels = ['BON', 'MAUVAIS']

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

   const impacts=  createChart(impactCtx, {
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
            energyData[index] += 1;  
            impactData[index] += 10; // Augmente la consommation de la source cliquée
            energyChart.update();
            impacts.update();
    
            // Logique pour augmenter le prix
            if (index < priceData.length) {
                priceData[index] += index + 1;
                impactData[index] += 10; 
                impacts.update();  // Exemple: augmenter plus pour les premiers éléments
                priceChart.update();
            }

           
            
            
        }
    });

    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'A' || event.key === 'a') {
            // Parcourir le tableau energyData pour diminuer la consommation pour chaque source d'énergie
            energyData.forEach((value, index) => {
                if (value > 0) {  // Vérifiez pour ne pas diminuer en dessous de 0
                    energyData[index] -= 1;  // Diminue la consommation pour cette source
                }
    
                // Si vous voulez également ajuster les prix en conséquence, ajoutez votre logique ici
                // Assurez-vous que priceData a un élément correspondant à cet index
                if (priceData[index] > 0) {
                    priceData[index] -= 1;  // Diminue le prix pour cette source
                }
            });
    
            // Après la mise à jour des données, mettez à jour les graphiques pour refléter les changements
            energyChart.update();
            priceChart.update();
    
            // Mettez à jour impactChart si nécessaire
            // impactChart.update();
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