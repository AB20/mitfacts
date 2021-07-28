var utils  = require('course-utilities');
var mit = utils.load('./mit.js', 'mit');
var action = require('./greet-unit-testing-mit.js');

describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascot');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('Silver Gray');    
    });

    test('Founded range', () => {
        expect(mit.founded).toBeLessThanOrEqual(1875);
        expect(mit.founded).toBeGreaterThanOrEqual(1850);    
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('Mens');
    });
});

//my test for Unit Testing Activity
describe('test greet()', () => {
    it('null test', () => {
        expect(action.greet()).toBe('Hello there!')
    })

    it('LOUD test', () => {
        expect(action.greet('JOSE')).toBe('HELLO JOSE!')
    })

    it('string test', () => {
        expect(action.greet('Elizabeth')).toBe('Hello, Elizabeth')
    })

    it('two names', () => {
        expect(action.greet(['Jose','Pep'])).toBe('Hello, Jose, Pep')
    })

    it('more than two names', () => {
        expect(action.greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane')
    })
})