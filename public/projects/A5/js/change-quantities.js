//turns a fraction symbol into an equal floating point number
function fracToFloat(frac) {
	if (frac == "¼") { //is this illegal? will i be put in code jail?
		return 0.25;
	} else if (frac == "½") {
		return 0.5;
	} else if (frac == "¾") {
		return 0.75;
	} else {
		return frac;
	}
}

//turns a float into an equal fraction symbol
function floatToFrac(float) {
	if (float == 0.25) {
		return "&frac14;";
	} else if (float == 0.5) {
		return "&frac12;";
	} else if (float == 0.75){
		return "&frac34;";
	} else {
		return float;
	}
}

//takes an array with all the measurments for a batch size of one (or whatever is the default) and turns each element into an equal float counterpart
//ex: parameter base = ["1","¾","½","2 ½","1"]
//returns base = [1,0.75,0.5,2.5,1]
function baseToFloats(base) {
	let full = 0;
	let mantissa = 0;
	for (var i = 0; i < base.length; i++) { //for measurement in base measurments
		base[i] = base[i].toString();
		mantissa = base[i][base[i].length - 1]; //let me do [-1] godammit
		mantissa = fracToFloat(mantissa);
		full = parseInt(base[i][0]);
		if (mantissa < 1 && !Number.isNaN(full)) { //if mantissa is a valid fraction and full is not NaN
			base[i] = full + mantissa;
		} else { //if the measurment doesn't have a fraction, ie: an amount of 1 would have full & mantissa = 1
			base[i] = mantissa;
		}
	}
	return base;
}

//adjusts the measurments for the desired batch size
//parameters val: value of button clicked
	//curVal: value of last clicked button/size of current batch displayed
	//base: array of measurments for a single batch
//returns val if measurments were adjusted, curVal if not
function qtyConversion(val, curVal, base) {
	if (val != curVal) { //if the same button has not been clicked in succession
		let i = 0;
		let full = 0;
		let frac = "";
		let adjusted = [];
		for (i = 0; i < base.length; i++) {
			adjusted[i] = base[i] * val;
			frac = adjusted[i] % 1;
			if (frac != 0) { //if there is a fraction
				adjusted[i] -= frac;
				frac = floatToFrac(frac);
				if (adjusted[i] == 0) { //if the entire number is a fraction, less than 1
					adjusted[i] = frac; //only the fraction is recorded
				} else { //if there is a whole and fraction component
					adjusted[i] = adjusted[i].toString();
					adjusted[i] += " " + frac; //formatted to a string
				}
			}
		}
		i = 0;
		$(".ingrediants > li > span").each( function() { //replaces the contents of the spans with the adjusted measurements
			$(this).empty();
			$(this).append(adjusted[i]);
			i++;
		});
		return val;
	} else {
		return curVal;
	}
}

$(document).ready(function() {
	let base = [];
	let curVal = 1;
	$(".ingrediants > li > span").each( function() { //for each measurement in the ingrediants list
		base.push($(this).text()); //add them to an array
	});
	base = baseToFloats(base);
	$(".quantity-button").click( function() { //when a button is clicked
		let val = $(this).attr("value");
		curVal = qtyConversion(val, curVal, base);
	});
});