import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Friends';

    test('Debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category} /> );
        screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));

    })

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Gif de Friends',
                url: 'https://localhost/friends'
            },
            {
                id: '123',
                title: 'Gif de Friends #2',
                url: 'https://localhost/friends#2'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

     })

 })