import React from 'react';

const SingleRecipe = () => {
    alert('SingleRecipe')
    return (
        <div>
            <h1> Hello Single Recipes Page </h1>
        </div>
    );
}

export default React.memo(SingleRecipe);
