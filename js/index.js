const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  },
  button: {
    headingOne: "Changed the heading with the click of a button",
    headingTwo: "Changed the heading again!"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
//navbar
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.style.color = "green";
});

const prependNavLink = document.createElement("a");
prependNavLink.textContent = "Prepend Link";
const prependParent = document.querySelector("nav");
prependParent.prepend(prependNavLink);

const appendNavLink = document.createElement("a");
appendNavLink.textContent = "Append Link";
const appendParent = document.querySelector("nav");
appendParent.appendChild(appendNavLink);

navLinks[0].textContent = "Services";
navLinks[1].textContent = "Product";
navLinks[2].textContent = "Vision";
navLinks[3].textContent = "Features";
navLinks[4].textContent = "About";
navLinks[5].textContent = "Contact";
//!navbar
//banner

const bannerHeader = document.querySelector(".cta-text h1");
bannerHeader.textContent = siteContent.cta.h1;

const bannerBtn = document.querySelector(".cta-text button");
bannerBtn.textContent = siteContent.cta.button;

bannerBtn.addEventListener("mousedown", e => {
  bannerHeader.textContent = siteContent.button.headingOne;
});
bannerBtn.addEventListener("mouseup", e => {
  bannerHeader.textContent = siteContent.button.headingTwo;
});

const bannerImg = document.getElementById("cta-img");
bannerImg.src = siteContent.cta["img-src"];
//!banner

//main content
//features and about
const featuresContentH = document.querySelector(
  ".top-content .text-content h4"
);
featuresContentH.textContent = siteContent["main-content"]["features-h4"];
const featuresContentP = document.querySelector(".top-content .text-content p");
featuresContentP.textContent = siteContent["main-content"]["features-content"];

const aboutContentH = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
aboutContentH.textContent = siteContent["main-content"]["about-h4"];
const aboutContentP = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);

aboutContentP.textContent = siteContent["main-content"]["about-content"];
//!features and about

//image
const mainImage = document.getElementById("middle-img");
mainImage.src = siteContent["main-content"]["middle-img-src"];
//!image

//services,product,vision

const servicesContentH = document.querySelector(
  ".bottom-content .text-content h4"
);
servicesContentH.textContent = siteContent["main-content"]["services-h4"];

const servicesContentP = document.querySelector(
  ".bottom-content .text-content p"
);
servicesContentP.textContent = siteContent["main-content"]["services-content"];

const productContentH = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productContentH.textContent = siteContent["main-content"]["product-h4"];

const productContentP = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productContentP.textContent = siteContent["main-content"]["product-content"];

const visionContentH = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionContentH.textContent = siteContent["main-content"]["vision-h4"];

const visionContentP = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionContentP.textContent = siteContent["main-content"]["vision-content"];

//!services,product,vision

//!main content

//contact

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const contactAddress = document.querySelector(".contact p");
contactAddress.textContent = siteContent.contact.address;

const contactPhone = document.querySelector(".contact p:nth-child(3)");
contactPhone.textContent = siteContent.contact.phone;

const contactEmail = document.querySelector(".contact p:nth-child(4)");
contactEmail.textContent = siteContent.contact.email;

//!contact

//footer

const footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent.footer.copyright;
//!footer
