console.log("Portfolio script loaded."); 

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.opacity = "1";
    scrollToTopBtn.style.pointerEvents = "auto";
  } else {
    scrollToTopBtn.style.opacity = "0";
    scrollToTopBtn.style.pointerEvents = "none";
  }
}

scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});