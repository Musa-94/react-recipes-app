import React from 'react';
import Navbar from '../Navbar';

describe('Navbar snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Navbar/>);

        expect(component).toMatchSnapshot();
    })
})