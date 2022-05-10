// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
    // initialize constants
  const HST = 0.13
  const SIX_INCH = 6.50
  const TEN_INCH = 7.75
  const GREEN_PEPPERS = 0.15
  const SEASONED_MUSHROOMS = 0.45
  const RED_ONIONS = 0.10
  const PLAIN = 0.00
  const ARIZONA 1.50
  	// initialize variables
	let cost = ""
  let tax = 0
  let total = 0 
  let subtotal = 0
	
	// get age and day of the week
	let sizeCheeseSteak = document.getElementById('size').value)	
	let topping = document.getElementById('toppings');
	let size = select.options[select.selectedIndex].value;
  let topping = select.options[select.selectedIndex].value;
  let drink = 

  // different instances
	if (sizeCheeseSteak == SIX_INCH) {
		cost = (SIX_INCH * HST) + SIX_INCH
	}
	else if (sizeCheeseSteak == SIX_INCH) && (topping == GREEN_PEPPERS)) {
		cost = (SIX_INCH + GREEN_PEPPERS)* HST) + SIX_INCH + GREEN_PEPPERS 
	}
	else if (sizeCheeseSteak == SIX_INCH) && (topping == SEASONED_MUSHROOMS)) {
		cost = (SIX_INCH + SEASONED_MUSHROOMS)* HST) + SIX_INCH + SEASONED_MUSHROOMS 
	}
  else if (sizeCheeseSteak == SIX_INCH) && (topping == RED_ONIONS)) {
		cost = (SIX_INCH + RED_ONIONS)* HST) + SIX_INCH + RED_ONIONS 
	}
  else if (sizeCheeseSteak == SIX_INCH) && (topping == PLAIN)) {
		cost = (SIX_INCH + PLAIN)* HST) + SIX_INCH + PLAIN 
	}
  else if (sizeCheeseSteak == SIX_INCH) && (topping == PLAIN)) {
		cost = (SIX_INCH + PLAIN)* HST) + SIX_INCH + PLAIN 
	}
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost.toFixed(2)
}