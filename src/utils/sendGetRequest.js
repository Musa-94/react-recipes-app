export const sendGetRequest = id => {
    return fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then(res => res.json())
        .catch(err => `Error on sendGetRequest ${err}`)
}
