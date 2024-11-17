import { showInwestorsForBusiness, showStudentsCardsForBusiness } from "./show-carts.js";
import { addingCard } from "./adding-cart.js";
async function fetchBusinessDetails(url) {
    console.log('STRZAL')
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      populateBusinessDetails(data); // Populate the page with the fetched data
    } catch (error) {
      console.error('Error fetching business details:', error);
      // Optionally, display an error message on the page
      document.getElementById('business-details').innerHTML = `<p>Error fetching business details. Please try again later.</p>`;
    }

   
    populateBusinessDetails(data);
  }
  
  function populateBusinessDetails(data) {
    document.getElementById('business-name').textContent = data.Nazwa;
    document.getElementById('business-industry').textContent = data.Branza || 'N/A';
    document.getElementById('business-description').textContent = data.OpisBiznesu;
    document.getElementById('business-keywords').textContent = data.SlowaKluczowe || 'N/A';
    document.getElementById('business-risk').textContent = data.ProcentRyzyka + '%';
    document.getElementById('business-profit').textContent = data.ProcentZysku + '%';
    document.getElementById('business-share-percentage').textContent = data.ProcentUdzialu + '%';
    document.getElementById('business-share-price').textContent = '$' + data.CenaUdzialu;
  }
  
  const apiUrl = 'http://172.19.0.162:8000/biznes/1007';
  var data = {
    "Nazwa": "Tech Innovations",
    "Branza": "Technology",
    "OpisBiznesu": "A company focused on cutting-edge technology and software solutions.",
    "SlowaKluczowe": "tech, software, innovation",
    "ProcentRyzyka": 15.5,
    "ProcentZysku": 25,
    "WektorBiznes": 0.75,
    "ProcentUdzialu": 10,
    "CenaUdzialu": 5000,
    "ID": 1
  };
  fetchBusinessDetails(apiUrl);
  //populateBusinessDetails(data);
  showStudentsCardsForBusiness(1007);
  showInwestorsForBusiness(1007);
  addingCard();