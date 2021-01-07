import React, { PureComponent } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Home extends PureComponent {
    render() {
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
}

export default Home;
