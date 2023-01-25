const { describe, it } = require('@jest/globals');
const { parseArgs } = require('./parse-args.js');

describe('parseArgs', () => {
    it('provides an itemCost and payment', () => {
        const args = [
            '--item-cost',
            '7',
            '--payment',
            '8.5'
        ];
        const {itemCost, payment} = parseArgs(args);
        expect(itemCost).toBe(700);
        expect(payment).toBe(850);
    });
});
