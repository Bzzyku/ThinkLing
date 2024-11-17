import { showBusinessesForStudent } from "./show-carts.js";

async function fetchStudentDetails(url) {
    console.log('STRZAL')
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      populateInvestorDetails(data); // Populate the page with the fetched data
    } catch (error) {
      console.error('Error fetching business details:', error);
      // Optionally, display an error message on the page
      document.getElementById('business-details').innerHTML = `<p>Error fetching business details. Please try again later.</p>`;
    }
  }
  
  function populateInvestorDetails(data) {
    document.getElementById('Autor').textContent = data.Autor;
    document.getElementById('Tytul').textContent = data.Tytul;
    document.getElementById('KierunekStudiow').textContent = data.KierunekStudiow;
    document.getElementById('Promotor').textContent = data.Promotor;
    document.getElementById('NazwaUczelni').textContent = data.NazwaUczelni;
    document.getElementById('JednostkaOrganizacyjna').textContent = data.JednostkaOrganizacyjna;
    document.getElementById('SlowaKluczowe').textContent = data.SlowaKluczowe;
    document.getElementById('TypPracyNaukowej').textContent =  data.TypPracyNaukowej;
  }
  
  const apiUrl = 'http://172.19.0.162:8000/studenci/368';
  fetchStudentDetails(apiUrl);
  showBusinessesForStudent(368);
  //showInwestorsForBusiness(1);