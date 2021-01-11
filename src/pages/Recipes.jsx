import React, { useCallback, useState } from 'react';
import Search from '../components/Search.jsx';
import RecipesList from '../components/RecipesList.jsx';
import { recipeData } from '../data/tempList';

const Recipes = () => {
    const { recipes: recipesPizza } = recipeData[0];
    const [recipes, setRecipes] = useState(recipesPizza);
    const [search, setSearch] = useState('');

    const handleChange = useCallback(event => {
        const { value } = event.target;
        setSearch(value);
    }, [setSearch]);
    const handleSubmit = useCallback(event => {
        event.preventDefault();
    }, []);

    return (
        <>
            <Search
                search={search}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <RecipesList
                recipes={recipes}
            />
        </>
    );
}

export default React.memo(Recipes);
