$(document).ready(function() {
  console.log("main.js file loaded");
});

$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $(".nav-top").addClass("nav-top--sticky");
  } else {
    $(".nav-top").removeClass("nav-top--sticky");
  }
});

$(".menu-btn").on("click", function() {
  $("nav ul").toggleClass("showing");
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

$(document).on("click", ".nav ul li a", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$(".portfolio-item").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});

$(".portfolio-menu ul li").click(function() {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector
  });
  return false;
});

function goBack() {
  window.history.back();
}
