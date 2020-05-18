var gameData = {

    honeysuckles: 0,
    honeysucklesAmount: 200,
    honeybees: 0,
    honey: 0,
    money: 0
}


function gather() {
    if (gameData.honeysucklesAmount == 0) {
        alert("You are out of honeysuckles to gather!")
        return false;
    }
    gameData.honeysuckles += 1
    gameData.honeysucklesAmount -= 1
    document.getElementById("honeysuckles").textContent = "You have " + gameData.honeysuckles + " honeysuckles."
    document.getElementById("honeysucklesAmount").textContent = "There are " + gameData.honeysucklesAmount + " honeysuckles in this field."
}

var mainGameLoop = window.setInterval(function() {
    if (gameData.honeysucklesAmount/100 != gameData.honeybees && gameData.honeysucklesAmount < gameData.honeybees) {
        gameData.honeybees += (gameData.honeysucklesAmount/100)/10
        document.getElementById("honeybees").textContent = "You have " + Math.floor(gameData.honeybees) + " honeybees"
    }
  }, 100)