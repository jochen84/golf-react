import React from 'react';
import ReactDOM from 'react-dom';
import Messages from '../Messages';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Messages/>, div)
});

it('give Messages component 4, shows 4 new messages', () => {
    const { getByTestId} = render(<Messages messages={4}/>)
    const showNumberElement = getByTestId('newMessages');

    expect(showNumberElement.textContent).toBe('4 st')
});

it('edit prop = TRUE, component contains text "Editera"', () => {
    const { getByTestId} = render(<Messages edit={true}/>)
    const component = getByTestId('messagesComponent')

    expect(component.textContent).toContain('Editera');
});

it('edit prop = FALSE, component !contains text "Editera"', () => {
    const { getByTestId} = render(<Messages edit={false}/>)
    const component = getByTestId('messagesComponent')

    expect(component.textContent).not.toContain('Editera');
});