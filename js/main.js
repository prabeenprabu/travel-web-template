let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

//adding style for boxes
let box = document.querySelectorAll(".box");
for (i = 0; i < box.length; i++) {
    box[i].setAttribute("data-aos", "fade-up");
}
//adding aos for service box elements
let serIcon = document.querySelectorAll(".service .box-container .box .fas");
for (i = 0; i < serIcon.length; i++) {
    serIcon[i].setAttribute("data-aos", "zoom-in");
}
//aos for h1 tag
let H1 = document.querySelectorAll("h1");
for (i = 0; i < H1.length; i++) {
    H1[i].setAttribute("data-aos", "fade-up");
}
//aos for span tags
let span = document.querySelectorAll("span");
for (i = 0; i < span.length; i++) {
    span[i].setAttribute("data-aos", "fade-up");
}
//aos for h3 tags
let H3 = document.querySelectorAll("h3");
for (i = 0; i < H3.length; i++) {
    H3[i].setAttribute("data-aos", "fade-up");
}
//aos for paragraph
let p = document.getElementsByTagName("p");
for (i = 0; i < p.length; i++) {
    p[i].setAttribute("data-aos", "fade-up");
}
//aos for anchor
let a = document.getElementsByTagName("a");
for (i = 0; i < a.length; i++) {
    a[i].setAttribute("data-aos", "fade-up");
}
//cancel aos for footer
let fp = document.querySelector(".footer p");
fp.removeAttribute("data-aos");
