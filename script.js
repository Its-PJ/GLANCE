/* ------------------STICKY HEADER------------------ */

window.onscroll = function() {sticky_header()};

 // Call the function on initial page load and whenever the user scrolls
 window.addEventListener("scroll", handleScroll);

// Get the header
var header = document.getElementById("glance_header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function handleScroll() {
    var header = document.getElementById("glance_header");
    var logoContainer = header.querySelector(".logo-container");
  
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logoContainer.style.display = "none";
    } else {
        header.classList.remove("sticky");
        logoContainer.style.display = "flex"; 
    }
  }



 /* ------------------RESPONSIVENESS------------------ */
// Function to close the hamburger menu when the window is resized
function closeHamburgerMenu() {
  const menuBtn = document.getElementById('menu-btn');
  if (window.innerWidth >= 768) { // Replace 768 with your desired mobile breakpoint
    menuBtn.checked = false;
  }
}

// Attach the window resize event listener
window.addEventListener('resize', closeHamburgerMenu);

  