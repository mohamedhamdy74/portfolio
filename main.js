let toggleBar = document.querySelector(".second-div .menu-icon");
toggleBar.addEventListener("click", () => { 
    const menu = document.querySelector(".second-div ul");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    }
    else { 
        menu.style.display = "none";
    }
   
})
// filteration
const filters = document.querySelectorAll(".projects-nav ul li");
const cards = document.querySelectorAll(".card-container");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    const type = filter.textContent.toLowerCase();

    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    cards.forEach(card => {
      if (type === "all" || card.dataset.type.includes(type)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});



// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(sec => {
  observer.observe(sec);
});

//  form validation
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const email = form.querySelector('input[type="email"]').value;
  const name = form.querySelector('input[type="text"]').value;

  if (!email || !name) {
    e.preventDefault();
    alert("Please fill in all required fields.");
  }
});

