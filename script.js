// Setting variables for each of the door elements
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

// Setting the path for the replacement door images
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// Door click functions
doorImage1.onclick = () => {
  doorImage1.src = botDoorPath;
}
doorImage2.onclick = () => {
  doorImage2.src = beachDoorPath;
}
doorImage3.onclick = () => {
  doorImage3.src = spaceDoorPath;
}