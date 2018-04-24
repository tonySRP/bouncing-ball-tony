//vector information 'https://p5js.org/reference/#/p5.Vector'

var particle1;


function setup(){
    createCanvas(640, 360);
    particle1 = drawParticle (200, 100); // x-coordinate, y-coordinate
}

function draw(){
    background(10, 5); //first number is RGB, second one is alpha which is the transparency.

    var gravity = createVector(0, 0.01); //x is zero because there is no wind. Adding 1 means that it goes down because of where 
                                        //zero is on the x nd y in javascript.
    applyForce(gravity);//force used as gravity in this case. As per the proper physical term.
    update();//this updates all of the values for the particle.
    display();
    edges();
}

function drawParticle(x, y) {

    pos = createVector(x, y);//two dimensional if you use only two points.
    vel = createVector(0,0);
    acc = createVector(0,0);
    r = 20;
  
    /*Newton's 2nd law: F = M * A or A = F / M
    but if we treat mass (M) as 1, then we don't need to factor it*/
    applyForce = function(force) {//force could be called gravity
      var f = force
      acc.add(force);
    };
  
    update = function() { //does the math below then clears the acceleration to be reset back to zero again.
      // Velocity changes according to acceleration
      vel.add(acc);
      // position changes by velocity
      pos.add(vel);
      // We must clear acceleration each frame
      acc.set(0,0);
    };
  
    display = function() {
      fill('red');
      ellipse(pos.x, pos.y, r, r); //making up mass in pixel values
    };
  
    edges = function() {
      if (pos.y > height) {
        vel.y *= -0.8; //* means multiplication, also y=y*-0.8 //this is a cheat to make it decrease by 20% each time to represent a bouncing ball.
        pos.y = height;
      };
    }
}