import React from 'react';
import Recipes from '../Recipes';

describe('Recipes snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Recipes/>);

        expect(component).toMatchSnapshot();
    });
});