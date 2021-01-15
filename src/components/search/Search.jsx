import React from 'react';

import SelectRecipes from './components/SelectRecipes.jsx';

const Search = props => {
    const {
        search,
        isError,
        selects,
        handleSubmit,
        handleChange,
    } = props;

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
                    <h1 className={'text-slanted text-capitalize'}>
                        search recipes with{' '}
                        <strong className={'text-orange'}> Food2Fork </strong>
                    </h1>
                    <form className='mt-4'>
                        <label htmlFor={'search'} className={'text-capitalize'}>
                            types recipes separated by comma
                        </label>
                        <div className={'input-group container col-sm'}>
                            <input type={'text'}
                                   name={'search'}
                                   list={'select'}
                                   value={search}
                                   required={true}
                                   onChange={handleChange}
                                   className={'col-sm-10 custom-select custom-select-sm'}
                                   placeholder={'chicken, onion, carrot...'}
                            />
                            <div className='input-group-append'>
                                <button type={'submit'}
                                        onClick={handleSubmit}
                                        className={'input-group-text bg-primary text-white'}
                                >
                                    <i className={'fas fa-search'} />
                                </button>
                            </div>
                            <datalist id={'select'}>
                                { selects.map((select, index) =>
                                    <SelectRecipes
                                        key={index}
                                        select={select}
                                    />
                                )}
                            </datalist>
                        </div>
                        {isError ?
                            <div className={'col-sm'}>
                                <span children={'this recipe was not found'}
                                      className={'text-danger text-capitalize'}
                                />
                            </div> : null
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;