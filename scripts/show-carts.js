export async function showStudentsCardsForBusiness(businessId) {
    try {
      // Fetch closest students for the given business ID
      const response = await fetch(`http://172.19.0.162:8000/biznes/${businessId}/najblizsi_studenci`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const students = await response.json(); // Parse JSON data
      console.log(students); // Log fetched data for debugging
  
      // Clear existing cards
      document.querySelector(".recommended-students-for-business").innerHTML = '';
  
      // Generate cards for each student
      students.forEach((student) => {
        const HTML = `
        <div class="card">
          <div class="card-header">
              <div class="player-name">${student.Autor}</div>
                  <div class="position">${student.KierunekStudiow}</div>
                  <div class="nationality">Promotor: ${student.Promotor}</div>
                  <div class="club">University: ${student.NazwaUczelni}</div>
                  <div>Specialization: ${student.TypPracyNaukowej}</div>
          </div>
          <div class="card-body">
              <div class="player-info">
                <div class="card-rating">${student.Tytul}</div>
              </div>
          </div>
          <div class="card-footer">
              <div class="card-statistics">
                  <div>Keywords: ${student.SlowaKluczowe}</div>
              </div>
          </div>
        </div>
        `;
        document.querySelector(".recommended-students-for-business").innerHTML += HTML;
      });
    } catch (error) {
      console.error('Error fetching students:', error);
      document.querySelector(".recommended-students-for-business").innerHTML = `<p>Error fetching student data. Please try again later.</p>`;
    }
  }

  export async function showInwestorsForBusiness(businessId) {
    try {
      // Fetch closest students for the given business ID
      const response = await fetch(`http://172.19.0.162:8000/biznes/${businessId}/inwestorzy`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const inwestorzy = await response.json(); // Parse JSON data
      console.log(inwestorzy); // Log fetched data for debugging
  
      // Clear existing cards
      document.querySelector(".recommended-investors-for-business").innerHTML = '';
  
      // Generate cards for each student
      inwestorzy.forEach((inwestor) => {
        const HTML = `
        <div class="card">
          <div class="card-header">
              <div class="player-name">${inwestor.Imie} ${inwestor.Nazwisko}</div>
                  <div class="position">${inwestor.Kraj}</div>
          </div>
          <div class="card-body">
              <div class="player-info">
                <div class="card-rating">Minimalny zysk: ${inwestor.MinimalnyZysk}</div>
                <div class="card-rating">Maksymalne ryzyko: ${inwestor.MaksymalneRyzyko}</div>
              </div>
          </div>
          <div class="card-footer">
              <div class="card-statistics">
                  <div>Email: ${inwestor.Email}</div>
                  <div>Numer telefonu: ${inwestor.NumerTelefonu}</div>
              </div>
          </div>
        </div>
        `;
        document.querySelector(".recommended-investors-for-business").innerHTML += HTML;
      });
    } catch (error) {
      console.error('Error fetching students:', error);
      document.querySelector(".recommended-investors-for-business").innerHTML = `<p>Error fetching student data. Please try again later.</p>`;
    }
  }

  export async function showBusinessesForInwestor(inwestorId) {
    try {
      // Fetch closest students for the given business ID
      const response = await fetch(`http://172.19.0.162:8000/inwestor/${inwestorId}/biznesy`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const biznesy = await response.json(); // Parse JSON data
      console.log(biznesy); // Log fetched data for debugging
  
      // Clear existing cards
      document.querySelector(".recommended-businesses-for-investor").innerHTML = '';
  
      // Generate cards for each student
      biznesy.forEach((biznes) => {
        const HTML = `
        <div class="card">
          <div class="card-header">
              <div class="player-name">${biznes.Nazwa}</div>
                  <div class="position">${biznes.Branza}</div>
          </div>
          <div class="card-body">
              <div class="player-info">
                <div class="card-rating">Szacowany zysk: ${biznes.ProcentZysku}</div>
                <div class="card-rating">Szacowane ryzyko: ${biznes.ProcentRyzyka}</div>
                <div class="card-rating">Procent udziału: ${biznes.ProcentUdzialu}</div>
                <div class="card-rating">Cena udziału: ${biznes.CenaUdzialu}</div>
              </div>
          </div>
          <div class="card-footer">
              <div class="card-statistics">
                  <div>${biznes.SlowaKluczowe}</div>
              </div>
          </div>
        </div>
        `;
        document.querySelector(".recommended-businesses-for-investor").innerHTML += HTML;
      });
    } catch (error) {
      console.error('Error fetching students:', error);
      document.querySelector(".recommended-businesses-for-investor").innerHTML = `<p>Error fetching student data. Please try again later.</p>`;
    }
  }

  export async function showBusinessesForStudent(studentId) {
    try {
      // Fetch closest students for the given business ID
      const response = await fetch(`http://172.19.0.162:8000/studenci/${studentId}/najblizsze_biznesy`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const biznesy = await response.json(); // Parse JSON data
      console.log(biznesy); // Log fetched data for debugging
  
      // Clear existing cards
      document.querySelector(".recommended-businesses-for-student").innerHTML = '';
  
      // Generate cards for each student
      biznesy.forEach((biznes) => {
        const HTML = `
        <div class="card">
          <div class="card-header">
              <div class="player-name">${biznes.Nazwa}</div>
                  <div class="position">${biznes.Branza}</div>
          </div>
          <div class="card-body">
              <div class="player-info">
                <div class="card-rating">Opis biznesu: ${biznes.OpisBiznesu}</div>
              </div>
          </div>
          <div class="card-footer">
              <div class="card-statistics">
                  <div>${biznes.SlowaKluczowe}</div>
              </div>
          </div>
        </div>
        `;
        document.querySelector(".recommended-businesses-for-student").innerHTML += HTML;
      });
    } catch (error) {
      console.error('Error fetching students:', error);
      document.querySelector(".recommended-businesses-for-student").innerHTML = `<p>Error fetching student data. Please try again later.</p>`;
    }
  }



   
   
  function nextButtonOnClick(number){
    const nextButton =  document.querySelector('.next').addEventListener('click',() => {
      number++;
    })
  }