/* eslint-disable */
import getAll from "../../models/conso";

const AdminPage = async () => {
  const main = document.querySelector('main');
  let data = [];

  setupChart(main);
  try {
    const res = await getAll();
    data = res;

    // Création de la table et de ses éléments
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const trHead = document.createElement('tr');

    // Création d'un tableau avec les noms des colonnes
    const columnNames = [
      'Date',
      'Totale',
      'Solaire',
      'Thermal',
      'Eolienne',
      'Hydroelectrique',
      'Nucléaire'
    ];

    // Création des en-têtes de colonnes
    columnNames.forEach(columnName => {
      const th = document.createElement('th');
      th.textContent = columnName;
      trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    table.appendChild(thead);

    // Remplissage de la table avec les données
    data.forEach(entry => {
      const trBody = document.createElement('tr');
      Object.keys(entry).forEach(key => {
        const td = document.createElement('td');
        td.textContent = entry[key];
        trBody.appendChild(td);
      });
      tbody.appendChild(trBody);
    });

    table.appendChild(tbody);
    main.appendChild(table);

    // Setup the chart after the table is rendered
  } catch (error) {
    console.log(error);
  }
};

function setupChart(main) {
  // Adding the chart container to the DOM
  const chartContainer = document.createElement('div');
  chartContainer.innerHTML = `
    <h3>Analyse des Données de Consommation des Utilisateurs</h3>
    <canvas id="myChart"></canvas>
  `;
  main.appendChild(chartContainer);

  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Économe', 'Écologique', 'Équilibré'],
      datasets: [{
        label: 'Nombre de personnes',
        data: [5, 10, 2], // Utilisez ici vos données dynamiques
        backgroundColor: [
          'rgba(106, 236, 0, 0.39)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(113, 252, 0, 0.8)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

export default AdminPage;