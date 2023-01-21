const vendingMachine = (item, money) => {
    // remove decimals from item and money for calculation
  let change = money * 100 - item * 100;
    // create object to hold coin amounts
  let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

  while (change > 0) {
    // original if-statement syntax

    // if (change >= 25) {
    //   coins.quarter++;
    //   change -= 25;
    // } else if (change >= 10 && change < 25) {
    //   coins.dime++;
    //   change -= 10;
    // } else if (change >= 5 && change < 10) {
    //   coins.nickel++;
    //   change -= 5;
    // } else if (change >= 1 && change < 5)) {
    //   coins.penny++;
    //   change -= 1;
    // }

    // if change is greater than or equal to 25 cents, return quarters
    change >= 25 ? (coins.quarters++, change -= 25) : null;
    // if change is >= to 10 cents and quarters have been dispensed return dimes
    change >= 10 && change < 25 ? (coins.dimes++, change -= 10) : null;
    change >= 5 && change < 10 ? (coins.nickels++, change -= 5) : null;
    change >= 1 && change < 5 ? (coins.pennies++, change -= 1) : null;
  }
  // still need to return each coin amount on a new line
  return coins;
};
console.log(vendingMachine(2.23, 19.25));
