// Main formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n))))


var btn = document.getElementById("btnCalculate");
btn.onclick = function() {
	var cost = document.getElementById("inCost").value;
	if (hasNumbers(cost) == false) {
		alert("Please enter the cost");
		return false;
	}
	if (cost < 0) {
		alert("Invalid cost. Cost has to be greater than or equal to 0");
		return false;
	}

	var downPayment = document.getElementById("inDown").value;
	if (hasNumbers(downPayment) == false) {
		alert("Please enter the down payment");
		return false;
	}

	var interest = document.getElementById("inAPR").value;
	if (hasNumbers(interest) == false) {
		alert("Please enter the APR");
		return false;
	}

	var term = document.getElementById("inPeriod").value;
	if (hasNumbers(term) == false) {
		alert("Please enter the period");
		return false;
	}

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
