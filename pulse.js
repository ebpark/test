var img;

function setup() {
    createCanvas(800,600);
    line(100, 200, 400, 800);
    stroke(300);

    img = loadImage('images/1-06.svg');
    
    /*image(img, 0, 0);*/
      
  }
    
function draw() {
    
    line(100, 20, 100, 20);
    stroke(300);

    image(img, 0, 0, 100, 100);
    
  /*image(img, 0, 0);
    img.display();
strokeWeight(7.5);
line(120, 92, 230, 92);*/
        
} 

/*
var img;

function setup() {
     var myCanvas =
  createCanvas(400, 400);
     myCanvas.parent("expand");
  img = loadImage("pulse/images/5-06.svg");
} 

function draw() { 
  image(img, 0, 0, 100, 100);
}








var img;

function preload() {
  img = loadImage('pulse/images/3-06.jpg');
}


function setup() {
    var myCanvas =      createCanvas(window.innerWidth,400);
     myCanvas.parent("expand");
    
    /*image(img, 0, 0);
      
  }
    
function draw() {
    
    line(100, 20, 100, 20);
    stroke(300);
    
  /*image(img, 0, 0);
    img.display();
strokeWeight(7.5);
line(120, 92, 230, 92);
        
} 
*/
