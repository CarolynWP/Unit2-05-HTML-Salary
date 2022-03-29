function salary() {
	
	let hours = parseInt(document.getElementById('hours').value);
	let rate = parseInt(document.getElementById('rate').value);
	const TAX_RATE = 0.1805;

	let total = hours * rate;
	let tax = total * TAX_RATE;
	let pay = total - tax;

	document.getElementById('pay').innerHTML = 'your pay will be' + pay 
}