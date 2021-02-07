import React from 'react';
import Home from '../Home';

describe('Home snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Home/>);

        expect(component).toMatchSnapshot();
    });
});