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

  $(document).ready(function(){

    $('.category').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.grid-item').show(500);
        }
        else{
            $('.grid-item').not('.'+filter).hide(400);
            $('.grid-item').filter('.'+filter).show(500);
        }
    });
});

const projectOverlayItems = document.querySelectorAll(".grid-item");

projectOverlayItems.forEach((item) => {
  const projectOverlay = item.querySelector(".project-overlay");

  item.addEventListener("click", () => {
    projectOverlay.classList.add("active");

    // Prevent click events from reaching the projectOverlay content
    projectOverlay.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  projectOverlay.addEventListener("click", () => {
    projectOverlay.classList.remove("active");
  });
});
