import React from 'react';

const SelectRecipes = ({ select }) => {
    return (
        <option value={select}/>
    );
}

export default React.memo(SelectRecipes);
