"use strict";

function gather() {
    if (gameData.honeysucklesAmount === 0) {
        alert("You are out of honeysuckles to gather!");
        return;
    }
    gameData.honeysuckles += 1;
    gameData.honeysucklesAmount -= 1;
}

function replant() {
  if (gameData.honeysuckles === 0) {
    alert("You don't have any honeysuckles to replant");
    return;
  }
  gameData.honeysuckles -= 1;
  gameData.honeysucklesAmount += 1;
}
  