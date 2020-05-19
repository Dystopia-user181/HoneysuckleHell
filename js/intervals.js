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
  
    document.getElementById("honeysucklesAmount").textContent = `There are ${gameData.honeysucklesAmount} 
    ${pluralize("honeysuckle", gameData.honeysucklesAmount, "honeysuckles")} in this field.`;
}, 5000);

const mainGameLoop = window.setInterval(() => {
    if (gameData.honeysucklesAmount > gameData.honeybees) {
        gameData.honeybees += 1;
        gameData.honeybees = Math.min(gameData.honeybees, Math.floor(gameData.honeysucklesAmount) / 100);
        document.getElementById("honeybees").textContent = `You have ${Math.floor(gameData.honeybees)} 
        ${pluralize("honeybee", gameData.honeybees, "honeybees")}`;
    }
  }, 10000);