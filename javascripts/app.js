// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E": 
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        rover.y -= 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "S":
      if (rover.y < 9) {
        rover.y += 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "E":
      if (rover.x < 9) {
        rover.x += 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x -= 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
  }
}

function moveBackwards(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y < 9) {
        rover.y += 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "S":
      if (rover.y > 0) {
        rover.y -= 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "E":
      if (rover.x > 0) {
        rover.x -= 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
    case "W":
      if (rover.x < 9) {
        rover.x += 1;
        console.log("x:" + rover.x, "y:" + rover.y);
        rover.travelLog.push([rover.x,rover.y]);
      } else {
        console.log("Mars Rover can't move in this direction.")
      }
      break;
  }
}

var firstCommands = "rffrfflfrff";

function commandList(commands){
for (i = 0; i < commands.length - 1; i++) {
  switch (commands[i]) {
    case "f":
      moveForward(rover);
      break;
    case "r":
      turnRight(rover);
      break;
    case "l":
      turnLeft(rover);
      break;
    case "b":
      moveBackwards(rover);
      break;
    default:
      console.log("Invalid character.")

  }
}
console.log(rover.travelLog);
}

commandList(firstCommands);