import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleRecipe = props => {
    const {
        title,
        recipeId,
        imageUrl,
        sourceUrl,
        publisher,
    } = props;
    const cardStyle = {
        height: '100%',
    };
    const imgStyle = {
        height: '14rem',
    };

    return (
        <div className={'col-1m mx-auto col-md-6 col-lg-4 my-3'}>
            <div className={'card'} style={cardStyle}>
                <img id={recipeId}
                     src={imageUrl}
                     alt={'img'}
                     style={imgStyle}
                     className={'img-card-top'}
                />
                <div className={'card-body text-capitalize'}>
                    <h6 children={title}/>
                    <h6 className={'text-warning text-slanted'}
                        children={`provided by ${publisher}`}
                    />
                </div>
                <div className="card-footer">
                    <Link to={`/recipes/${recipeId}`}
                          children={'details'}
                          className={'btn btn-primary text-capitalize'}
                    />
                    <a rel={'noopener noreferrer'}
                       href={sourceUrl}
                       target={'_blank'}
                       children={'recipe url'}
                       className={'btn btn-success mx-2 text-capitalize'}
                    />
                </div>
            </div>
        </div>
    );
}

SingleRecipe.propTypes = {
    title: PropTypes.string.isRequired,
    recipeId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
}

export default React.memo(SingleRecipe);
