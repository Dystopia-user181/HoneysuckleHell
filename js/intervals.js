"use strict";

function generateHoneysucklesAndHoney() {
    const bees = gameData.honeybees;
    const totalProduction = bees * 3;
    function addHoneyAndHoneysuckles() {
      gameData.honeysucklesAmount += totalProduction;
    }
    setInterval(addHoneyAndHoneysuckles(), 2000);
  }

const regrowHoneysuckles = window.setInterval(() => {
    gameData.honeysucklesAmount += 1;
}, 5000);

const mainGameLoop = window.setInterval(() => {
    if (gameData.honeysucklesAmount > gameData.honeybees) {
        gameData.honeybees += 1;
        gameData.honeybees = Math.min(gameData.honeybees, Math.floor(gameData.honeysucklesAmount) / 100);
    }
  }, 10000);