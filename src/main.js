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
  // add collision detection
  let playerelem = document.getElementById('player');
  switch(e.key){
    case 'ArrowLeft':
    case 'a':
        //console.log(getMidpoint(playerelem).x, getMidpoint(playerelem).y);
        //console.log(playerelem.offsetTop, playerelem.offsetWidth, playerelem.offsetLeft, playerelem.offsetHeight);
        if (checkCollision(playerelem, playerelem.offsetLeft - moveBy, playerelem.offestTop)){
          player.style.left = parseInt(player.style.left) - moveBy + 'px';
        }
        break;

    case 'ArrowRight':
    case 'd':
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        if (checkCollision(playerelem, playerelem.offsetLeft + moveBy, playerelem.offestTop)){
          player.style.left = parseInt(player.style.left) + moveBy + 'px';
        }
        break;

    case 'ArrowUp':
    case 'w':
        player.style.top = parseInt(player.style.top) - moveBy + 'px';
        break;

    case 'ArrowDown':
    case 's':

        //if (checkCollision(playerelem, playerelem.offsetLeft, playerelem.offestTop + moveBy)){
          console.log(window.innerHeight);
          player.style.top = parseInt(player.style.top) + moveBy + 'px';
        //}

        break;
  }
});

// check if coordinates cause collision - takes in coordinates of midpoint
function checkCollision(element, xcoord, ycoord) {
  // check corners
  console.log(element.getBoundingClientRect());
  if (xcoord < 0 || ycoord < 0) {
    return false;
  }

  else if (xcoord >= window.innerWidth) {
    return false;
  }

  else if (ycoord >= window.innerHeight){
    return false;
  }

  return true;
}

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

    // check that the player is close enough to the element
    if (Math.abs(getMidpoint(element).x - getMidpoint(player).x) < 10 && Math.abs(getMidpoint(element).y - getMidpoint(player).y) < 10) {
      console.log("good");
      element.style.backgroundColor = 'gray';
    }
}
