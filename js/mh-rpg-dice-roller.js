(function() {
	var rollButton = document.getElementById('mh_rpg_roll_button'),
		widgetRollButton = document.getElementById('mh_rpg_roll_button_widget');

	if (rollButton !== null)
		rollButton.addEventListener('click', rollDice);
	if (widgetRollButton !== null)
		widgetRollButton.addEventListener('click', widgetRollDice);

	function rollDice() {
		clearRolls('mh_rpg_dice_roll', 'mh_rpg_all_rolls');
		var numberOfDice = document.getElementById("mh_rpg_number_of_dice").value;
		
		if (numberOfDice < 1)
			return;
		
		var dieType = document.getElementById("mh_rpg_die_type").value,
			rolls = getRolls(numberOfDice, dieType);

		displayTotal('mh_rpg_dice_roll', rolls.reduce(addValues));

		if (document.getElementById('mh_rpg_display_all_cb').checked)
			displayAllRolls('mh_rpg_all_rolls', rolls);
	}

	function widgetRollDice() {
		clearRolls('mh_rpg_dice_roll_widget', 'mh_rpg_all_rolls_widget');
		var numberOfDice = document.getElementById("mh_rpg_number_of_dice_widget").value;
		
		if (numberOfDice < 1)
			return;
		
		var dieType = document.getElementById("mh_rpg_die_type_widget").value,
			rolls = getRolls(numberOfDice, dieType);


		displayTotal('mh_rpg_dice_roll_widget', rolls.reduce(addValues));

		if (document.getElementById('mh_rpg_display_all_cb_widget').checked)
			displayAllRolls('mh_rpg_all_rolls_widget', rolls);
	}

	function getRolls(numberOfDice, dieType) {
		var rolls = [];
		for (var i = 0; i < numberOfDice; i++) {
			rolls.push(randomNumber(1, dieType));
		}
		return rolls;
	}

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function addValues(a, b) {
		return a + b;
	}

	function displayTotal(containerId, value) {
		document.getElementById(containerId).innerHTML = value;
	}

	function displayAllRolls(containerId, values) {
		document.getElementById(containerId).innerHTML = '(' + values.join(', ') + ')';
	}

	function clearRolls(rollContainerId, allRollsContainerId) {
		document.getElementById(rollContainerId).innerHTML = '';
		document.getElementById(allRollsContainerId).innerHTML = '';
	}
})();