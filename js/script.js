// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the final cost depending on size and toppings added.
 */
function displayCost() {
  	// initialize constants
	const HST = 0.13
  const SIX_INCH = 6.50
  const TEN_INCH = 7.75
  const FOOT = 8.40
  const SEASONED_MUSHROOMS = 0.45
  const GREEN_PEPPERS = 0.15
  const RED_ONIONS = 0.30
  const PLAIN = 0.00
// initialize variables
  let tax = 0
  let finalOrder = "Your final order: "
  let price = 0
  let priceTaxed = 0
	// get the size of bubble tea the user wants 
	let sizePhilly = document.getElementById('sizePhilly');
	let phillySize = sizePhilly.options[sizePhilly.selectedIndex].value;

	if (phillySize == "sixInch") {
		price = price + SIX_INCH;
    finalOrder = finalOrder + "<br><b>6-Inch price $" + 
 SIX_INCH.toFixed(2) + "</b>"
	}
else if (phillySize == "tenInch") {
		price = price + TEN_INCH;
    finalOrder = finalOrder + "<br><b>10-Inch price $" + 
 TEN_INCH.toFixed(2) + "</b>"
	}
  else if(phillySize == "foot"){		
		price = price + FOOT
    finalOrder = finalOrder + "<br><b>Foot-long(12-Inch) price $" + 
 FOOT.toFixed(2) + "</b>"
	}
      // code for add-ins
  let smChosen = document.getElementById("SEASONED_MUSHROOMS").checked;  
  if (smChosen){  
    price = price + SEASONED_MUSHROOMS;
    finalOrder = finalOrder + "<br> Seasoned Mushrooms added";
  }  
  
  let gpChosen = document.getElementById("GREEN_PEPPERS").checked;  
  if (gpChosen){
    price = price + GREEN_PEPPERS;
    finalOrder = finalOrder + "<br> Green Peppers added";
  }  

  let roChosen = document.getElementById("RED_ONIONS").checked;  
  if (roChosen){  
    price = price + RED_ONIONS;
    finalOrder = finalOrder + "<br> Red Onions added";
  }  

  let pChosen = document.getElementById("PLAIN").checked;  
  if (pChosen){  
    price = price + PLAIN;
    finalOrder = finalOrder + "<br> Regular boba added";
  }  
  tax = price * HST;
  priceTaxed = price + tax;

  
  // display the costs of the order
  // display order summary
  document.getElementById('finalOrder').innerHTML = "<h3>" + finalOrder +  "</h3>";
  // display subtotal price of order
  document.getElementById('displayTotal').innerHTML = "<p>The order's subtotal is $" + price.toFixed(2) + "</p>";
  // display tax price of order
  document.getElementById('displayTax').innerHTML = "<p>Your order's tax will be $" + tax.toFixed(2) + "</p>";
  // display total price of order
  document.getElementById('displayPriceTaxed').innerHTML = "<p>The full order will cost $" + priceTaxed.toFixed(2) + "</p>";
}