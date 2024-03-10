/* eslint-disable */
const AdminPage = () => {
  const main = document.querySelector('main');
 

  main.innerHTML = `
      <h3>Analyse des Données Utilisateurs</h3>
      <div>
          <canvas id="myChart"></canvas>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Type de consommateur</th>
            <th>Champ 1</th>
            <th>Champ 2</th>
            <th>Champ 3</th>
            <th>Champ 4</th>
            <th>Champ 5</th>
            <th>Champ 6</th>
            <th>Champ 7</th>
            <th>Champ 8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Utilisateur 1</td>
            <td>Éco</td>
            <td>Donnée 1</td>
            <td>Donnée 2</td>
            <td>Donnée 3</td>
            <td>Donnée 4</td>
            <td>Donnée 5</td>
            <td>Donnée 6</td>
            <td>Donnée 7</td>
            <td>Donnée 8</td>
          </tr>
          <tr>
            <td>Utilisateur 2</td>
            <td>Pollueur</td>
            <td>Donnée A</td>
            <td>Donnée B</td>
            <td>Donnée C</td>
            <td>Donnée D</td>
            <td>Donnée E</td>
            <td>Donnée F</td>
            <td>Donnée G</td>
            <td>Donnée H</td>
          </tr>
        </tbody>
      </table>
  `;



  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart =

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Éco', 'Normal', 'Pollueur'],
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

};

export default AdminPage;
