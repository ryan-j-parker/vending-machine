const { describe, it, expect } = require('@jest/globals');
const { parseArgs } = require('./parse-args.js');

describe('parseArgs', () => {
    it('provides an itemCost and payment', () => {
        const args = [
            '--item-cost',
            7.19,
            '--payment',
            9.5
        ];
        const {itemCost, payment} = parseArgs(args);
        expect(itemCost).toBe(719);
        expect(payment).toBe(950);
    });
});
