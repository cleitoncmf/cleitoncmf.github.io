document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o header');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;
      setupMenu();
    })
    .catch(error => {
      console.error('Erro:', error);
    });
});

function setupMenu() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  
  console.log('Toggle button:', toggleBtn); // Debug
  console.log('Nav:', nav); // Debug

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
      
      // Altera o ícone
      toggleBtn.textContent = nav.classList.contains("active") ? "✕" : "☰";
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("active") && 
          !nav.contains(e.target) && 
          e.target !== toggleBtn) {
        nav.classList.remove("active");
        toggleBtn.textContent = "☰";
      }
    });

    // Fecha o menu ao clicar em um link
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggleBtn.textContent = "☰";
      });
    });
  } else {
    console.error('Elementos do menu não encontrados');
  }
}