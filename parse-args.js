const process = require('process');

console.log('argv', process.argv);

const parseArgs = (argv) => {
  let itemCostInput = null;
  let paymentInput = null;

  // in terminal:::
  // > node index.js --item-cost {cost in $} --payment {cost in $}

  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i];

    if (arg === '--item-cost') {
      itemCostInput = process.argv[i + 1];
      ++i;
    } else if (arg === '--payment') {
      paymentInput = process.argv[i + 1];
      ++i;
    }
  }

  if (itemCostInput == null) {
    console.error('--item-cost must be provided');
    process.exit(1);
  }

  const itemCost = Number(itemCostInput);
  if (isNaN(itemCost)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }

  if (paymentInput == null) {
    console.error('--item-cost must be provided');
    process.exit(1);
  }

  const payment = Number(paymentInput);
  if (isNaN(payment)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }
  return {
    itemCost,
    payment,
  }
}

module.exports = {
  parseArgs,
}
