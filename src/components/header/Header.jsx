import React from 'react';

function Header({ children, title, styleClass }) {
    return (
        <header>
            <div className='container-fluid'>
                <div className={`row align-items-center ${styleClass}`}>
                    <div className="col text-center text-slanted">
                        <h1 className={'text-light text-uppercase display-3 letter-spacing text-slander'}>
                            {title}
                        </h1>
                        {children}
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'default title',
    styleClass: 'header-hero'
}

export default React.memo(Header);
