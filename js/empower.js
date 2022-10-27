
let flyingMen = [];
let touched = [];

let wrapper = document.getElementById('people-wrapper');
let button = document.getElementsByClassName('people');
let prize = document.getElementsByClassName('prize');
let simon = ['🤗', '💝', '🧡', '🥰', '💖'];
let fsize = "30";
//emoji object
function emoji(face, startx, starty, flour, fs) {
  this.isAlive = true;
  this.face = face;
  this.x = startx;
  this.y = starty;
  this.flourLevel = flour;
  this.fontSize = fs;

  this.yincrement = Math.floor((cryptoRandom() * 12) + 1);
  this.yincrement *= Math.floor(cryptoRandom() * 3) == 1 ? 1 : -1;
  this.xincrement = Math.floor((cryptoRandom() * 10) + 1);
  this.xincrement *= Math.floor(cryptoRandom() * 2) == 1 ? 1 : -1;
  this.element = document.createElement('div');
  this.element.innerHTML = face;
  this.element.style.position = "absolute";
  this.element.style.left = "0";
  this.element.style.top = "0";
  this.element.style.fontSize = this.fontSize + "px";
  this.element.style.color = "white";
  this.element.style.opacity = "1";
  this.element.style.zIndex = "1";
  document.body.appendChild(this.element);
  this.refresh = refresh;
}

function refresh() {
  if (this.x <= 0) {
    this.isAlive = false;
  }
  if (this.x + this.xincrement >= (window.innerWidth - this.fontSize * 2)) {
    this.isAlive = false;
  }
  if (this.isAlive) {
    //------Y axis-----        
    this.y += this.yincrement;
    this.x += this.xincrement;
    this.yincrement += 0.25;

    if (this.y + this.yincrement >= this.flourLevel) {
      if (parseFloat(this.element.style.opacity) <= 0.1) {
        this.isAlive = false;
      }
      this.element.style.opacity = parseFloat(this.element.style.opacity) - 0.1;
      this.yincrement = -this.yincrement + 2;
    }
    this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
  }
  else {
    this.element.style.transform = "translate(px, px)";
  }
}


[...button].forEach((element, index) => {
  element.addEventListener("mouseover", function (e) { goB(index); });
  touched[index] = false;
});


function goB(index) {

  if (touched[index] === false) {
    let fontsize = fsize;
    let xv = (button[index].getBoundingClientRect().left + button[index].getBoundingClientRect().right) / 2 - (fontsize / 2);
    let yv = (button[index].getBoundingClientRect().top + button[index].getBoundingClientRect().bottom) / 2;
    let fl = window.innerHeight - fontsize - 10;
    for (let i = 0; i < 10; i++) {
      let coolGuy = new emoji(simon[Math.floor(cryptoRandom() * simon.length)], xv, yv, fl, fontsize);
      flyingMen.push(coolGuy);
    }
    button[index].classList.add("people--touched");
    touched[index] = true;
    if (checker(touched)) {
      prize[0].classList.add("prize-visible");
    }
  }
}



//Rendering
function render() {
  for (let i = 0; i < flyingMen.length; i++) {
    flyingMen[i].refresh();
    if (!flyingMen[i].isAlive) {
      flyingMen[i].element.remove();
      flyingMen.splice(i, 1);
    }
  }
  requestAnimationFrame(render);
}

render();

let checker = arr => arr.every(Boolean);

function cryptoRandom() {
  const typedArray = new Uint8Array(1);
  const randomValue = crypto.getRandomValues(typedArray)[0];
  const randomFloat = randomValue / Math.pow(2, 8);
  return randomFloat;
}