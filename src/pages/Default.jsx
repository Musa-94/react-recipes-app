import React, { PureComponent } from 'react';
import Header from '../components/Header.jsx';
import { Link } from 'react-router-dom';

class Default extends PureComponent {
    render() {
        return(
            <Header
                title={'404'}
                children={
                    <>
                        <h2 className={'text-light text-uppercase'}>
                            You are in the wrong place
                        </h2>
                        <Link to={'/'}
                              children={'Return Home'}
                              className={'text-uppercase btn btn-secondary btn-lg mt-3'}
                        />
                    </>
                }
                styleClass={'default-hero'}
            />
        )
    }
}

export default Default;
