window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


function animateHeroMessages() {
    var heroMessages = document.querySelectorAll('.hero-message h1');
    var subMessage = document.querySelector('#subMessage');
  
    heroMessages[0].classList.add('fade-in');
  
    setTimeout(function() {
      heroMessages[0].classList.remove('fade-in');
      heroMessages[0].classList.add('fade-out');
    }, 1500); 
    setTimeout(function() {
      heroMessages[1].classList.add('fade-in');
    }, 3500); 
    setTimeout(function() {
      heroMessages[1].classList.remove('fade-in');
      heroMessages[1].classList.add('fade-out');
    }, 5500); 
  
    setTimeout(function() {
      heroMessages[2].classList.add('fade-in');
      subMessage.classList.add('drop-in');
    }, 7000); 
  }
  
  window.onload = animateHeroMessages;


  /////////////////PROJECTS

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");

        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach((item) => {
            item.style.display = "none";
        });

        if (filterValue === "all") {
            gridItems.forEach((item) => {
              // add animation
                item.style.display = "block";
            });
        } else {
            const filteredItems = document.querySelectorAll(`.grid-item.${filterValue}`);
            filteredItems.forEach((item) => {
              //add animation 
                item.style.display = "block";
            });
        }
    });
});
