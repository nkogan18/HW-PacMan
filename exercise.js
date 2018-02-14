/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/
var exercise = {};
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
}

exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    exercise.pos.x += exercise.increment;
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px" 
    // NOTE: I could have added + "px" on the end of the line below, but it works as is right now
    exercise.img1.style.left = exercise.pos.x; 
    if (exercise.flag === 0) {
        exercise.flag = 1;
    } else {
        exercise.flag = 0;
    }
}

exercise.chooseImage = function() {
    // choose between all 4 images
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = "PacMan2.png";
        } else {
            exercise.img1.src = "PacMan1.png";
        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            exercise.img1.src = "PacMan4.png";
        } else {
            exercise.img1.src = "PacMan3.png";
        }
    }
}

exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width 
    // NOTE: if wanted to make PacMan bounce of the screen edges rather than the invisible
    // wall at 800px, create var window_size = window.innerWidth; and replace 800 with it below
    if (exercise.pos.x >= 800 - exercise.img1.width) {
        exercise.increment = -(exercise.increment);
    } else if (exercise.pos.x === 0) {
        exercise.increment = 20;
    }   
}