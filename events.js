// Get all the modals
var modals = document.querySelectorAll(".modal");

// Get all the "Find out more" links
var links = document.querySelectorAll(".findout-link");

// Loop through each link and add event listener to open the modal
links.forEach(function (link) {
  link.onclick = function (e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    target.style.display = "block";
  };
});

// Close the modal when the close button is clicked
var closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(function (button) {
  button.onclick = function () {
    var modal = button.closest(".modal");
    modal.style.display = "none";
  };
});

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
