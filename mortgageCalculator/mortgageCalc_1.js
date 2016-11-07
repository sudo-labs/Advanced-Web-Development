// Main formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n))))


var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
	var cost = document.getElementById("inCost").value;
	var downPayment = document.getElementById("inDown").value;
	var interest = document.getElementById("inAPR").value;
	var term = document.getElementById("inPeriod").value;
	var amountBorrowed = cost - downPayment;
	var pmt = calculateMortgage(amountBorrowed, interest, term);

	postPayments(pmt);
};


function calculateMortgage(p, r, n){
	// @param p float Amount borrowed
	// @param r interest as a percentage
	// @param n term in years
	r = percentToDecimal(r);
	n = yearsToMonths(n);

	var pmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
	return parseFloat(pmt.toFixed(2));
}

function percentToDecimal(percent) {
	return (percent/12)/100;
}

function yearsToMonths(year) {
	return year * 12;
}

function postPayments(payment) {
	var htmlEl = document.getElementById("outMonthly");

	htmlEl.innerText = "$" + payment;

}

function hasNumbers(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
