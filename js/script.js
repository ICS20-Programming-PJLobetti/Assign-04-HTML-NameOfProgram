// Copyright (c) 2022 PJ Lobetti All rights reserved
//
// Created by: PJ Lobetti
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the order
 */
function orderPhilly() {
  // initialize variables (tax, subtotal, and total) + constant (taxRate)
  const taxRate = 0.13;
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  // variable to summarize the order
  let orderSummary = "Order: "
  // assign values to constants (cheese steak sizes)
  const sixInch = 6.50
  const tenInch = 7.75
  // assign values to constants (arizona or no arizona)
  const arizona = 1.50
  // assign values to constants (topping prices)
  const greenPepperPrice = 0.15
  const seasonedMushroomsPrice = 1.25
  const redOnionsPrice = 0.35
  const plainPrice = 0.00
  
	// get the length CheeseSteak of the user wants using select drop down menu
	let lengthCheeseSteak = document.getElementById('lengthCheeseSteak');
	let cheeseSteakLength = lengthCheeseSteak.options[lengthCheeseSteak.selectedIndex].value;
  
  	if (lengthCheeseSteak == "sixInch") {
    // if the cheese steak is a six inch, add the price of the six inch to the subtotal and update order summary
		subtotal = subtotal + sixInch;
    orderSummary = orderSummary + "Six Inch Cheese Steak $" + sixInch.toFixed(2) + ""
	}
	else if (lengthCheeseSteak == "tenInch") {
    // if the cheese steak is a ten inch, add the price of the ten inch to the subtotal and update order summary
		subtotal = subtotal + tenInch;
    orderSummary = orderSummary + "Ten Inch Cheese Steak $" + tenInch.toFixed(2) + ""
	}

  // checking for which toppings are selected
  let peppersChecked = document.getElementById("greenPeppers").checked;  
  if (peppersChecked){  
    // if green peppers is checked, add green peppers to price
    subtotal = subtotal + greenPepperPrice;
    orderSummary = orderSummary + "  - Green Peppers";
  }  
  let mushroomsChecked = document.getElementById("seasonedMushrooms").checked;  
  if (mushroomsChecked){
    // if mushrooms is checked, add mushrooms to price
    subtotal = subtotal + seasonedMushroomsPrice;
    orderSummary = orderSummary + "  - Seasoned Mushrooms";
  }  
  let onionsChecked = document.getElementById("redOnions").checked;  
  if (onionsChecked){  
    // if lettuce is checked, add lettuce to price
    subtotal = subtotal + redOnionsPrice;
    orderSummary = orderSummary + "  - Red Onions";
  }  

  let plainChecked = document.getElementById("Plain").checked;  
  if (plainChecked){  
    // if cheese is checked, add cheese to price
    subtotal = subtotal + plainPrice;
    orderSummary = orderSummary + " - Plain";
  }  
 // choice between no arizona or an arizona using select drop down menu
  let arizonaDrink = document.getElementById('arizona');
	let arizonaChoice = arizona.options[arizona.selectedIndex].value;

  if (arizonaChoice == "arizona") {
    // if they select that they want an arizona then adda to total
		subtotal = subtotal + arizona;
     orderSummary = orderSummary + " Arizona $" + arizona.toFixed(2) 
  }
  else{
      // if a drink size is not selected, add nothing to subtotal and update order summary
      orderSummary = orderSummary + "<br><b>No Drink</b>"
  }

  // calculate different costs (subtotal, tax, total)
  tax = subtotal * taxRate;
  total = subtotal + tax;

  // display the costs of the order
  // display order summary
  document.getElementById('order-summary').innerHTML = "<h4>" + orderSummary + "</h4>";
  // display subtotal price of order
  document.getElementById('display-subtotal').innerHTML = "<p>The order's subtotal is $" + subtotal.toFixed(2) + ".</p>";
  // display tax price of order
  document.getElementById('display-tax').innerHTML = "<p>The order's tax is $" + tax.toFixed(2) + ".</p>";
  // display total price of order
  document.getElementById('display-total').innerHTML = "<p>The order will cost $" + total.toFixed(2) + ".</p>";
}
