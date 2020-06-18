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

// player movement
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

// get the midpoint of any element
function getMidpoint(element){
    var coords = new Object();
    let centerX = element.offsetLeft + element.offsetWidth / 2;
    let centerY = element.offsetTop + element.offsetHeight / 2;

    coords['x'] = centerX;
    coords['y'] = centerY;
    console.log("centerX: " + centerX, "centerY: " + centerY);
    return coords;
}

function preformAction(elementName){
    // check if player and button pressed are close to each other
    var player;
    var element;

    player = document.getElementById('player');
    element = document.getElementById(elementName);

    if (Math.abs(getMidpoint(element).x - getMidpoint(player).x) < 10 && Math.abs(getMidpoint(element).y - getMidpoint(player).y) < 10) {
      console.log("good");
      element.style.backgroundColor = 'gray';
    }
}
