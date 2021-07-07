import React from 'react';
import Header from '../components/header/Header.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Header
            title={'amazing recipes'}
            children={
                <Link
                    to={'/recipes'}
                    children={'search recipes'}
                    className={'text-uppercase btn btn-secondary btn-lg mt-3'}
                />
            }
        />
    );
}

export default React.memo(Home);
