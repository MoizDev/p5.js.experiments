/* 

Moiz Hashmi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ICD2O1-03
Began working: April 12, 2024

*/
let font1;

function preload() {
  // Postcard Text
  font1 = loadFont("great-vibes.regular.ttf");
}

function setup() {
  createCanvas(800, 500);
  textSize(20)
}

function draw() {
  background(121,222,248);
  
  rectMode(CORNER);
  // Clouds
  noStroke();
  fill(175,235,250);
  ellipse(425,250,450,450);
  ellipse(200,400, 200,200);
  ellipse(10, 375, 400, 400);
  ellipse(715,375,300,300);
  
  //Background buildings (lighter colour)
  fill(114,202,216);
  beginShape();
  vertex(0, 250);
  vertex(50, 250);
  vertex(50, 275);
  vertex(125, 275);
  vertex(125, 400);
  vertex(175, 400);
  vertex(175, 350);
  vertex(200, 350);
  vertex(200, 200);
  vertex(250, 200);
  vertex(250, 350);
  vertex(275, 350);
  vertex(275, 175);
  vertex(275, 175);
  vertex(325, 175);
  vertex(325, 350);
  vertex(350, 350);
  vertex(350, 300);
  vertex(400, 300);
  vertex(400, 350);
  vertex(525, 350);
  vertex(525, 300);
  vertex(600, 300);
  vertex(600, 300);
  vertex(600, 275);
  vertex(650, 275);
  vertex(650, 325);
  vertex(650, 325);
  vertex(675, 325);
  vertex(675, 200);
  vertex(675, 200);
  vertex(725, 200);
  vertex(725, 375);
  vertex(725, 375);
  vertex(775, 375);
  vertex(775, 375);
  vertex(775, 325);
  vertex(800, 325);
  vertex(800, 500);
  vertex(0, 500);
  vertex(0, 250);
  endShape();

  //Foreground buildings (darker ones)
  fill(24, 119, 134);
  
       // Use these variables to shift the existing background buildings to save effort.
  let building_shift_x = -90
  let shift_y = -20
  beginShape();
  vertex(0 + building_shift_x, 250 + shift_y);
  vertex(50 + building_shift_x, 250 + shift_y);
  vertex(50 + building_shift_x, 275 + shift_y);
  vertex(125 + building_shift_x, 275 + shift_y);
  vertex(125 + building_shift_x, 400 + shift_y);
  vertex(175 + building_shift_x, 400 + shift_y);
  vertex(175 + building_shift_x, 350 + shift_y);
  vertex(200 + building_shift_x, 350 + shift_y);
  vertex(200 + building_shift_x, 200 + shift_y);
  vertex(250 + building_shift_x, 200 + shift_y);
  vertex(250 + building_shift_x, 350 + shift_y);
  vertex(275 + building_shift_x, 350 + shift_y);
  vertex(275 + building_shift_x, 175 + shift_y);
  vertex(275 + building_shift_x, 175 + shift_y);
  vertex(325 + building_shift_x, 175 + shift_y);
  vertex(325 + building_shift_x, 350 + shift_y);
  vertex(350 + building_shift_x, 350 + shift_y);
  vertex(350 + building_shift_x, 300 + shift_y);
  vertex(400 + building_shift_x, 300 + shift_y);
  vertex(400 + building_shift_x, 350 + shift_y);
  vertex(525 + building_shift_x, 350 + shift_y);
  vertex(525 + building_shift_x, 300 + shift_y);
  vertex(600 + building_shift_x, 300 + shift_y);
  vertex(600 + building_shift_x, 300 + shift_y);
  vertex(600 + building_shift_x, 275 + shift_y);
  vertex(650 + building_shift_x, 275 + shift_y);
  vertex(650 + building_shift_x, 325 + shift_y);
  vertex(650 + building_shift_x, 325 + shift_y);
  vertex(675 + building_shift_x, 325 + shift_y);
  vertex(675 + building_shift_x, 200 + shift_y);
  vertex(675 + building_shift_x, 200 + shift_y);
  vertex(725 + building_shift_x, 200 + shift_y);
  vertex(725 + building_shift_x, 375 + shift_y);
  vertex(725 + building_shift_x, 375 + shift_y);
  vertex(775 + building_shift_x, 375 + shift_y);
  vertex(775 + building_shift_x, 375 + shift_y);
  vertex(775 + building_shift_x, 325 + shift_y);
  vertex(800 + building_shift_x, 325 + shift_y);
  vertex(800 + building_shift_x, 500 + shift_y);
  vertex(0 + building_shift_x, 500 + shift_y);
  vertex(0 + building_shift_x, 250 + shift_y);
  endShape();
  rect(700,300,100,500);

  // River water
  fill(43,202,226);
  rect(0, 400, 800, 200);
  
  // River Water Turbulence Lines
  stroke(120, 225, 247, 190);
  strokeWeight(3);
  line(25, 435, 150, 435);
  line(130, 475, 200, 475);
  line(220, 475, 310, 475);
  line(200, 450, 290, 450);
  line(350, 420, 440, 420);
  line(420, 460, 600, 460);
  line(535, 435, 630, 435);
  line(675, 470, 800, 470);

  // Statue of Liberty's Base Pedestal
  fill(5, 137, 149);
  strokeWeight(0);
  rectMode(CENTER);
  rect(400,500, 140, 40, 10);
  rect(400,410, 120, 150);

  // Statue of Liberty Hair
  fill(0, 120, 132);
  beginShape();
  vertex(430, 133);
  bezierVertex(430, 133, 418, 110, 420, 87);
  bezierVertex(422, 64, 375, 79, 375, 79);
  bezierVertex(375, 79, 378, 105, 373, 119);
  bezierVertex(368, 134, 430, 133, 430, 133);
  endShape();

  // Statue of Liberty Neck
  rectMode(CENTER);
  fill(53, 176, 196);
  rect(400,126,26,30);

  // Statue of Liberty Crown
  fill(7,95,105);
  beginShape();
  vertex(375, 78);
  vertex(349, 78);
  vertex(375, 74);
  vertex(374, 68);
  vertex(347, 51);
  vertex(377, 61);
  vertex(379, 57);
  vertex(370, 29);
  vertex(388, 55);
  vertex(394, 53);
  vertex(396, 25);
  vertex(401, 54);
  vertex(407, 54); 
  vertex(424, 28);
  vertex(413, 59);
  vertex(417, 61);
  vertex(444, 51);
  vertex(416, 67);
  vertex(418, 72);
  vertex(452, 77);
  vertex(418, 78);
  vertex(375, 78);
  endShape();

  // Statue of Liberty Face Only (No eyes or nose or hat yet)
  fill(89,218,230);
  beginShape();
  vertex(389, 118);
  bezierVertex(392, 119, 404, 118, 408, 115);
  bezierVertex(412, 112, 416, 109, 416, 100);
  bezierVertex(416, 91, 415, 78, 415, 78);
  bezierVertex(415, 78, 375, 82, 375, 82);
  bezierVertex(375, 82, 376, 102, 377, 106);
  bezierVertex(378, 110, 386, 117, 389, 118);
  endShape();

  // Face shadow
  fill(33, 160, 173, 150);
  beginShape();
  vertex(402, 118);
  bezierVertex(402, 118, 414, 117, 416, 105);
  bezierVertex(418, 93, 415, 78, 415, 78);
  bezierVertex(415, 78, 414, 112, 402, 118);
  endShape();


  // Statue's nose
  fill(26, 161, 173, 200)
  beginShape();
  vertex(394, 105);
  vertex(400, 105);
  vertex(397, 94);
  endShape();

  // Statue lips
  fill(26, 161, 173);
  stroke(26, 161, 173, 100);
  strokeWeight(2)
  line(393, 110, 402, 109);
  strokeWeight(0);

  // Statue of Liberty's Raised Shoulder
  fill(1,162,179);
  beginShape();
  vertex(345, 214);
  bezierVertex(345, 214, 425, 129, 425, 129);
  bezierVertex(425, 129, 404, 129, 395, 126);
  bezierVertex(386, 123, 374, 109, 374, 107);
  bezierVertex(374, 107, 375, 140, 345, 169);
  bezierVertex(345, 169, 344, 206, 345, 216);
  endShape();

  // Statue of Liberty Shoulder Shadow
  fill(1,135,150);
  beginShape();
  vertex(345, 169);
  bezierVertex(345, 169, 376, 155, 374, 107);
  bezierVertex(374, 107, 367, 149, 345, 169);
  endShape();
  
  // Shoulder Sleeve Dark
  fill(69,203,215);
  beginShape();
  vertex(330, 145);
  bezierVertex(331, 152, 345, 169, 345, 169);
  bezierVertex(370, 150, 374, 107, 374, 107);
  bezierVertex(360, 88, 360, 88, 330, 145);
  bezierVertex(331, 152, 345, 169, 345, 169);
  endShape();
 
  // Shoulder Sleeve Light
  fill(55,181,189);
  beginShape();
  vertex(330, 145);
  bezierVertex(330, 145, 366, 119, 360, 88);
  bezierVertex(360, 88, 331, 118, 330, 145);
  endShape();

  // Raised Arm
  fill(88,221,231);
  beginShape();
  vertex(345, 130);
  bezierVertex(345, 130, 361, 112, 360, 88);
  bezierVertex(360, 88, 345, 51, 347, 10);
  bezierVertex(347, 10, 329, 12, 329, 12);
  bezierVertex(329, 12, 331, 82, 344, 130);
  endShape();

  // Statue's Arm Holding Book
  fill(16,159,179);
  beginShape();
  vertex(444, 169);
  bezierVertex(444, 169, 467, 297, 467, 297);
  bezierVertex(467, 297, 483, 264, 474, 220);
  bezierVertex(465, 176, 444, 169, 444, 169);
  endShape();

  // The Book the Statue is Holding
  fill(88,221,230, 200);
  beginShape();
  vertex(460, 258);
  bezierVertex(460, 258, 492, 201, 495, 196);
  bezierVertex(498, 191, 491, 186, 491, 186);
  bezierVertex(491, 186, 475, 177, 470, 175);
  bezierVertex(465, 173, 462, 173, 460, 177);
  bezierVertex(458, 181, 445, 204, 445, 204);
  endShape();

  // The Hand Holding the Book
  fill(28,172,184);
  beginShape();
  vertex(486, 222);
  bezierVertex(489, 222, 494, 216, 494, 216);
  bezierVertex(498, 212, 500, 208, 499, 206);
  bezierVertex(498, 204, 493, 201, 490, 198);
  bezierVertex(487, 195, 482, 196, 480, 198);
  bezierVertex(478, 200, 477, 202, 477, 202);
  bezierVertex(477, 202, 475, 206, 475, 206);
  bezierVertex(473, 210, 477, 214, 478, 215);
  bezierVertex(479, 216, 483, 222, 486, 222);
  endShape();


  // Lady Liberty's Robe
  fill(65, 202, 219);
  beginShape();
  vertex(340, 408);
  bezierVertex(343, 410, 373, 403, 397, 397);
  bezierVertex(421, 392, 416, 372, 418, 360);
  bezierVertex(420, 348, 457, 335, 465, 331);
  bezierVertex(473, 327, 460, 254, 460, 254);
  bezierVertex(457, 236, 448, 189, 444, 171);
  bezierVertex(441, 171, 436, 127, 428, 127);
  bezierVertex(420, 127, 365, 162, 345, 210);
  bezierVertex(325, 258, 340, 263, 341, 274);
  bezierVertex(342, 285, 334, 320, 335, 341);
  bezierVertex(336, 362, 339, 353, 339, 387);
  bezierVertex(335, 404, 338, 407, 340, 408);
  endShape();

  // Lady Liberty's Robe Bottom Cloth 
  fill(5, 137, 149);
  beginShape();
  vertex(458, 340);
  bezierVertex(464, 355, 471, 388, 470, 393);
  bezierVertex(469, 398, 464, 410, 460, 413);
  bezierVertex(457, 411, 451, 411, 451, 411);
  endShape();

  // Robe Shadows
  fill(34,170,187);
  beginShape();
  vertex(338, 390);
  bezierVertex(338, 390, 432, 278, 440, 191);
  bezierVertex(440, 191, 370, 339, 338, 365);
  bezierVertex(338, 365, 340, 386, 338, 390);
  endShape();

  beginShape();
  vertex(339,299);
  bezierVertex(339, 299, 400, 189, 410, 169);
  bezierVertex(410, 169, 347, 265, 341, 281);
  bezierVertex(341, 281, 338, 296, 339, 299);
  endShape();

  // Statue Liberty Eyes
  fill(0, 122, 138, 190);
  beginShape();
  vertex(375, 87);
  bezierVertex(375, 87, 379, 92, 386, 92);
  bezierVertex(393, 92, 394, 83, 394, 83);
  bezierVertex(394, 83, 394, 80, 394, 80);
  bezierVertex(394, 80, 375, 88, 375, 88);
  bezierVertex(375, 88, 379, 92, 386, 92);
  endShape();

  beginShape();
  vertex(417, 88);
  bezierVertex(417, 88, 398, 80, 398, 80);
  bezierVertex(398, 80, 398, 83, 398, 83);
  bezierVertex(398, 83, 399, 92, 406, 92);
  bezierVertex(413, 92, 417, 88, 417, 88);
  endShape();

  // Statue of Liberty Hat
  fill(2,160,172);
  beginShape();
  vertex(375, 89);
  bezierVertex(375, 89, 387, 82, 396, 82);
  bezierVertex(405, 82, 417, 90, 419, 89);
  bezierVertex(421, 86, 418, 72, 418, 64);
  bezierVertex(418, 56, 403, 51, 393, 52);
  bezierVertex(385, 53, 375, 59, 374, 63);
  bezierVertex(373, 67, 375, 89, 375, 89);
  endShape();

  // Torch Handle 
  rectMode(CENTER);
  rect(337, -5, 15, 55, 5)

  // Statue of Liberty's Head Grill
  fill(0, 119, 130);
  beginShape();
  vertex(378, 69);
  bezierVertex(378, 69, 380, 68, 381, 67);
  bezierVertex(381, 67, 381, 62, 381, 62);
  bezierVertex(381, 61, 380, 61, 379, 61);
  bezierVertex(378, 61, 378, 61, 378, 62);
  bezierVertex(378, 62, 378, 69, 378, 69);
  endShape();

  beginShape();
  vertex(383, 66);
  bezierVertex(383, 66, 386, 65, 386, 65);
  bezierVertex(386, 65, 386, 59, 386, 59);
  bezierVertex(386, 59, 385, 58, 384, 58);
  bezierVertex(383, 58, 383, 58, 383, 60);
  bezierVertex(383, 60, 383, 66, 383, 66);
  endShape();
  
  beginShape();
  vertex(388, 65);
  bezierVertex(388, 65, 391, 64, 391, 64);
  bezierVertex(391, 64, 391, 58, 391, 58);
  bezierVertex(391, 57, 390, 56, 389, 57);
  bezierVertex(388, 56, 388, 57, 388, 58);
  bezierVertex();
  bezierVertex();
  bezierVertex();
  endShape();
  
  beginShape();
  vertex(394, 64);
  bezierVertex(394, 64, 397, 63, 397, 63);
  bezierVertex(397, 63, 397, 56, 397, 56);
  bezierVertex(397, 56, 396, 55, 395, 55);
  bezierVertex(394, 55, 393, 56, 393, 57);
  bezierVertex(393, 57, 394, 63, 394, 64);
  endShape();
  
  beginShape();
  vertex(400, 64);
  bezierVertex(400, 64, 403, 64, 403, 64);
  bezierVertex(403, 64, 402, 57, 402, 57);
  bezierVertex(402, 56, 402, 56, 401, 56);
  bezierVertex(400, 56, 399, 57, 399, 57);
  bezierVertex(399, 57, 400, 63, 400, 63);
  endShape();
  
  beginShape();
  vertex(405, 64);
  bezierVertex(404, 64, 408, 65, 408, 65);
  bezierVertex(408, 65, 408, 58, 408, 58);
  bezierVertex(408, 57, 407, 57, 406, 57);
  bezierVertex(405, 57, 404, 58, 404, 58);
  bezierVertex(404, 58, 405, 64, 405, 64);
  endShape();
  
  beginShape();
  vertex(410, 66);
  bezierVertex(410, 66, 413, 67, 413, 67);
  bezierVertex(413, 67, 413, 60, 413, 60);
  bezierVertex(413, 59, 412, 59, 411, 59);
  bezierVertex(410, 59, 410, 59, 410, 60);
  bezierVertex(410, 66);
  endShape();




  // Hot Air Balloon
  fill(34,161,173);
  beginShape();
  vertex(142, 135);
  bezierVertex(142, 135, 156, 135, 156, 135);
  bezierVertex(156, 135, 163, 124, 170, 112);
  bezierVertex(177, 100, 164, 80, 149, 80);
  bezierVertex(134, 80, 121, 97, 127, 110);
  bezierVertex(133, 123, 142, 135, 142, 135);
  endShape();

  fill(255);
  beginShape();
  vertex(146, 135);
  bezierVertex(146, 135, 148, 135, 148, 135);
  bezierVertex(148, 135, 142, 120, 141, 112);
  bezierVertex(140, 105, 138, 91, 148, 80);
  bezierVertex(148, 80, 132, 85, 133, 102);
  bezierVertex(134, 120, 145, 135, 145, 135);
  endShape();

  beginShape();
  vertex(150, 135);
  bezierVertex(150, 135, 152, 135, 152, 135);
  bezierVertex(152, 135, 164, 120, 165, 102);
  bezierVertex(166, 85, 150, 80, 150, 80);
  bezierVertex(160, 91, 158, 105, 157, 112);
  bezierVertex(156, 120, 150, 135, 150, 135);
  endShape();

  // Hot air Balloon Base
  rectMode(CENTER);
  fill(199,160,101)
  rect(149, 152, 20, 15, 3)
  
  fill(82,63,27);
  rect(149, 144, 25, 4, 10)
  
  var text_shift_x = -30
  var text_shift_y = -5

  fill(2, 84, 90, 190);
  textFont("Times New Roman")
  textSize(30)
  text("Greetings From", 605 + text_shift_x, 60 + text_shift_y);
  
  fill(2, 84, 90);
  textSize(60)
  textFont(font1);
  text("New York! ❤️", 520 + text_shift_x, 120 + text_shift_y);
  
  fill(255,25,0, 200)


  // View cursor coordinates with these lines.
  fill(0);
  text(str(mouseX) + ' ,' + str(mouseY), mouseX, mouseY);
}


