// Setting variables for each of the door elements
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

// Random door generator
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
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
}

// Setting the path for the replacement door images
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// Door click functions
doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
}
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
}
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
}

// Calling the random door generator
randomChoreDoorGenerator();