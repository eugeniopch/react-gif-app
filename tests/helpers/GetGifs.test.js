import { string } from 'prop-types';
import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs()', () => { 

    test('Debe retornar un array de gifs', async() => { 

        const gifs = await getGifs( 'Friends' );
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

     })

 })