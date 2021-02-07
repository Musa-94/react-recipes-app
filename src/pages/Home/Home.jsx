import React from 'react';
import Header from '../../components/Header/Header.jsx';

const Home = () => {
    return (
        <Header
            title={'amazing recipes'}
            children={
                <a
                    href={'#/recipes'}
                    children={'search recipes'}
                    className={'text-uppercase btn btn-secondary btn-lg mt-3'}
                />
            }
        />
    );
}

export default React.memo(Home);
