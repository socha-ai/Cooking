//main file for actual game

// player properties
let player = document.querySelector('.player');
let moveBy = 10;

// setting initial position
window.addEventListener('load', () => {
  player.style.position = 'absolute';
  player.style.left = 0;
  player.style.top = 0;
});

window.addEventListener('keydown', (e) => {
  switch(e.key){
    case 'ArrowLeft':
    case 'a':
        player.style.left = parseInt(player.style.left) - moveBy + 'px';
        break;

    case 'ArrowRight':
    case 'd':
        player.style.left = parseInt(player.style.left) + moveBy + 'px';
        break;

    case 'ArrowUp':
    case 'w':
        player.style.top = parseInt(player.style.top) - moveBy + 'px';
        break;

    case 'ArrowDown':
    case 's':
        player.style.top = parseInt(player.style.top) + moveBy + 'px';
        break;
  }
});
