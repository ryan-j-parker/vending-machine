const process = require('process');
const { parseArgs } = require('util');

console.log('argv', process.argv);
const parseArgs = () => {
  let itemCostInput = null;
  let paymentInput = null;

  // terminal:::
  // node index.js --item-cost 2 --payment 3

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

  const itemCost = Number(itemCostInput) * 100;
  if (isNaN(itemCost)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }

  if (paymentInput == null) {
    console.error('--item-cost must be provided');
    process.exit(1);
  }

  const payment = Number(paymentInput) * 100;
  if (isNaN(payment)) {
    console.log('--item-cost must be a number');
    process.exit(1);
  }
  return {
    itemCost,
    payment,
  }
}

const { itemCost, payment } = parseArgs();

console.log(JSON.stringify(parseInt(itemCostInput)), paymentInput);

module.exports = {
  parseArgs,
}
