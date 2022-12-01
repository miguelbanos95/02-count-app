import { average, palindrome } from '../../base-pruebas/12-palindrome-average'

describe('palindrome', () => {

    test('of miguel baños', () => {

        const result = palindrome('miguel baños');
        expect(result).toBe('soñab leugim')
    })
    test('of an empty string', () => {
        const result = palindrome('');
        expect(result).toBe('')
    })
    test('of undefined', () => {
        const result = palindrome();
        expect(result).toBeUndefined()
    })
})

describe('average', () => {
    test('of one value is the value itself', () => {
        const result = average([1]);
        expect(result).toBe(1)
    })
    test('of many is calculate correctly', () => {
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
    })
    test('of negative values is correctly', () => {
        expect(average([-1, -2, -3, -4])).toBe(-2.5)
    })
    test('of a empty array is zero', () => { 
        expect(average([])).toBe(0)
    })
    // test('of undefined', () => { 
    //     expect(average()).toBeUndefined()
    // })
  
})