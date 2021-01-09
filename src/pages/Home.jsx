import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Home extends PureComponent {
    render() {
        return (
            <Header
                title={'amazing recipes'}
                children={
                    <Link
                        to={'/recipes'}
                        className={'text-uppercase btn btn-secondary btn-lg mt-3'}
                        children={'search recipes'}
                    />
                }
            />
        );
    }
}

Home.propTypes = {};

export default Home;
