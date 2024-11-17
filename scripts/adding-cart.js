
export function addingCard (){


document.getElementById('addCardButton').addEventListener('click', function () {
  // Pobierz szablon nowej karty
  const newCardTemplate = document.getElementById('newCardTemplate');
  const newCard = newCardTemplate.cloneNode(true);

  // Ustawienia nowej karty
  newCard.id = ''; // Usuń ID, aby było unikalne
  newCard.style.display = 'block'; // Pokaż nową kartę

  // Dodanie funkcjonalności przycisku "Zapisz"
  const saveButton = newCard.querySelector('.save-card-button');
  saveButton.addEventListener('click', function () {
      const playerName = newCard.querySelector('.player-name-input').value || 'Unknown';
      const rating = newCard.querySelector('.card-rating-input').value || '0';
      const position = newCard.querySelector('.position-input').value || 'N/A';
      const nationality = newCard.querySelector('.nationality-input').value || 'N/A';
      const club = newCard.querySelector('.club-input').value || 'N/A';
      const pace = newCard.querySelector('.pace').value || 'N/A';
      const shooting= newCard.querySelector('.shooting').value || 'N/A';
      const passing = newCard.querySelector('.passing').value || 'N/A';
      const dribbling = newCard.querySelector('.dribbling').value || 'N/A';
      const defending = newCard.querySelector('.defending').value || 'N/A';
      const physical = newCard.querySelector('.physical').value || 'N/A';

      // Zamień pola input na statyczne teksty
      newCard.innerHTML = `
<div class="card">
      <div class="card-header">
          <div class="player-name">${playerName}</div>
          <div class="card-rating">${rating}</div>
      </div>
      <div class="card-body">
          <img src="images/logo.jpg" alt="Player Image" class="player-image">
          <div class="player-info">
              <div class="position">${position}</div>
              <div class="nationality">Nationality: ${nationality}</div>
              <div class="club">Club: ${club}</div>
          </div>
      </div>
      <div class="card-footer">
          <div class="card-statistics">
              <div>PACE: ${pace}</div>
              <div>SHOOTING: ${shooting}</div>
              <div>PASSING: ${passing}</div>
              <div>DRIBBLING: ${dribbling}</div>
              <div>DEFENDING: ${defending}</div>
              <div>PHYSICAL: ${physical}</div>
              <a>chuj</a>
              <a>chuj</a>
              <a>chuj</a>
              <a>chuj</a>
              <p>chuj</p>
              <p>chuj</p>
              <p>chuj</p>
              <p>chuj</p>

          </div>
      </div>
    </div>
      `;
  });

  // Dodaj nową kartę do kontenera
  document.getElementById('cardsContainer').appendChild(newCard);
})};