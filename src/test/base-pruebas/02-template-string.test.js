import { getSaludo } from "../../base-pruebas/02-template-string";

describe('getSaludo', () => {

    test('of your name', () => {
        const name = 'Miguel Baños'
        expect(getSaludo(name)).toBe(`Hola ${name}`)
    });
    test('of undefined', () => {
        expect(getSaludo()).toBeUndefined()
    });
    test('of a number', () => {
        expect(getSaludo(0)).toBe('Hola 0')
    })
})