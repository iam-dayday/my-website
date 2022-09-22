let canvas;
let h1;
let purpur1;
let purpur2;
let button;
let bcolor;

function setup() {
  canvas = createCanvas(600, 400);
  canvas.position(350, 100);
  ellipseMode(CENTER);
  createElement('h5', 'it really really sucks.');
  createElement('h5', 'but I can give you some lucky number today :)');
  createElement('h5', 'if you click that little purple circle');
	h1 = createElement('h5', 'Your lucky number will be: ');
	bcolor = 0;
	button = createButton("🫥");
	button.mousePressed(changeColor);
  purpur1 = new Purpur(300, 200, 150);
  purpur2 = new Purpur(300, 200, 50);

}

function changeColor(){
	bcolor = color(random(255),random(255),random(255));
}

function mousePressed() {

  if (purpur2.float(mouseX, mouseY)) {
  h1.html("Your lucky number will be: " + random(0, 100));
}
}

function draw() {
  clear();
  fill(0);
  purpur1.changeThick(2);
  purpur1.show();


fill(bcolor);
  if (purpur2.float(mouseX, mouseY)) {

    purpur2.changeThick(5);
  } else {

    purpur2.changeThick(2);
  }
  purpur2.show();



  // background(0);
  // fill(255);
  // Purpur(300, 200, 150);
  // fill(150, 0, 200);
  // Purpur(300, 200, 50);

}

class Purpur {

  constructor(x, y, b) {
    this.x = x;
    this.y = y;
    this.b = b; //banjing
    this.col = bcolor;
    this.thick = 0;
  }

  float(x1, y1) {
    let dd = dist(x1, y1, this.x, this.y);
    if (dd < this.b / 2) {
      return true;
    } else {
      return false;
    }
  }

  changeThick(cthick) {
    this.thick = cthick;
  }

  // changeCol(ccol) {
  //   this.col = ccol;
  // }

  show() {
    stroke(255);
    strokeWeight(this.thick);
    ellipse(this.x, this.y, this.b);
		fill(this.col);
  }
}
