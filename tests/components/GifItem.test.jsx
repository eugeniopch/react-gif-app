import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 

    const titulo = 'Friends';
    const url = 'http://google.com/';

    test('Debe matchear con el snapshot', () => { 

        const { container } = render(<GifItem title={ titulo } url={ url } />);
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifItem title={ titulo } url={ url } />);
        //screen.debug();
        
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( titulo );

        //Manera más eficiente de hacer lo anterior:

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( titulo );

    })

    test('Debe mostrar el título en el componente', () => { 

        render(<GifItem title={ titulo } url={ url } />);
        expect( screen.getByText( titulo ) ).toBeTruthy();

     })


 })