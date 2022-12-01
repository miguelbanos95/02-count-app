import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Testing 05-Funciones', () => {

    test('The function should return an object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
    
        expect( testUser ).toEqual( user );
    });


    test('The function should return an new object', () => { 
        const name = 'Miguel';
        const user = getUsuarioActivo( name );

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        });



     })


});