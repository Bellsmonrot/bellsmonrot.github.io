// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  firma();
  const yearElement = document.querySelector('.year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  // Header scroll effect
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "0.5rem 0";
      header.style.backgroundColor = "rgba(26, 26, 46, 0.95)";
    } else {
      header.style.padding = "0.5rem 0";
      header.style.backgroundColor = "rgba(26, 26, 46, 0.9)";
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active");

      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.backgroundColor = "rgba(26, 26, 46, 0.95)";
        navLinks.style.padding = "1rem 2rem";
        navLinks.style.backdropFilter = "blur(10px)";
      }
    });
  }

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".service-card, .stat-item, .benefit"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animated elements
  const elementsToAnimate = document.querySelectorAll(
    ".service-card, .stat-item, .benefit"
  );
  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Run animation on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Run once on page load
  animateOnScroll();

  // Create floating stars/symbols effect
  const createFloatingElements = () => {
    const symbols = ["✧", "★", "☽", "⋆", "⊹", "✦"];
    const container = document.body;
    const numberOfElements = 30;

    for (let i = 0; i < numberOfElements; i++) {
      const element = document.createElement("span");
      const symbol = symbols[Math.floor(Math.random() * symbols.length)];

      element.textContent = symbol;
      element.className = "floating-symbol";
      element.style.position = "absolute";
      element.style.color =
        "rgba(230, 179, 37, " + (Math.random() * 0.3 + 0.1) + ")";
      element.style.fontSize = Math.random() * 20 + 10 + "px";
      element.style.left = Math.random() * 100 + "vw";
      element.style.top = Math.random() * 100 + "vh";
      element.style.zIndex = "-1";
      element.style.opacity = Math.random() * 0.5 + 0.1;
      element.style.animation =
        "float " + (Math.random() * 20 + 10) + "s linear infinite";
      element.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(element);
    }

    // Add the animation keyframes
    const style = document.createElement("style");
    style.textContent = `
              @keyframes float {
                  0% {
                      transform: translate(0, 0) rotate(0deg);
                  }
                  25% {
                      transform: translate(10px, 10px) rotate(5deg);
                  }
                  50% {
                      transform: translate(0, 20px) rotate(0deg);
                  }
                  75% {
                      transform: translate(-10px, 10px) rotate(-5deg);
                  }
                  100% {
                      transform: translate(0, 0) rotate(0deg);
                  }
              }
          `;
    document.head.appendChild(style);
  };

  createFloatingElements();

  // Tarot card hover effect
  const tarotCards = document.querySelector(".tarot-cards");
  if (tarotCards) {
    tarotCards.addEventListener("mousemove", function (e) {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

      this.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    tarotCards.addEventListener("mouseleave", function () {
      this.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Product hover effect
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const image = this.querySelector(".crystal-img");
      image.style.transform = "scale(1.1)";
      image.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", function () {
      const image = this.querySelector(".crystal-img");
      image.style.transform = "scale(1)";
    });
  });

  // Newsletter form validation
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector(".newsletter-input");
      const email = input.value.trim();

      if (email === "") {
        // Show error
        input.style.borderColor = "red";
        input.style.backgroundColor = "rgba(255, 0, 0, 0.1)";

        // Reset after 2 seconds
        setTimeout(() => {
          input.style.borderColor = "";
          input.style.backgroundColor = "";
        }, 2000);
      } else {
        // Show success
        input.value = "";
        input.placeholder = "Subscribed successfully!";

        // Reset after 3 seconds
        setTimeout(() => {
          input.placeholder = "Enter your email address";
        }, 3000);
      }
    });
  }

  // Add ripple effect style
  const style = document.createElement("style");
  style.textContent = `
      .ripple {
          position: absolute;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
      }
      
      @keyframes ripple {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
  `;
  document.head.appendChild(style);

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formValues = Object.fromEntries(formData.entries());

      // Simple validation
      let isValid = true;
      const inputs = this.querySelectorAll(
        "input[required], textarea[required]"
      );

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = "red";
          isValid = false;
        } else {
          input.style.borderColor = "";
        }
      });

      if (!isValid) {
        return;
      }

      // Show success message (in a real app, you would send data to server)
      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.value;

      submitBtn.value = "Enviado!";
      submitBtn.style.backgroundColor = "#4CAF50";

      // Reset form
      setTimeout(() => {
        this.reset();
        submitBtn.value = originalText;
        submitBtn.style.backgroundColor = "";

        // Add a success message
        const successMsg = document.createElement("div");
        successMsg.textContent = "Mensaje enviado correctamente!";
        successMsg.style.color = "#4CAF50";
        successMsg.style.textAlign = "center";
        successMsg.style.marginTop = "1rem";
        successMsg.style.fontWeight = "bold";

        this.appendChild(successMsg);

        // Remove success message after 3 seconds
        setTimeout(() => {
          successMsg.remove();
        }, 3000);
      }, 1500);
    });

    // Add input focus effects
    const formInputs = contactForm.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.style.boxShadow = "0 0 10px rgba(230, 179, 37, 0.3)";
      });

      input.addEventListener("blur", function () {
        this.style.boxShadow = "";
      });
    });
  }
});

function shareWhatsApp() {
  const url = encodeURIComponent("https://bellsmonrot.github.io/");
  const text = encodeURIComponent(
    "🔮 Descubre tu destino con BellsmonRot - Adivinación y Tarot.🎃💀"
  );
  window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
}

