import React, { PureComponent } from 'react';
import Search from '../components/Search.jsx';
import RecipesList from '../components/RecipesList.jsx';

class Recipes extends PureComponent {
    render() {
        return (
            <>
                <Search/>
                <RecipesList />
            </>
        );
    }
}

export default Recipes;
