import { describe, it, expect } from '@jest/globals';
import { vendingMachine } from './index.js';

describe('index.js', () => {
  it('--item-cost of 3.29 and --payment of 5 returns 171 cents as change, returned as 6 quarters, 2 dimes, and a penny', () => {
    expect(vendingMachine(3.29, 5)).toBe(`
            {''} \nTotal change dispensed: \n  --171 cents \n{''} \nDenominations: \n  --Quarters: 6 \n  --Dimes: 2 \n  --Nickels: 0 \n  --Pennies: 1
        `);
  });
});
