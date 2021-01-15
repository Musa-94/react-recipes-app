import React, { useCallback, useState, useEffect } from 'react';
import Search from '../components/Search.jsx';
import RecipesList from '../components/RecipesList.jsx';
import { recipeData } from '../data/tempList';
import * as api from '../utils/restAPI';

const Recipes = () => {
    const { recipes: recipesPizza } = recipeData[0];
    const [recipes, setRecipes] = useState(recipesPizza);
    const [search, setSearch] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsError(false);
        }, 3500);
    }, [isError])

    const handleChange = useCallback(event => {
        const { value } = event.target;
        setSearch(value);
    }, [search]);

    const handleSubmit = useCallback(event => {
        event.preventDefault();

        api.sendGetRequestByRecipe(search)
        .then(res => res?.recipes ?
            setRecipes(res.recipes) :
            setIsError(true)
        );

        setSearch('');
    }, [search]);

    return (
        <>
            <Search
                search={search}
                isError={isError}
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
