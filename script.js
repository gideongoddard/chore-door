// Setting variables for each of the door elements
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

// Setting a variable for the start button element
let startButton = document.getElementById("start");

// Setting the path for the replacement door images
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// Setting other global variables
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Function to check if the bot door has been opened
let isBot = door => {
    if (door.src == botDoorPath) {
        return true;
    } else {
        return false;
    }
}

// Function to check if a door is open or closed
let isClicked = door => {
    if (door.src == closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

// Function to decrement the no. of open doors and check if all are open
let playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors == 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
};

// Random door generator
let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor == 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor == 1) {
    openDoor1 = spaceDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor == 2) {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

// Door click functions
doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentlyPlaying == true) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
};
doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentlyPlaying == true) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
};
doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentlyPlaying == true) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
};

// Click handler for start button
startButton.onclick = function() {
    if (currentlyPlaying == false) {
        startRound();
    }
}
  
// Start round function
let startRound = () => {
doorImage1.src = closedDoorPath;
doorImage2.src = closedDoorPath;
doorImage3.src = closedDoorPath;
numClosedDoors = 3;
startButton.innerHTML = "Good luck!"
currentlyPlaying = true;
randomChoreDoorGenerator();
}

// Function to manage the game over conditions
let gameOver = status => {
    if (status == 'win') {
        startButton.innerHTML = "You win!<br>Play again?";
    } else {
        startButton.innerHTML = "Game over! Play again?"
    };
    currentlyPlaying = false;
};

// Calling the start round function
startRound();