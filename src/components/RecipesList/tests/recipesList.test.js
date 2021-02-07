import React from 'react';
import RecipesList from '../RecipesList.jsx';

const props = {
    recipes: [
        {
            image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
            publisher: "101 Cookbooks",
            publisher_url: "http://www.101cookbooks.com",
            recipe_id: "47746",
            social_rank: 100,
            source_url: "http://www.101cookbooks.com/archives/001199.html",
            title: "Best Pizza Dough Ever",
        }
    ],
}

describe('RecipesList snapshot', () => {
    it('should correct render', () => {
        const component = renderer(<RecipesList {...props}/>);

        expect(component).toMatchSnapshot()
    })
})