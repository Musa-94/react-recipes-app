import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../utils/restAPI';

const Recipe = props => {
    const imgStyle = {
        maxHeight: '30rem',
    };

    const { id } = props.match.params;
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        id && api.sendGetRequestById(id)
        .then(res => setRecipe(res.recipe));
        return () => {
            setRecipe({});
        };
    }, [id])

    useEffect(() => {
        !Object.values(recipe).length ?
        setLoading(true) :
        setLoading(false);
    }, [recipe])

    const {
        title,
        ingredients = [],
        image_url: imageUrl,
        source_url: sourceUrl,
        publisher,
        publisher_url,
    } = recipe;

    return (
        loading ?
            <div className={'container'}>
                <div className='col mx-auto col-md-6 my-3'>
                    <h2 children={'loading recipes...'}
                        className={'text-uppercase text-orange text-center'}
                    />
                </div>
            </div> :
            <div className={'container my-5'}>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-6 my 3'>
                        <Link to={'/recipes'}
                              children={'back to recipes list'}
                              className={'btn btn-warning mb-5 text-capitalize'}
                        />
                        <img src={imageUrl}
                             alt={'recipe'}
                             style={imgStyle}
                             className={'d-block w-100'}
                        />
                    </div>
                    {/* info */}
                    <div className='col-10 mx-auto col-md-6 my-3'>
                        <h6 children={title}
                            className={'text-uppercase'}
                        />
                        <h6 children={`provided by ${publisher}`}
                            className={'text-warning text-capitalize text-slanted'}
                        />
                        <a rel={'noopener noreferrer'}
                           href={publisher_url}
                           target={'_blank'}
                           children={'publisher webpage'}
                           className={'btn btn-primary text-capitalize mt-2'}
                        />
                        <a rel={'noopener noreferrer'}
                           href={sourceUrl}
                           target={'_blank'}
                           children={'recipe url'}
                           className={'btn btn-success text-capitalize mx-2 mt-2'}
                        />
                        <ul className="list-group mt-4">
                            <h2 className={'mt-3 mb-4'}
                                children={'Ingredients'}
                            />
                            {ingredients.length ?
                                ingredients.map((ingredient, index) =>
                                    <li key={index}
                                        children={ingredient}
                                        className={'list-group-item text-slanted'}
                                    />
                                ): null
                            }
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default React.memo(Recipe);
