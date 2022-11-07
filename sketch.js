let y = 0;
let x =0;

function setup() {
  createCanvas(1900, 900);

}

function draw() {
  background(0, 205, 255);
  

 
   // ears
  fill(160,90,40);
 ellipse(y+150,243,59);
  ellipse(y+250,243,59);
  fill(250,160,220);
  ellipse(y+150,243,40);
    fill(250,160,220);
  ellipse(y+250,243,40);
  
 //head
  stroke(160,90,40);
  fill(160,90,40);
  ellipse(y+200,314,170,160);
 
   //nose
  fill(110,60,15);
  ellipse(y+200,329,22,12);
  
  
  //eyes
  fill(250,250,250);
  ellipse(y+220,299,25,35);
  ellipse(y+180,299,25,35);
  fill(random(250), 991,random(250));
  ellipse(y+180,299,13,18);
  ellipse(y+220,299,13,18);
  
  //month
     fill(0);
  arc(y+200,339.6,50,random(30,60),0,179.1);
  fill(255,255,255);
  
  rect(y+190,340,8,10);
  rect(y+205,340,8,10);
    
  
 //body
  fill(160,90,40);
  ellipse(y+200,493,250,250);
  fill(210,120,55);
  ellipse(y+200, 493,120,140);
  
  
  //feet & arms
  circle(y+285,560,70);
  circle(y+120,560,70);
  stroke(210,120,55);
  fill(160, 90,40);
  rect(y+135,450,30,50);
  circle(y+150,500,40);
  rect(y+240,450,30,50);
  circle(y+255,500,40);
  
  //paws
  fill(92, 64, 51);
  circle(y+100,557, 15);
  circle(y+120,547,15);
  circle(y+140,557,15);
  ellipse(y+120,575,40,30);
  circle(y+265,557,15);
  circle(y+285,547,15);
  circle(y+305,557,15);
  ellipse(y+285,575,40,30);
  
  fill(255, 165, 0);
   ellipse(x+350,346,20,20);
   ellipse(x+265,347,20,20);
   ellipse(x+240,348,20,20);
   ellipse(x+290,349,20,20);
   ellipse(x+318,350,20,20);
   
  
  
  
y= y+1
 
  x= x+1
   
}