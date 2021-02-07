import React from 'react';
import logo from '../../images/webLogo.png';

function Navbar() {
    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <a href='/' className={'navbar-brand'}>
                <img src={logo}
                     alt={'logo'}
                />
            </a>
            <div className={'collapse navbar-collapse show ml-sm-5'}>
                <ul className={'navbar-nav'}>
                    <li className={'navbar-item'}>
                        <a className={'nav-link'} href={'#/'}>
                            Home
                        </a>
                    </li>
                    <li className={'navbar-item'}>
                        <a className={'nav-link'} href={'#/recipes'}>
                            Recipes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
