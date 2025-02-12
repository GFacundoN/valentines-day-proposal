let isDragging = false;
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('DOMContentLoaded', () => {
  const images = document.images;
  let loadedImages = 0;
  
  const checkImagesLoaded = () => {
    loadedImages++;
    if (loadedImages === images.length) {
      document.body.classList.add('loaded');
    }
  };
  
  for (let img of images) {
    if (img.complete) {
      checkImagesLoaded();
    } else {
      img.addEventListener('load', checkImagesLoaded);
      img.addEventListener('error', checkImagesLoaded);
    }
  }
});
document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  currentX = startX;
  currentY = startY;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    let deltaX = (e.clientX - currentX) / window.innerWidth * 2;
    let deltaY = (e.clientY - currentY) / window.innerHeight * 2;
    
    let newX = parseFloat(getComputedStyle(document.body).getPropertyValue('--x') || 0) + deltaX;
    let newY = parseFloat(getComputedStyle(document.body).getPropertyValue('--y') || 0) + deltaY;
    
    document.body.style.setProperty('--x', newX);
    document.body.style.setProperty('--y', newY);
    
    currentX = e.clientX;
    currentY = e.clientY;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  currentX = startX;
  currentY = startY;
});

document.addEventListener('touchmove', (e) => {
  if (isDragging) {
    let deltaX = (e.touches[0].clientX - currentX) / window.innerWidth * 2;
    let deltaY = (e.touches[0].clientY - currentY) / window.innerHeight * 2;
    
    let newX = parseFloat(getComputedStyle(document.body).getPropertyValue('--x') || 0) + deltaX;
    let newY = parseFloat(getComputedStyle(document.body).getPropertyValue('--y') || 0) + deltaY;
    
    document.body.style.setProperty('--x', newX);
    document.body.style.setProperty('--y', newY);
    
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
  }
});

document.addEventListener('touchend', () => {
  isDragging = false;
});