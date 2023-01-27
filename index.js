const process = require('process');
const { parseArgs } = require('./parse-args.js');

// console.log('argv', process.argv);

const { itemCost, payment } = parseArgs(process.argv);

/** 
 * vendingMachine is a function that calculates the change due 
 * from the purchase of an item, and accepts 2 arguments, the
 * cost of the item and the amount of money given.
 * 
 * when the function is called, it will return a string of the
 * change due in quarters, dimes, nickels, and pennies, with each
 * denomination returned on a new line.
 * 
 * if the payment amount is insufficient, the function will return
 * an error and exit the program. If the item cost or payment
 * amount is not a number, the function will return an error and exit
 * the program
 * 
 * @param {number} itemCost - cost of item in dollars
 * @param {number} payment - amount of money given in dollars
 * @returns {string} - strings of change due for each denomination
 */

const vendingMachine = (itemCost, payment) => {
  // remove decimals from item and money for easier calculation
  let change = payment * 100 - itemCost * 100;
  // create object to hold coin amounts
  let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

  // check for valid input
  if (isNaN(itemCost)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }

  if (itemCost == null) {
    console.error('--item-cost must be entered');
    process.exit(1);
  }

  if (isNaN(payment)) {
    console.log('--payment must be a number');
    process.exit(1);
  }

  if (payment == null) {
    console.error('--payment must be entered');
    process.exit(1);
  }

  // check if payment is sufficient
  if (itemCost > payment) {
    console.log('--payment amount is insufficient for item');
    process.exit(1);
  }
  
  // total the amount of change due
  console.log('');
  console.log('Total change dispensed: ');
  console.log(` --${change.toString()} cents`);
  console.log('');
  console.log('Denominations: ');

  // execute the function as long as change needs to be dispensed
  while (change > 0) {

    // if change is greater than or equal to 25 cents, return quarters
    change >= 25
      ? (coins.quarters++,
        (change -= 25))
      : // if change is over 10 cents and quarters have been dispensed return dimes
      change >= 10 && change < 25
      ? (coins.dimes++, (change -= 10) 
      )
      : // ...nickels
      change >= 5 && change < 10
      ? (coins.nickels++,
        (change -= 5)
        )
      : // and same with pennies
      change >= 1 && change < 5
      ? (coins.pennies++,
        (change -= 1)
        )
      : null;
  }

  // return the amount of each coin dispensed
  console.log(` --Quarters: ${coins.quarters.toString()}`);
  console.log(` --Dimes: ${coins.dimes.toString()}`);
  console.log(` --Nickels: ${coins.nickels.toString()}`);
  console.log(` --Pennies: ${coins.pennies.toString()}`);
  return ''; 
};
console.log(vendingMachine(itemCost, payment));
