'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.getElementsByClassName('spider')[0];
  const wall = document.getElementsByClassName('wall')[0];
  const wallCoords = wall.getBoundingClientRect();

  const coords = {
    left:
      e.clientX - wallCoords.left - wall.clientLeft - spider.offsetWidth / 2,
    top: e.clientY - wallCoords.top - wall.clientTop - spider.offsetHeight / 2,
  };

  if (coords.left < 0) {
    coords.left = 0;
  }

  if (coords.top < 0) {
    coords.top = 0;
  }

  if (coords.top + spider.offsetHeight > wall.offsetHeight) {
    coords.top = wall.offsetHeight - spider.offsetHeight - wall.clientTop * 2;
  }

  if (coords.left + spider.offsetWidth > wall.offsetWidth) {
    coords.left = wall.offsetWidth - spider.offsetWidth - wall.clientLeft * 2;
  }

  spider.style.top = coords.top + 'px';
  spider.style.left = coords.left + 'px';
});
