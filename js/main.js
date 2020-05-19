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

    document.getElementById("honeysuckles").textContent = `You have ${gameData.honeysuckles} 
    ${pluralize("honeysuckle", gameData.honeysuckles, "honeysuckles")}.`;

    document.getElementById("honeysucklesAmount").textContent = `There are ${gameData.honeysucklesAmount} 
    ${pluralize("honeysuckle", gameData.honeysucklesAmount, "honeysuckles")} in this field.`;
}

function replant() {
  if (gameData.honeysuckles === 0) {
    alert("You don't have any honeysuckles to replant");
    return;
  }
  gameData.honeysuckles -= 1;
  gameData.honeysucklesAmount += 1;

  document.getElementById("honeysuckles").textContent = `You have ${gameData.honeysuckles} 
  ${pluralize("honeysuckle", gameData.honeysuckles, "honeysuckles")}.`;

  document.getElementById("honeysucklesAmount").textContent = `There are ${gameData.honeysucklesAmount} 
  ${pluralize("honeysuckle", gameData.honeysucklesAmount, "honeysuckles")} in this field.`;
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