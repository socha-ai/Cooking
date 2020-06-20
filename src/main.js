//main file for actual game

// global player Object
var user =
{
  xcoord : 0,
  ycoord : 0,
  holding : 0,
  dishArr : []
}
// player properties
let player = document.querySelector('.player');
let moveBy = 30;

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

function isClose(element1, element2) {
  if (Math.abs(getMidpoint(element1).x - getMidpoint(element2).x) < 50 && Math.abs(getMidpoint(element1).y - getMidpoint(element2).y) < 50) {
    return true;
  }
  return false;
}

function preformAction(elementName){
    // check if player and button pressed are close to each other
    var player;
    var element;

    var tempelement;
    var temp2;
    // put this in another function
    player = document.getElementById('player');
    element = document.getElementById(elementName);

    // exit function is the player is not close enough to preform the action
    if (!(isClose(player, element))) {
        return false;
    }

    // switch depending on element name
    if(elementName == "bread" || elementName == "espresso" || elementName == "cookies") {
      tempelement = document.getElementById('hidden' + elementName);
      tempelement.style.visibility = 'visible';
    }

    else if(elementName == "hiddenbread" || elementName == "hiddenespresso" || elementName == "hiddencookies") {
      tempelement = document.getElementById(elementName);
      tempelement.style.visibility = 'hidden';

      // display purposes
      player.innerHTML = elementName[6] + '0';
      user.holding = elementName[6] + '0'
    }

    else if (elementName == "slot1" || elementName == "slot2" || elementName == "slot3") {
      tempelement = document.getElementById(elementName);
      if (user.holding != 0) {

        if (tempelement.innerHTML != elementName) {
          player.innerHTML = tempelement.innerHTML;
          temp2 = tempelement.innerHTML;
          tempelement.innerHTML = user.holding;
          user.holding = temp2;

        }

        else {
          player.innerHTML = 'me';
          tempelement.innerHTML = user.holding;
          user.holding = 0;
        }


      }
      else if((user.holding == 0) && tempelement.innerHTML != elementName) {
        player.innerHTML = tempelement.innerHTML;
        user.holding = tempelement.innerHTML;
        tempelement.innerHTML = elementName;
      }

    }
}
