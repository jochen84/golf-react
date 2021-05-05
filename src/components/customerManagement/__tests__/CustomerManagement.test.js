import { getByTestId, render, renderWithRouter } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import customers from '../../../fakedb/customers';
import CustomerManagement from '../CustomerManagement';

test('the customer data is correct ', () => {
    //render a react commponent to a DOM 
   // expect(modals).toMatchSnapshot();
   //const div = document.createElement('div');
  // ReactDOM.render(<Modals></Modals> ,div)
  const { getByTestId } = render(<CustomerManagement />, ['/']);
  expect(true).toBeTruthy();
  expect(customers).toHaveLength(20);
  
}); 

for (let index = 0; index < 6; index++) {
  test(`customer$(index) should have properities (picture, firstname, lastname, golfId, membertype)`, () => {
        expect(customers[index]).toHaveProperty('picture');
        expect(customers[index]).toHaveProperty('firstname');
        expect(customers[index]).toHaveProperty('lastname');
        expect(customers[index]).toHaveProperty('golfId');
        expect(customers[index]).toHaveProperty('membertype');
    })
  }