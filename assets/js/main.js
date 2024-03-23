/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
 
/*=============== MENU SHOW ===============*/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN===============*/
// const navLink = document.querySelectorAll('.nav__link')
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== slider-gallery====================*/ 
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

     // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
/*=============== SWIPER PROJECTS ===============*/
/*=============== SWIPER TESTIMONIAL ===============*/
// let testimonialSwiper = new Swiper(".testimonial-swiper", {
//     spaceBetween: 30,
//     loop: 'true',

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// const container = document.querySelector('.testimonial-container');
// const testimonials = document.querySelectorAll('.testimonial');
// let currentSlide = 0;

// function slideToNextTestimonial() {
//   currentSlide++;
//   if (currentSlide >= testimonials.length) {
//     currentSlide = 0;
//   }
//   container.style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// setInterval(slideToNextTestimonial, 5000);



/*================================ Testimonial slider ========================================*/

// const MySwiper = new Swiper('.testimonial__container', {
//     // Optional parameters
//     spaceBetween: 16,
//     loop: true,
//     grabCursor: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints:{
//         640:{
//             slidesPerView:2,
//         },
//         1024:{
//             slidesPerView:3,
//         },
//     }
//   });



/*=============== EMAIL JS ===============*/
// window.onload = function() {
//     document.getElementById('contact__form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // these IDs from the previous steps
//         emailjs.sendForm('service_ryzeo8o', 'template_826gzaf', this)
//             .then(() => {
//                 alert('SUCCESS!');
//             }, (error) => {
//                 alert('FAILED...', error);
//             });
//     });
// }
const contactForm =document.getElementById('contact__form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red')
        contactMessage.textContent= "write all input fields"  
    } else {
        emailjs.sendForm('service_kzdu711', 'template_6niu7vr','#contact__form','FdpzxdCuqbgDWfdhk').then(()=>{
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent successfully✅'

            // remove messaage
            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)
        })        
    }
}
contactForm.addEventListener('submit',sendEmail)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-contrast-2-fill' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-contrast-2-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay: 400,
    reset: true 
})

sr.reveal(`.home__data , .projects__container, .testimonial__container`)
sr.reveal(`.home__info div`, {delay:600, origin: 'bottom', interval:100})
// sr.reveal(`.home__info div`, {delay:600, origin: 'bottom', interval:100})


