import React from 'react';
import Sidebar from '../Sidebar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


test ("render the sidebar", () => {
    const { getByTestId } = render(
         <Sidebar />, ['/']
   );
   const overviewLink = getByTestId('overview');
   overviewLink.click();

  // expect(history.location.pathname).toEquals('/overview');
   /*  const listEl = getByTestId('sidebarId');
    expect(listEl.textContent).toBe('Översikt'); */
})

test('renders the sidebar ul', () => {
    const { getByTestId } = render(
        <Sidebar />, ['/']
  );
   
    const listEl = getByTestId('sidebarId');
    expect(listEl).toBeInTheDocument();
    
    const list1 = listEl.getElementsByTagName('li')[0];
    expect(list1.textContent).toBe('Översikt');

    const list2 = listEl.getElementsByTagName('li')[1];
    expect(list2.textContent).toBe('Startschema');

    const list3 = listEl.getElementsByTagName('li')[2];
    expect(list3.textContent).toBe('Meddelanden');

    const list4 = listEl.getElementsByTagName('li')[3];
    expect(list4.textContent).toBe('Support');

    const list5 = listEl.getElementsByTagName('li')[4];
    expect(list5.textContent).toBe('Login');

    const list6 = listEl.getElementsByTagName('li')[5];
    expect(list6.textContent).toBe('Sign Up');
  });