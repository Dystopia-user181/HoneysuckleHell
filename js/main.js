"use strict";

const gameData = {

    honeysuckles: 0,
    honeysucklesAmount: 200,
    honeybees: 0,
    honey: 0,
    money: 0
};


function gather() {
    if (gameData.honeysucklesAmount === 0) {
        alert("You are out of honeysuckles to gather!");
        return;
    }
    gameData.honeysuckles += 1;
    gameData.honeysucklesAmount -= 1;
    document.getElementById("honeysuckles").textContent = `You have ${gameData.honeysuckles} honeysuckles.`;
    document.getElementById("honeysucklesAmount").textContent = `There are ${gameData.honeysucklesAmount} 
    honeysuckles in this field.`;
}

const mainGameLoop = window.setInterval(() => {
    if (gameData.honeysucklesAmount / 100 !== gameData.honeybees && gameData.honeysucklesAmount < gameData.honeybees) {
        gameData.honeybees += (gameData.honeysucklesAmount / 100) / 10;
        document.getElementById("honeybees").textContent = `You have ${Math.floor(gameData.honeybees)} honeybees`;
    }
  }, 100);

  function pluralize(value, amount, plural) {
    if (value === undefined || amount === undefined)
      throw "Arguments must be defined";
    let isSingular = true;
    if (typeof amount === "number") {
      isSingular = amount === 1;
    } else if (amount instanceof Decimal) {
      isSingular = amount.eq(1);
    } else {
      throw "Amount must be either a number or Decimal";
    }
    if (isSingular) return value;
    return plural === undefined ? `${value}s` : plural;
  }