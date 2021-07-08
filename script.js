
// true or false
const dev = false

// Animate with animate.css
// Initialization class
const animate = new Animate(); // available methods = in, out, setIn, setOut, lazyImage, LazyContent, getRandomAnimation
const undangan = new Undangan();

// Welcome Modal
const welcomeModal = document.getElementById('welcome__modal');
const welcomeBtn = document.getElementById('welcome__btn')

if (dev) {
  document.body.classList.remove('is__modal')
  welcomeModal.classList.add('is__dev')
} else {
  document.body.classList.add('is__modal')
}

const welcomeAnim = () => {
    animate.setOut('.welcome__inner', 'zoomOutDown')

  setTimeout(() => {
    animate.setOut('.welcome__overlay', 'fadeOut')
    document.body.classList.remove('is__modal')
    animate.setOut('.welcome', 'fadeOut')
    animate.setIn('#content', 'fadeIn')
    playMusic()
    openFullscreen()
    
  },300)
}
welcomeBtn.addEventListener('click', welcomeAnim)

function openFullscreen() {
  console.log('request');
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.webkitRequestFullscreen) { /* Safari */
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) { /* IE11 */
    document.body.msRequestFullscreen();
  }
}
// Animation

/*** animasi ='zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'jackInTheBox', 
 ***'lightSpeedInRight', 'rotateInDownRight', 'slideInRight', 'slideInUp', 'fadeInUp', 'bounceInUp', ***'rubberBand' 
**/


// select all section with .section class to be animated
const panelSecond = document.querySelector('.panel__second')
const sections = panelSecond.querySelectorAll('.section')


// Aimation options
const options = {
  rootMargin: '0px',
  threshold: 0.3,
  animation: '', // set animation name or leave blank for random animation
  className: 'animate' // animate class with opacity 0
}
// looping section el
sections.forEach(el => {
  if(dev) return
  if(el.id == 'gallery') return // escape gallery container
  animate.lazyContent(el, options)
})


// Lazy Image Photo gallery

const galleryAnimate = new Animate()

const galleryContainer = document.getElementById('gallery')
const galleries = galleryContainer.querySelectorAll('img')

galleries.forEach(img => {
  galleryAnimate.lazyImage(img)
})


// Save Ucapan
const ucapanBtn = document.querySelector('.ucapan__btn');
ucapanBtn.addEventListener('click', undangan.saveUcapan)


// TabMenu
let tabMenus = document.querySelectorAll('.tab');
tabMenus.forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault()
    isActiveMenu = this
    document.querySelector(this.dataset.target).scrollIntoView({
     behavior: 'smooth'
   });
  })
})

// Music
// let musicPath = './src/sample-data/music/file_example_MP3_700KB.mp3'

const playBtn = document.querySelector('.play__btn');
let audioSrc = document.getElementById('audio__source');
const iconPlay = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
</svg>`
const iconPause = `<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>`
playBtn.innerHTML = iconPlay

playBtn.addEventListener('click', playMusic)
function playMusic() {
  if(isPlaying()) {
    audioSrc.pause()
    playBtn.innerHTML = iconPlay
    playBtn.classList.remove("rotating-border", "rotating-border--black-yellow")
  } else {
    audioSrc.play()
    playBtn.innerHTML = iconPause
    playBtn.classList.add("rotating-border", "rotating-border--black-yellow")
  }
}
function isPlaying() {
  return !audioSrc.paused
}




