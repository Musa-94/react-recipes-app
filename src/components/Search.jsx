import React from 'react';

const Search = props => {
    const {
        search,
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
                        <div className={'input-group'}>
                            <input type={'text'}
                                   name={'search'}
                                   value={search}
                                   onChange={handleChange}
                                   className={'form-control'}
                                   placeholder={'chicken, onion, carrots'}
                            />
                            <div className='input-group-append'>
                                <button type={'submit'}
                                        onClick={handleSubmit}
                                        className={'input-group-text bg-primary text-white'}
                                >
                                    <i className={'fas fa-search'} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;
