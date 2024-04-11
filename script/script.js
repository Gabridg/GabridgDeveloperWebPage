document.addEventListener("DOMContentLoaded", function() {
    const matrixContainer = document.getElementById('matrix-container');
    const columnCount = Math.floor(window.innerWidth / 20); // Numero di colonne
    let rowCount = Math.floor(window.innerHeight); // Numero di righe
    const characters = 'ASUMETI01';

    // Funzione per generare una stringa casuale di lunghezza data
    function generateRandomString(length) {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }

    // Funzione per creare una nuova riga con una lettera casuale
    function createNewRow() {
      const row = document.createElement('div');
      row.className = 'matrix-row';
      row.textContent = generateRandomString(1);
      return row;
    }

    // Creazione delle colonne e inizializzazione delle righe
    const columns = [];
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('span');
      column.className = 'matrix-column';
      column.style.position = 'absolute';
      column.style.left = `${i * 20}px`;
      column.style.height = '100vh'; // Imposta l'altezza della colonna su 100vh
      matrixContainer.appendChild(column);

      const columnRows = [];
      for (let j = 0; j < rowCount; j++) {
        const row = createNewRow();
        column.appendChild(row);
        columnRows.push(row);
      }
      columns.push(columnRows);
    }

    // Funzione per aggiornare le lettere delle righe
    function updateRowsLetters() {
        columns.forEach(columnRows => {
          for (let j = rowCount - 1; j >= 0; j--) { // Modificato >= invece di >
            const currentRow = columnRows[j];
            const previousRow = columnRows[j - 1] || columnRows[0]; // Usa la prima riga se j - 1 è fuori indice
            currentRow.textContent = previousRow.textContent;
          }
          columnRows[0].textContent = generateRandomString(1);
        });
    }

    // Animazione delle stringhe
    setInterval(updateRowsLetters, 100); // Aggiorna le lettere delle righe ogni 100 millisecondi

    // Ridimensionamento delle colonne quando la finestra viene ridimensionata
    window.addEventListener('resize', function() {
      rowCount = Math.floor(window.innerHeight / 20);
      document.querySelectorAll('.matrix-column').forEach(column => {
        column.style.height = '100vh'; // Imposta l'altezza della colonna su 100vh
      });
    });
});
