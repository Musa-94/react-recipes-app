import React from 'react';
import SingleRecipe from '../SingleRecipe';

const props = {
    title: 'title',
    recipeId: '123',
    imageUrl: 'imageUrl',
    sourceUrl: 'sourceUrl',
    publisher: 'publisher',
};

describe('SingleRecipe snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<SingleRecipe {...props}/>);

        expect(component).toMatchSnapshot();
    });
});