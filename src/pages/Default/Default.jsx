import React from 'react';
import Header from '../../components/Header/Header.jsx';

const Default = () => {
    return(
        <Header
            title={'404'}
            styleClass={'default-hero'}
        >
            <h2 children={'You are in the wrong place'}
                className={'text-light text-uppercase'}
            />
            <a href={'#/'}
               children={'Return Home'}
               className={'text-uppercase btn btn-secondary btn-lg mt-3'}
            />
        </Header>
    );
}

export default React.memo(Default);
