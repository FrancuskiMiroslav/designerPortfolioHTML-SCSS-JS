/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function() {
  console.log("main.js file loaded");
}));

$(window).on("scroll", (function() {
  if ($(window).scrollTop()) {
    $(".nav-top").addClass("nav-top--sticky");
  } else {
    $(".nav-top").removeClass("nav-top--sticky");
  }
}));

$(".menu-btn").on("click", (function() {
  $("nav ul").toggleClass("showing");
}));

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

$(document).on("click", ".nav ul li a", (function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
}));

$(".portfolio-item").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});

$(".portfolio-menu ul li").click((function() {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector
  });
  return false;
}));

// skill bar ABOUT PAGE
$(".skillbar").skillBars({
  // number start
  from: 0,

  // number end
  to: false,

  // animation speed
  speed: 3000,

  // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
  interval: 100,

  // the number of decimal places to show
  decimals: 0,

  // callback method for every time the element is updated,
  onUpdate: null,

  // callback method for when the element finishes updating
  onComplete: null,

  // CSS classes
  classes: {
    skillBarBar: ".skillbar-bar",
    skillBarPercent: ".skill-bar-percent"
  }
});

function goBack() {
  window.history.back();
}
