"use strict";

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
  