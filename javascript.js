
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab"); 
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxcz5eLH5GsAWIf9wDJpiloFoeRE6Cx2CmxUmhw92DyIU1S72FWPY584UfmZqSB6Ko/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// scroll reveal

ScrollReveal({
 
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#header", { delay: 200 });

ScrollReveal({
 
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#about", { delay: 200 });

ScrollReveal({
  
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#services", { delay: 200 });

ScrollReveal({
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#services", { delay: 200 });

ScrollReveal({
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#portfolio", { delay: 200 });

ScrollReveal({
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal(".work", { delay: 200 });

ScrollReveal({
  
  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal("#contact", { delay: 200 });

ScrollReveal({

  duration: 2000,
  delay: 80,
});

ScrollReveal().reveal(".footer", { delay: 200 });

// typed java

const typed = new Typed(".multiple-text", {
  strings: [
    "Trader",
    "Freelancer",
    "Blogger"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


// toggle icon
let sideMenu = document.querySelector("#sidemenu");
let navbar = document.querySelector("nav ul #sidemenu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


// ------------------------------------------------------------------------

