const imageIndexes = {
    voof: 0,
    bridge: 0,
    avatar: 0,
    landscape: 0,

    rewire: 0,
    antagonico: 0,
    conflict: 0,
    errar: 0,
    info: 0,
    rupture: 0,
    squares: 0,

    montanha: 0,
    over: 0,
    yeti: 0,
    mage: 0,
    during: 0,
    sketch: 0,
    gummies: 0,

    signs: 0,
    ice: 0,
    house: 0,
    girl: 0,
  };
  
  const imageSets = {
    voof: ['./images/ux-ui/voof/voof-1.png', './images/ux-ui/voof/voof-2.png','./images/ux-ui/voof/voof-3.png','./images/ux-ui/voof/voof-4.png','./images/ux-ui/voof/voof-5.png','./images/ux-ui/voof/voof-6.png','./images/ux-ui/voof/voof-7.png','./images/ux-ui/voof/voof-8.png','./images/ux-ui/voof/voof-9.png','./images/ux-ui/voof/voof-10.png'],
    bridge: ['./images/ux-ui/bridge/bridge-1.png', './images/ux-ui/bridge/bridge-2.png','./images/ux-ui/bridge/bridge-3.png','./images/ux-ui/bridge/bridge-4.png'],
    avatar: ['./images/ux-ui/avatar/avatar-1.png', './images/ux-ui/avatar/avatar-2.png'],
    landscape: ['./images/ux-ui/landscape/landscape-1.png', './images/ux-ui/landscape/landscape-2.png'],

    rewire: ['./images/graphic-design/rewire/rewire-1.jpg', './images/graphic-design/rewire/rewire-2.gif'],
    antagonico: ['./images/graphic-design/antagonico/antagonico-1.gif', './images/graphic-design/antagonico/antagonico-2.jpg', './images/graphic-design/antagonico/antagonico-3.png','./images/graphic-design/antagonico/antagonico-4.png','./images/graphic-design/antagonico/antagonico-5.png','./images/graphic-design/antagonico/antagonico-6.png'],
    conflict: ['./images/graphic-design/conflict/conflict-1.png', './images/graphic-design/conflict/conflict-2.png'],
    errar: ['./images/graphic-design/errar/errar-1.jpg', './images/graphic-design/errar/errar-2.jpg'],
    info: ['./images/graphic-design/info.png'],
    rupture: ['./images/graphic-design/rupture/rupture-1.jpg', './images/graphic-design/rupture/rupture-2.jpg', './images/graphic-design/rupture/rupture-3.jpg'],
    squares: ['./images/graphic-design/squares.jpg'],

    montanha: ['./images/illustration/montanha/montanha-1.png', './images/illustration/montanha/montanha-2.png', './images/illustration/montanha/montanha-3.png'],
    over: ['./images/illustration/over.png'],
    yeti: ['./images/illustration/yeti.png'],
    mage: ['./images/illustration/mage.png'],
    during: ['./images/illustration/during.png'],
    sketch: ['./images/illustration/sketch.png'],
    gummies: ['./images/illustration/gummies.png'],

    signs: ['./images/photography/signs/signs-1.png', './images/photography/signs/signs-2.png', './images/photography/signs/signs-3.png'],
    ice: ['./images/photography/ice/ice-1.png', './images/photography/ice/ice-2.png'],
    house: ['./images/photography/house.png'],
    girl: ['./images/photography/girl.png'],
  };
  
  let scroll = 0;
  
  var body = document.body,
      html = document.documentElement;
  
  var MaxHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
  
  function nextImage(imageId) {
    const imgElement = document.getElementById(imageId);
    imgElement.classList.add('fade-out');
    setTimeout(() => {
      imageIndexes[imageId] = (imageIndexes[imageId] + 1) % imageSets[imageId].length;
      imgElement.src = imageSets[imageId][imageIndexes[imageId]];
      imgElement.classList.remove('fade-out');
    }, 0); 
  }
  
  function previousImage(imageId) {
    const imgElement = document.getElementById(imageId);
    imgElement.classList.add('fade-out');
    setTimeout(() => {
      imageIndexes[imageId] = (imageIndexes[imageId] - 1 + imageSets[imageId].length) % imageSets[imageId].length;
      imgElement.src = imageSets[imageId][imageIndexes[imageId]];
      imgElement.classList.remove('fade-out');
    }, 0); 
  }
  
  


  
