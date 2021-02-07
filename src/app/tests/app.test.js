import React from 'react';
import App from '../App.jsx';

describe('App snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<App/>);

        expect(component).toMatchSnapshot();
    });
});
