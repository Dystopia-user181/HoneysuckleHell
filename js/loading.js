if (localStorage.getItem("honeySuckleSave")!==null) {
	gameData=JSON.parse(localStorage.getItem("honeySuckleSave"));
	Object.keys(initData).forEach(function (key, index) {
		if (typeof(gameData[key])!==typeof(initData[key]) || gameData[key]===undefined) gameData[key] = initData[key];
	});
	document.getElementById("honeysucklesAmount").textContent = `There are ${gameData.honeysucklesAmount.toFixed()} 
    ${pluralize("honeysuckle", gameData.honeysucklesAmount, "honeysuckles")} in this field.`;
    document.getElementById("honeysuckles").textContent = `You have ${gameData.honeysuckles} 
    ${pluralize("honeysuckle", gameData.honeysuckles, "honeysuckles")}.`;
    document.getElementById("honeybees").textContent = `You have ${Math.floor(gameData.honeybees)} 
    ${pluralize("honeybee", gameData.honeybees, "honeybees")}`;
    document.getElementById("honey").textContent = `You have ${gameData.honey.toFixed(2)} honey`;
}