
// true or false
let dev = false

// Initialization class
// Animate with animate.css
let animate = new Animate(); // available methods = in, out, setIn, setOut, lazy, getRandomAnimation
let undangan = new Undangan();

welcomeModal = document.getElementById('welcome__modal');

if (dev) {
  document.body.classList.remove('is__modal')
  welcomeModal.style.display = 'none'
} else {
  document.body.classList.add('is__modal')
}

let welcomeAnim = () => {
    animate.setOut('.welcome__inner', 'zoomOutDown')

  setTimeout(() => {
    animate.setOut('.welcome__overlay', 'fadeOut')
    document.body.classList.remove('is__modal')
    animate.setOut('.welcome', 'fadeOut')
    animate.setIn('#content', 'fadeIn')
    
  },300)
}
document.getElementById('welcome__btn').addEventListener('click', welcomeAnim)



/*** animasi ='zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'jackInTheBox', 
 ***'lightSpeedInRight', 'rotateInDownRight', 'slideInRight', 'slideInUp', 'fadeInUp', 'bounceInUp', ***'rubberBand' 
**/


// select all section with .section class to be animated
var panelSecond = document.querySelector('.panel__second')

let sections = panelSecond.querySelectorAll('.section')

// Aimation options
let options = {
  rootMargin: '0px',
  threshold: 0.3,
  animation: '', // set animation name or leave blank for random animation
  className: 'animate' // animate class with opacity 0
}

sections.forEach(el => {
  if(dev) return
  if(el.id == 'gallery') return // escape gallery container
  animate.lazy(el, options)
})

// Lazy Image Photo gallery

let galleryAnimate = new Animate()

let galleryContainer = document.getElementById('gallery')
let galleries = galleryContainer.querySelectorAll('img')

galleries.forEach(img => {
  galleryAnimate.lazyImage(img)
})


