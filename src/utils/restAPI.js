export const sendGetRequestById = id => {
    return fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then(res => res.json())
        .catch(err => `Error on sendGetRequest ${err}`)
}

export const sendGetRequestByRecipe = recipes => {
    return fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipes.toLowerCase()}`)
        .then(res => res.json())
        .catch(err => `Error on sendGetRequest ${err}`)
}
