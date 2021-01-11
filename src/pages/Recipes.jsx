import React from 'react';
import Search from '../components/Search.jsx';
import RecipesList from '../components/RecipesList.jsx';

const Recipes = () => {
    return (
        <>
            <Search/>
            <RecipesList />
        </>
    );
}

export default React.memo(Recipes);