function shareFacebook() {
  const url = encodeURIComponent("https://bellsmonrot.github.io/");
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

document.addEventListener('copy', (event) => {
  event.preventDefault(); // Evita la acción de copiar
  const customText = 'Bellsmonrot Tarot 🎃🔮💀 ➡️ https://bellsmonrot.github.io/';
  if (event.clipboardData) {
    event.clipboardData.setData('text/plain', customText);
  } else if (window.clipboardData) {
    window.clipboardData.setData('Text', customText);
  }
  alert('No se permite copiar contenido de esta página.');
});

// Opcional: Desactivar el menú contextual (botón derecho)
emailjs.init('cv7FuUnPNFET-S02I');

function sendEmail(e) {
  e.preventDefault();
  
  emailjs.sendForm('service_5dje1mm', 'template_suq0w3c', e.target)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "#banner";
          e.target.reset();
        }
      });
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Por favor intenta nuevamente.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Cerrar'
      });
    });
}

document.addEventListener('DOMContentLoaded', () => { 
  const frontImage = document.querySelector('.tarot-front');
  const backImage = document.querySelector('.tarot-back');

  // Array con las 21 imágenes del tarot
  const images = [
      './img/tarot/fooltarot.jpg',
      './img/tarot/magiciantarot.jpg',
      './img/tarot/empresstarot.jpg',
      './img/tarot/emperortarot.jpg',
      './img/tarot/hierophanttarot.jpg',
      './img/tarot/loverstarot.jpg',
      './img/tarot/carrotarot.jpg',
      './img/tarot/fuerzatarot.jpg',
      './img/tarot/ermitanotarot.jpg'
  ];

  function changeImage() {
      // Seleccionar una imagen aleatoria del array
      const randomIndex = Math.floor(Math.random() * images.length);

      // Colocar la nueva imagen en la imagen de fondo
      backImage.src = images[randomIndex];

      // Hacer la transición de opacidad (crossfade)
      frontImage.style.opacity = 0;
      backImage.style.opacity = 1;

      // Después de la transición, intercambiar las imágenes
      setTimeout(() => {
          frontImage.src = backImage.src;
          frontImage.style.opacity = 1;
          backImage.style.opacity = 0;
      }, 1000);
  }

  // Asignar la imagen inicial como 'empresstarot.jpg' al cargar la página
  frontImage.src = './img/tarot/empresstarot.jpg';

  // Cambiar la imagen cada 5 segundos
  setInterval(changeImage, 5000);
});


const tarotContainer = document.querySelector('.tarot-container');
const tarotCard = document.querySelector('.tarot-cards');

tarotContainer.addEventListener('mousemove', (e) => {
    const rect = tarotContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // Posición del mouse dentro del contenedor
    const y = e.clientY - rect.top;

    // Cálculo de la rotación en base a la posición del mouse
    const rotateX = ((y / rect.height) - 0.5) * 20; // Inclina la carta en el eje X
    const rotateY = ((x / rect.width) - 0.5) * -20; // Inclina la carta en el eje Y

    tarotCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Aumentar el reflejo dinámico dependiendo de la posición del mouse
    const shadowX = (x / rect.width) * 30 - 15; // Aumentamos el rango del reflejo X
    const shadowY = (y / rect.height) * 30 - 15; // Aumentamos el rango del reflejo Y
    tarotCard.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4)`; // Mayor intensidad de sombra
});

// Restablece la rotación cuando el mouse sale del contenedor
tarotContainer.addEventListener('mouseleave', () => {
    tarotCard.style.transform = 'rotate(5deg)'; // Regresa al ángulo original
    tarotCard.style.boxShadow = 'none'; // Elimina el reflejo cuando el ratón sale
});

function firma() {
  console.log("%c Creado por Rodrigo Sendino Sanz", "background: #ff8906; border-radius:12%;color:#fffffe;padding: 2em;font-size: 2em;");
  console.log("%c No olvides seguirme en redes:", "color:#e53170;padding: 1.5em;font-size: 1.5em;"); 
  console.log("%c Instagram: https://www.instagram.com/rodrigosendinosanz/", "color:#405DE6;padding: 1em;font-size: 1em;background: #fff;");
  console.log("%c Twitter: https://twitter.com/rodrigosendino", "color:#1DA1F2;padding: 1em;font-size: 1em;background: #fff;");
  console.log("%c Linkedin: https://www.linkedin.com/in/rodrigo-sendino-sanz-27a3a0100/", "color:#0e76a8;padding: 1em;font-size: 1em;background: #fff;");
  console.log("%c Github: https://github.com/RodrigoSendinoSanz", "color:#211F1F;padding: 1em;font-size: 1em;background: #fff;");
  console.log("%c by Rodrigo Sendino Sanz", "color:gold;padding: 1em;font-size: 1.5em;");
  console.log("%c                     @@@@@@@                     ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c             @...@@           @@...@             ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c        @..@                       @..@         ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c     @..        @..@    /.@   @@..@      ..@      ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c   @.@     @.@         /.@         *.#    @.@    ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c  .@    ,.@            /.@            .@    (.   ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c  %..@ .@              /.@              .@   @.@ ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c       @...@           /.@               @@   @.@","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c           @....%      /.@                .@   @.","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c               &....@  /.&                 .    .","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c@.... (.............@ @...*    ..............  ...","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c@.    @&                /./....%                  ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c .@    .                /./   &....@              ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c @.     .               /./        @...@          ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c  @.&    .@             /./            @..@       ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c    .@     .@           /./            .@  @...   ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c     @.@     @.@        /./         ..     @.@    ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c       @./       @..@@  /./   @...@      ..@      ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c          @..@                       @..@         ","color:gold;padding: -1em;font-size: 1.5em;");
  console.log("%c              @...@#           @@...@             ","color:gold;padding: -1em;font-size: 1.5em;");


}