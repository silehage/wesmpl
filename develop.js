

/** 
 * Mode dev or production
 * Boolean: true / false
 */

const develop = false

if (develop) {
  document.body.classList.remove('is__modal')
  document.body.classList.add('is__dev')
} 

/**
 * Available animate:
 * 'backInDown','backInLeft', 'backInRight', 'backInUp','zoomIn', 
 * 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'jackInTheBox', 
 * 'rotateInDownRight', 'slideInRight', 'slideInUp', 'fadeInUp', 'bounceInUp',
 * 'rubberBand', 'fadeInBottomLeft', 'fadeInBottomright', 'fadeInTopLeft',
 * 'fadeInTopRight','fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRIght',
 */
