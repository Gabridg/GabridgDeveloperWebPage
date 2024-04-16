// document.addEventListener("DOMContentLoaded", function() {
//     const matrixContainer = document.getElementById('matrix-container');
//     const columnCount = Math.floor(window.innerWidth / 20); // Numero di colonne
//     let rowCount = Math.floor(window.innerHeight); // Numero di righe
//     const characters = 'ASUMETI01';

//     // Funzione per generare una stringa casuale di lunghezza data
//     function generateRandomString(length) {
//       let result = '';
//       for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//       }
//       return result;
//     }

//     // Funzione per creare una nuova riga con una lettera casuale
//     function createNewRow() {
//       const row = document.createElement('div');
//       row.className = 'matrix-row';
//       row.textContent = generateRandomString(1);
//       return row;
//     }

//     // Creazione delle colonne e inizializzazione delle righe
//     const columns = [];
//     for (let i = 0; i < columnCount; i++) {
//       const column = document.createElement('span');
//       column.className = 'matrix-column';
//       column.style.position = 'absolute';
//       column.style.left = `${i * 20}px`;
//       column.style.height = '100vh'; // Imposta l'altezza della colonna su 100vh
//       matrixContainer.appendChild(column);

//       const columnRows = [];
//       for (let j = 0; j < rowCount; j++) {
//         const row = createNewRow();
//         column.appendChild(row);
//         columnRows.push(row);
//       }
//       columns.push(columnRows);
//     }

//     // Funzione per aggiornare le lettere delle righe
//     function updateRowsLetters() {
//         columns.forEach(columnRows => {
//           for (let j = rowCount - 1; j >= 0; j--) { // Modificato >= invece di >
//             const currentRow = columnRows[j];
//             const previousRow = columnRows[j - 1] || columnRows[0]; // Usa la prima riga se j - 1 è fuori indice
//             currentRow.textContent = previousRow.textContent;
//           }
//           columnRows[0].textContent = generateRandomString(1);
//         });
//     }

//     // Animazione delle stringhe
//     setInterval(updateRowsLetters, 200); // Aggiorna le lettere delle righe ogni 100 millisecondi

//     // Ridimensionamento delle colonne quando la finestra viene ridimensionata
//     window.addEventListener('resize', function() {
//       rowCount = Math.floor(window.innerHeight / 20);
//       document.querySelectorAll('.matrix-column').forEach(column => {
//         column.style.height = '100vh'; // Imposta l'altezza della colonna su 100vh
//       });
//     });
    
//     document.getElementsByClassName('.button').addEventListener('click', function() {
//       var splash = document.getElementById('splash');
//       splash.style.left = (event.clientX - 50) + 'px'; // Posizione orizzontale del click
//       splash.style.top = (event.clientY - 50) + 'px'; // Posizione verticale del click
//       splash.style.opacity = 1; // Mostra la goccia
//       setTimeout(function() {
//         splash.style.opacity = 0; // Nascondi la goccia dopo un po'
//       }, 500);
//     });
// });


const frase = "Whatever our souls are made of, his and mine are the same";
const delay = 50; // Tempo di ritardo tra ogni carattere

document.getElementById('outlook').addEventListener('click', function() {
  const testo = document.getElementById('showed-text');
  const outlook = document.getElementById('div-out');
  const content = document.getElementById('content');
  const audio = document.getElementById('audioPlayer');
  outlook.style.display = 'none';
  audio.currentTime = 59; // Imposta il tempo corrente a 60 secondi (1 minuto)
  audio.play(); // Avvia la riproduzione dell'audio
  setTimeout(function() {
    audio.pause(); // Interrompi la riproduzione dell'audio
  }, 90000);
  testo.style.color = '#00ff41';
  testo.style.fontWeight = 'bold';
  testo.style.fontSize = '16px';
  testo.innerHTML = ''; // Resetta il contenuto
  typeWriter(frase, testo);
  outlook.style.display = 'none';
  content.style.display = 'none';
});
const video = document.getElementById('videoPlayer');

function typeWriter(text, targetElement) {
  let i = 0;
  const speed = delay;
  function type() {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Una volta completata la scrittura della frase, mostra il cuore
      const cuore = document.getElementById('cuore');
      const Any = document.getElementById('any');
      const phrasePosition = document.getElementById('phrase');
      // cuore.style.display = 'block';  Mostra il cuore
      
      video.style.display = 'block';
      video.removeAttribute('controls');
      video.play();
      const phrase = "Ti amo da impazzire Anastasia,";
      const phrase1 = "ciò che provo per te non finirà mai. 26/01/2022 => ∞";

      video.addEventListener('ended', function() {
        // Ferma il video
        video.pause();
        // Imposta la posizione del video all'ultimo frame
        video.currentTime = video.duration;

      });
      Any.style.display = 'block'; // Mostra la dedica
      phrasePosition.style.display = 'block'; // Mostra la dedica
      
      setTimeout(function() {
        secondWriter(phrase, Any);
        secondWriter(phrase1, phrasePosition);
      }, 3000)
      
    }
  }
  type();
};

function secondWriter(text, targetElement) {
  let j = 0;
  const speed = 100;
  function type() {
    if (j < text.length) {
      targetElement.innerHTML += text.charAt(j);
      j++;
      setTimeout(type, speed);
  }
}
    type();
}

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Aggiungi la classe "splashing" all'elemento cliccato
    this.classList.add('splashing');
    
    // Rimuovi la classe "splashing" dopo un breve ritardo
    setTimeout(() => {
      this.classList.remove('splashing');
    }, 300); // Tempo in millisecondi dell'effetto "splash"
  });
});