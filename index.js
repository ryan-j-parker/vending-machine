const process = require('process');
const { parseArgs } = require('util');

// const { itemCost, payment } = parseArgs();

// console.log(JSON.stringify(parseInt(itemCost)), payment);

const vendingMachine = (itemCost, payment) => {
  // remove decimals from item and money for easier calculation
  let change = payment * 100 - itemCost * 100;
  // create object to hold coin amounts
  let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

  // const itemCost = Number(itemCost) * 100;
  if (isNaN(itemCost)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }

  if (itemCost == null) {
    console.error('--item-cost must be entered');
    process.exit(1);
  }

  // const payment = Number(payment) * 100;
  if (isNaN(payment)) {
    console.log('--payment must be a number');
    process.exit(1);
  }

  if (payment == null) {
    console.error('--payment must be entered');
    process.exit(1);
  }
  
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
  // console.log('Change dispensed: ');
  console.log(` --Quarters: ${coins.quarters.toString()}`);
  console.log(` --Dimes: ${coins.dimes.toString()}`);
  console.log(` --Nickels: ${coins.nickels.toString()}`);
  console.log(` --Pennies: ${coins.pennies.toString()}`);
  return ''; 
};
console.log(vendingMachine(2.17, 4.0));
// vendingMachine(itemCost, payment);
