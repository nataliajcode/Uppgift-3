//Funktion  för att växla mellan mörk/ljus bakgrund
document.getElementById("lightModeBtn").addEventListener("click", function() {
    // Växla mellan ljus och mörkt läge
    document.body.classList.toggle("light-mode");
  
    // Uppdaterar texten på knappen 
    const btnText = document.body.classList.contains("light-mode") ? "Byt till mörkt läge" : "Byt till ljust läge";
    document.getElementById("lightModeBtn").textContent = btnText;
  });
  
  // Popup för mitt cv
  document.getElementById("loadCvBtn").addEventListener("click", function() {
   
    document.getElementById("cvModal").style.display = "flex";
  
    // Hämtar JSON-filen
    fetch('cv.json')
      .then(response => response.json())
      .then(data => {
        
        let cvHtml = `<h2>Utbildningar</h2>`;
        
        data.utbildningar.forEach(utbildning => {
          cvHtml += `<p><strong>${utbildning.program}</strong>, ${utbildning.skola} (${utbildning.år})</p>`;
        });
        
        cvHtml += `<h2>Arbeten</h2>`;
        
        data.arbeten.forEach(arbete => {
          cvHtml += `<p><strong>${arbete.titel}</strong> på ${arbete.företag} (${arbete.år})</p>`;
        });
  
        // Läggertill CV-informationen i pop-up
        document.getElementById("cvContainer").innerHTML = cvHtml;
      })
      .catch(error => {
        console.error('Det gick inte att läsa in JSON-filen:', error);
      });
  });
  
  // Stänger pop-up 
  document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("cvModal").style.display = "none";
  });
  
  // Stänger pop-up om man klickar utanför den
  window.addEventListener("click", function(event) {
    const modal = document.getElementById("cvModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
  });
  
  // Ser till att modalen är dold vid sidstart
  window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cvModal").style.display = "none";
  });
  