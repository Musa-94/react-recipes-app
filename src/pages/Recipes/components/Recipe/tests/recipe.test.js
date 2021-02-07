import React from 'react';
import Recipe from '../Recipe';

const props = {
    match: {
        params: {
            id: 123
        }
    }
}

describe('Recipe snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Recipe {...props}/>);

        expect(component).toMatchSnapshot();
    });
});