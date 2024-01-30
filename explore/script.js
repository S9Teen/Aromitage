let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchbtn = document.querySelector(".bx-world");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchbtn.onclick = function () {
  sidebar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navilink = document.querySelectorAll(".sidebar ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navilink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".sidebar ul li a[href*=" + id + "]")
          .classList.add(active);
      });
    }
  });
};
