document.getElementById('toggleCardButton').addEventListener('click',  () => {
  if(document.getElementById('toggleCardButton').innerHTML ==="Rozwiń informacje o mnie" ){
    document.getElementById('toggleCardButton').innerHTML = "Schowaj informacje o mnie"
  }else{
    document.getElementById('toggleCardButton').innerHTML = "Rozwiń informacje o mnie"
  }
  
  const card = document.getElementById('fifaCard');
  if (card.style.display === 'none' || card.style.display === '') {
      card.style.display = 'block';
  } else {
      card.style.display = 'none';
  }
});



/*document.getElementById('editCardButton').addEventListener('click', function () {
  const editableElements = document.querySelectorAll('[data-editable]');
  const isEditing = this.textContent === 'Edytuj';

  editableElements.forEach(element => {
      if (isEditing) {
          // Zamień tekst na input
          const input = document.createElement('input');
          input.type = 'text';
          input.value = element.textContent;
          input.className = 'editable-input';
          element.replaceWith(input);
      } else {
          // Zamień input z powrotem na tekst
          const span = document.createElement('div');
          span.textContent = element.value;
          span.setAttribute('data-editable', 'true');
          span.className = element.className;
          element.replaceWith(span);
      }
  });

  // Przełącz tekst na przycisku
  this.textContent = isEditing ? 'Zapisz' : 'Edytuj';
});
*/