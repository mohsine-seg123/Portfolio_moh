

document.addEventListener("DOMContentLoaded", function () {
   let typedd = new Typed(".ilia", {
     strings: ["ILIA"],
     typeSpeed: 120,
     backSpeed: 120,
     backDelay: 3000,
     loop: true,
   });


  const navItems = document.querySelectorAll(".nav-list li");
  const sections = document.querySelectorAll(".section");
  const box = document.querySelector(".box");

  // Gestion des onglets Resume
  const navlistR = document.querySelectorAll(".resume-list");
  navlistR.forEach((item) => {
    item.addEventListener("click", () => {
      navlistR.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // Navigation principale
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Retirer les classes actives
      navItems.forEach((nav) => nav.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      // Ajouter les classes actives
      item.classList.add("active");
      sections[index].classList.add("active");
    });
  });


  // Activer la première section au chargement
  navItems[0].classList.add("active");
  sections[0].classList.add("active");



  const filterButtons = document.querySelectorAll(".choix div");
  const projectCards = document.querySelectorAll(".project-card");

  // Ajouter data-filter aux boutons de filtre
  filterButtons.forEach((button, index) => {
    const filters = ["all", "web", "mobile", "ai", "games"];
    button.setAttribute("data-filter", filters[index]);
  });

  filterButtons[0].classList.add("active");
  // Filter functionality
  filterButtons.forEach((button,index) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
       let nbr=0;
      const filterValue = this.getAttribute("data-filter");
       const oldAnimation = document.querySelector(".no-animation");
       if (oldAnimation) oldAnimation.remove();
      
      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          nbr++;
        } else {
          card.style.display = "none";
        }
      });

     if (nbr === 0) {
       const div = document.createElement("div");
       div.classList.add("no-animation");

       // CSS appliqué directement via JS
       div.style.display = "flex";
       div.style.justifyContent = "center";
       div.style.alignItems = "center";
       div.style.height = "400px"; 
       div.style.width = "100%";
       div.style.marginTop = "20px";
       div.style.transition = "transform 1s ease";
       div.style.transform = "translateX(250px)";
       div.style.marginTop = "-40px";



       div.innerHTML = `
        <dotlottie-wc
            src="https://lottie.host/7f4ead61-5065-4608-9dc2-ecccb9926541/GyBRBHAGpw.lottie"
            style="width: 450px; height: 450px; max-width: 90%;"
            autoplay
            loop
        ></dotlottie-wc>
    `;

       const containt = document.querySelector(".projects-container");
       containt.append(div);
     }

    });
  });

  // Like functionality
  const likeIcons = document.querySelectorAll(".fa-heart");
  likeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      this.classList.toggle("far");
      this.classList.toggle("fas");
      this.classList.toggle("liked");

      if (this.classList.contains("liked")) {
        this.style.color = "red";
      } else {
        this.style.color = "";
      }

      const likesCount =
        this.closest(".project-actions").querySelector(".likes-count");
      let currentLikes = parseInt(likesCount.textContent) || 0;

      if (this.classList.contains("liked")) {
        likesCount.textContent = currentLikes + 1 + " likes";
      } else {
        likesCount.textContent = currentLikes - 1 + " likes";
      }
    });
  });

  // partie commentaire
     const floatingChatbotBtn = document.querySelector(".floating-chatbot-btn");
     const chatbotContainer = document.querySelector(".chatbot-container");
     const closeChatbot = document.querySelector(".close-chatbot");

     if (floatingChatbotBtn && chatbotContainer && closeChatbot) {
       // Ajouter l'animation de pulse au bouton
       floatingChatbotBtn.classList.add("pulse");

       // Ouvrir le chatbot
       floatingChatbotBtn.addEventListener("click", function (e) {
         e.stopPropagation();
         chatbotContainer.classList.add("active");
         // Arrêter l'animation de pulse quand le chat est ouvert
         floatingChatbotBtn.classList.remove("pulse");
         floatingChatbotBtn.classList.add("desactive");
       });

       // Fermer le chatbot
       closeChatbot.addEventListener("click", function () {
         chatbotContainer.classList.remove("active");
         // Redémarrer l'animation de pulse
         setTimeout(() => {
           floatingChatbotBtn.classList.add("pulse");
         }, 300);
         floatingChatbotBtn.classList.remove("desactive");
       });

       // Fermer le chatbot en cliquant à l'extérieur
       document.addEventListener("click", function (event) {
         if (
           !chatbotContainer.contains(event.target) &&
           !floatingChatbotBtn.contains(event.target) &&
           chatbotContainer.classList.contains("active")
         ) {
           chatbotContainer.classList.remove("active");
           // Redémarrer l'animation de pulse
           setTimeout(() => {
             floatingChatbotBtn.classList.add("pulse");
           }, 300);

            floatingChatbotBtn.classList.remove("desactive");
         }
       });

       // Empêcher la fermeture quand on clique dans le chatbot
       chatbotContainer.addEventListener("click", function (e) {
         e.stopPropagation();
       });
     }

     // resume

});