let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.screenY > 100);
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 1900,
    delay: 80,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
    ".home-img, .skills-container,.projects-box,.contact form",
    { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
const typed = new Typed(".multiple-text", {
    strings: [
      'Mern stack Developer','Node.js Developer','React.js Developer', '', 
    ],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 900,
    loop: true,
});


document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementsByName("fullName")[0].value;
    const emailAddress = document.getElementsByName("emailAddress")[0].value;
    const mobileNumber = document.getElementsByName("mobileNumber")[0].value;
    const subject = document.getElementsByName("subject")[0].value;
    const message = document.getElementsByName("message")[0].value;
    const mailtoParams = `mailto:pariharshalini630@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\n\n\nName: " + fullName + "\nEmail: " + emailAddress + "\nPhone: " + mobileNumber)}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = mailtoParams;
    } else {
        const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('singhsatyam8495@gmail.com')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\n\n\nName: " + fullName + "\nEmail: " + emailAddress + "\nPhone: " + mobileNumber)}`;
        window.open(composeUrl, "_blank");
    }
    this.reset();
});