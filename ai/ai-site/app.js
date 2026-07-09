const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  mobileMenu.classList.add("open");
  menuOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.classList.remove("open");
  menuOverlay.classList.add("hidden");
  document.body.style.overflow = "";
}
menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
menuOverlay.addEventListener("click", closeMenu);

// Close mobile menu on link click
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ===== Carousel =====
const track = document.getElementById("carouselTrack");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;
const totalSlides = 2;

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
});
nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
});
dots.forEach((dot) => {
  dot.addEventListener("click", () => goToSlide(parseInt(dot.dataset.slide)));
});

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => {
  goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
}, 5000);

// Pause auto-slide on hover
document
  .getElementById("carouselContainer")
  .addEventListener("mouseenter", () => clearInterval(autoSlide));
document
  .getElementById("carouselContainer")
  .addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
      goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
    }, 5000);
  });

// ===== Accordion =====
document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const arrow = btn.querySelector(".accordion-arrow");
    const isOpen = content.classList.contains("open");

    // Close all
    document
      .querySelectorAll(".accordion-content")
      .forEach((c) => c.classList.remove("open"));
    document
      .querySelectorAll(".accordion-arrow")
      .forEach((a) => a.classList.remove("rotated"));
    document
      .querySelectorAll(".accordion-btn")
      .forEach((b) => b.setAttribute("aria-expanded", "false"));

    // Open clicked if it was closed
    if (!isOpen) {
      content.classList.add("open");
      arrow.classList.add("rotated");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ===== Scroll Reveal (Intersection Observer) =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ===== Back to Top =====
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.transform = "translateY(0)";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.transform = "translateY(16px)";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Subscribe Button =====
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeMsg = document.getElementById("subscribeMsg");
const emailInput = document.querySelector('input[type="email"]');

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email && email.includes("@") && email.includes(".")) {
    subscribeMsg.classList.remove("hidden");
    subscribeMsg.style.animation = "fadeInUp 0.4s ease-out forwards";
    emailInput.value = "";
    setTimeout(() => {
      subscribeMsg.classList.add("hidden");
    }, 3000);
  } else {
    emailInput.style.borderColor = "#ff4444";
    emailInput.style.boxShadow = "0 0 0 2px rgba(255,68,68,0.3)";
    setTimeout(() => {
      emailInput.style.borderColor = "";
      emailInput.style.boxShadow = "";
    }, 2000);
  }
});

// ===== Navbar background on scroll =====
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = "rgba(42,74,50,0.5)";
    nav.style.background = "rgba(10,26,15,0.95)";
  } else {
    nav.style.borderBottomColor = "rgba(42,74,50,0.3)";
    nav.style.background = "rgba(10,26,15,0.8)";
  }
});

// ===== Touch swipe for carousel =====
let touchStartX = 0;
let touchEndX = 0;
const carousel = document.getElementById("carouselContainer");

carousel.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true },
);

carousel.addEventListener(
  "touchend",
  (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
      } else {
        goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
      }
    }
  },
  { passive: true },
);
