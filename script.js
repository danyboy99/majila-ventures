const openMenu = document.getElementById("menu-icon");
const menuBar = document.querySelector(".menu-bar");
const cancelMenu = document.getElementById("menu-cancel");
const about = document.getElementById("About");
const mainBody = document.querySelector(".main");
// const aboutContainer = document.querySelector(".About-us");
// const aboutCancel = document.getElementById("about-cancel");
const contact = document.getElementById("contact");
const contactContainer = document.querySelector(".contact-us");
const contactCancel = document.getElementById("contact-cancel");
const headerContainer = document.querySelector(".header");
const footerContainer = document.querySelector(".footer");

openMenu.addEventListener("click", () => {
  menuBar.style.display = "block";
});

cancelMenu.addEventListener("click", () => {
  menuBar.style.display = "none";
});

contact.addEventListener("click", () => {
  headerContainer.style.display = "none";
  mainBody.style.display = "none";
  menuBar.style.display = "none";
  footerContainer.style.display = "none";
  contactContainer.classList.add("contact-active");
});

contactCancel.addEventListener("click", () => {
  headerContainer.style.display = "flex";
  mainBody.style.display = "block";
  menuBar.style.display = "none";
  footerContainer.style.display = "block";
  contactContainer.classList.remove("contact-active");
});
