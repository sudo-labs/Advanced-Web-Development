// Main formula: c = (r * p) / (1 - (Math.pow((1 + r), (-n))))

function calculateMortgage(p, r, n){
	// @param p float Amount borrowed
	// @param r interest as a percentage
	// @param n term in years
	r = percentToDecimal(r);
	n = yearsToMonths(n);

	var pmt = (r * p) / (1 - (Math.pow((1 + r), (-n))));
	return parseFloat(pmt.toFixed(2));
}

