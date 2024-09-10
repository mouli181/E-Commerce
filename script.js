document.addEventListener("DOMContentLoaded", () => {
  const filterLinks = document.querySelectorAll(".navbar a");
  const productCards = document.querySelectorAll(".item-card");

  filterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const filter = link.getAttribute("data-filter");

      productCards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "flex";
        } else if (card.classList.contains(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
const ellipsis = document.querySelector(".ellipsis");
const dropdownContent = document.querySelector(".dropdown-content");

ellipsis.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Close the dropdown if clicking outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".ellipsis")) {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    }
  }
});
