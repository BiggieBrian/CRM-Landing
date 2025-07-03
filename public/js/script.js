const linkList = [
  {
    href: "/",
    text: "Overview",
  },
  {
    href: "./lawfirm.html",
    text: "Law Firm",
  },
  {
    href: "./client.html",
    text: "Client",
  },
  {
    href: "./pricing.html",
    text: "Pricing",
  },
];
//
function addMainNavItems() {
  const navigationContainer = document.querySelector(".nav-links");
  linkList.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    let textContent = document.createTextNode(link.text);
    a.href = link.href;
    a.appendChild(textContent);
    li.appendChild(a);
    li.style.cursor = "pointer";
    navigationContainer.appendChild(li);
  });
}
addMainNavItems();
//
//
function hamburgerFunction() {
  const mobileNavContainer = document.querySelector(".mobile-nav");
  linkList.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    let textContent = document.createTextNode(link.text);
    a.appendChild(textContent);
    li.appendChild(a);
    li.style.cursor = "pointer";
    mobileNavContainer.appendChild(li);
  });
  const li = document.createElement("li");
  const a = document.createElement("a");
  let textContent = document.createTextNode("Log In");
  a.href = "./login";
  a.appendChild(textContent);
  li.appendChild(a);
  li.style.cursor = "pointer";
  mobileNavContainer.appendChild(li);
  const toggleButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#nav-menu");
  toggleButton.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
}
hamburgerFunction();
