import React from 'react';
import ReactDOM from 'react-dom';
import Bookings from '../Bookings';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bookings/>, div)
});

it('give Bookings component 4, shows 4 as active Bookings', () => {
    const { getByTestId} = render(<Bookings times={4}/>)
    const showNumberElement = getByTestId('activeBookings');

    expect(showNumberElement.textContent).toBe('4 st')
});

it('edit prop = TRUE, component contains text "Editera"', () => {
    const { getByTestId} = render(<Bookings times={4} edit={true}/>)
    const component = getByTestId('bookingsComponent')

    expect(component.textContent).toContain('Editera');
});

it('edit prop = FALSE, component !contains text "Editera"', () => {
    const { getByTestId} = render(<Bookings times={4} edit={false}/>)
    const component = getByTestId('bookingsComponent')

    expect(component.textContent).not.toContain('Editera');
});
