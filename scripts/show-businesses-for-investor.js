import { showBusinessesForInwestor } from "./show-carts.js";

async function fetchInvestorDetails(url) {
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
    document.getElementById('investor-name').textContent = data.Imie;
    document.getElementById('investor-lastname').textContent = data.Nazwisko;
    document.getElementById('investor-country').textContent = data.Kraj || 'N/A';
    document.getElementById('investor-risk').textContent = data.MaksymalneRyzyko + '%';
    document.getElementById('investor-profit').textContent = data.MinimalnyZysk + '%';
    document.getElementById('investor-email').textContent = data.Email;
    document.getElementById('investor-phone').textContent =  data.NumerTelefonu;
  }
  
  const apiUrl = 'http://172.19.0.162:8000/inwestor/2';
  fetchInvestorDetails(apiUrl);
showBusinessesForInwestor(2);
  //showInwestorsForBusiness(1);