let lastScroll = "scroll-ux-ui";
let last = "ux-ui";
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          console.log(`You are viewing: ${entry.target.id}`);
          switch(entry.target.id){
            case 'ux-ui':
              document.getElementById(lastScroll).classList.remove('selected');
              document.getElementById('dot').classList.remove(last);
              document.getElementById('scroll-ux-ui').classList.add('selected');
              document.getElementById('dot').classList.add('ux-ui');
              lastScroll = "scroll-ux-ui";
              last = "ux-ui";
              document.getElementById('dot').style.display='flex';
              break;
            case 'graphic-design':
              document.getElementById(lastScroll).classList.remove('selected');
              document.getElementById('dot').classList.remove(last);
              document.getElementById('scroll-graphic-design').classList.add('selected');
              document.getElementById('dot').classList.add('graphic-design');
              lastScroll = "scroll-graphic-design";
              last = "graphic-design";
              document.getElementById('dot').style.display='flex';
              break;
            case 'illustration':
              document.getElementById(lastScroll).classList.remove('selected');
              document.getElementById('dot').classList.remove(last);
              document.getElementById('scroll-illustration').classList.add('selected');
              document.getElementById('dot').classList.add('illustration');
              lastScroll = "scroll-illustration";
              last = "illustration";
              document.getElementById('dot').style.display='flex';
              break;
            case 'photography':
              document.getElementById(lastScroll).classList.remove('selected');
              document.getElementById('dot').classList.remove(last);
              document.getElementById('scroll-photography').classList.add('selected');
              document.getElementById('dot').classList.add('photography');
              lastScroll = "scroll-photography";
              last = "photography";
              document.getElementById('dot').style.display='flex';
              break;
            default:
              document.getElementById(lastScroll).classList.remove('selected');
              document.getElementById('dot').classList.remove(last);
              document.getElementById('dot').style.display='none';
              break;
          }
      }
  });
}

let options = {
  root: null, 
  rootMargin: '0px',
  threshold: 0.05 
};

let observer = new IntersectionObserver(handleIntersection, options);

let divIds = ['ux-ui', 'graphic-design', 'illustration', 'photography','top','bottom','menu'];

divIds.forEach(id => {
  let div = document.getElementById(id);
  if (div) {
      observer.observe(div);
  }
});


let smile = document.getElementById('smile');

smile.addEventListener('mouseenter', function() {
  document.getElementById('all-socials').style.display = 'flex';
}); 

let socialsWrapper = document.getElementById('all-socials-wrapper');

socialsWrapper.addEventListener('mouseleave', function() {
  document.getElementById('all-socials').style.display = 'none';
});


let imageContainers = document.getElementsByClassName('image-container');


document.addEventListener('DOMContentLoaded', () => {
  const div1 = document.getElementById('my-name');
  const div2 = document.getElementById('smile');

  div1.addEventListener('mouseenter', () => {
      div2.classList.add('hovered');
  });

  div1.addEventListener('mouseleave', () => {
      div2.classList.remove('hovered');
  });
});







window.addEventListener('scroll', function() {
    // Get the current scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Define the parallax speeds
    let hatchingSpeed = 0.3; // Slower speed for hatching
    let megalinesSpeed = 0.5; // Faster speed for megalines

    // Get the elements
    let hatchingElement = document.getElementById('hatching');
    let megalinesElement = document.getElementById('megalines');

    // Apply the parallax effect by transforming the elements if they exist
    if (hatchingElement) {
        hatchingElement.style.transform = `translateY(${scrollPosition * hatchingSpeed}px)`;
    }
    if (megalinesElement) {
        megalinesElement.style.transform = `translateY(${scrollPosition * megalinesSpeed}px)`;
    }
});






document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector("#megalines img");

  // Function to update image source based on screen width
  function updateImageSource() {
      if (window.matchMedia("(max-width: 768px)").matches) {
          image.src = "icons/megalines-small.svg"; // New image source for smaller screens
      } else {
          image.src = "icons/megalines.svg"; // Original image source for larger screens
      }
  }

  // Initial check
  updateImageSource();

  // Add event listener to update on window resize
  window.addEventListener("resize", updateImageSource);
});





function advanceImages() {
  //Advance every image
  //To be called by timer (set with setInterval)
  nextImage("voof")
  nextImage("bridge");
  nextImage("avatar");
  nextImage("landscape");
  nextImage("rewire");
  nextImage("antagonico");
  nextImage("conflict");
  nextImage("errar");
  nextImage("info");
  nextImage("rupture");
  nextImage("squares");
  nextImage("montanha");
  nextImage("over");
  nextImage("yeti");
  nextImage("mage");
  nextImage("during");
  nextImage("sketch");
  nextImage("gummies");
  nextImage("signs");
  nextImage("ice");
  nextImage("house");
  nextImage("girl");
}



// Variable to store the interval ID
let intervalID = null;

function checkScreenSizeAndRun() {
    // Check if the screen width is 768px or less
    if (window.matchMedia("(max-width: 768px)").matches) {
        if (!intervalID) {
            console.log("Screen width <= 768px, starting interval");
            // Run the advanceImages function every 3.5 seconds
            intervalID = setInterval(advanceImages, 3500); //Call auxiliar function to advance every image
        }
    } else {
        if (intervalID) {
            console.log("Screen width > 768px, clearing interval");
            // Clear the interval if the screen size is greater than 768px
            clearInterval(intervalID);
            intervalID = null;
        }
    }
}

// Initial check on page load
checkScreenSizeAndRun();

// Listen for changes in screen size
window.addEventListener('resize', checkScreenSizeAndRun);