import React from 'react';
import ReactDOM from 'react-dom';
import Players from '../Players';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Players/>, div)
});

it('give Player component 4, shows 4 as active players', () => {
    const { getByTestId} = render(<Players activePlayers={4}/>)
    const showNumberElement = getByTestId('activePlayers');

    expect(showNumberElement.textContent).toBe('4 st')
});

it('edit prop = TRUE, component contains text "Editera"', () => {
    const { getByTestId} = render(<Players edit={true}/>)
    const component = getByTestId('playersComponent')

    expect(component.textContent).toContain('Editera');
});

it('edit prop = FALSE, component !contains text "Editera"', () => {
    const { getByTestId} = render(<Players edit={false}/>)
    const component = getByTestId('playersComponent')

    expect(component.textContent).not.toContain('Editera');
});