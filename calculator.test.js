const cal = require('./calculator');

describe('add operation', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(cal.add(1, 2)).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        expect(cal.add(5, 5)).toBe(10);
    })
});

describe('substract operation', () => {
    test('substracts 5 - 5 to equal 0', () => {
        expect(cal.add(5, -5)).toBe(0);
    });

    test('adds 10 - 20 to equal -10', () => {
        expect(cal.add(10, -20)).toBe(-10);
    });
});
