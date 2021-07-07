import React from 'react';
import SingleRecipe from '../../pages/SingleRecipe.jsx';

const RecipesList = props => {
    const { recipes } = props;

    return (
        <div className={'container py-5'}>
            {/* title */}
            <div>
                <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                    <h1 className={'text-slanted'}> recipe list </h1>
                </div>
            </div>
            {/* end of title */}
            <div className={'row'}>
                {recipes.map((recipe, index) =>
                    <SingleRecipe
                        key={index}
                        title={recipe.title}
                        recipeId={recipe.recipe_id}
                        imageUrl={recipe.image_url}
                        sourceUrl={recipe.source_url}
                        publisher={recipe.publisher}
                    />
                )}
            </div>
        </div>
    );
}

export default React.memo(RecipesList);
