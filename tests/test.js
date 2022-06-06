const assert = require('chai').assert;
const validations = require('../public/validations/signupVal');

describe('Testing validations', () => {
    it('should return as a function', () => {
        assert.isFunction(validations, () => {});
    });
 
});