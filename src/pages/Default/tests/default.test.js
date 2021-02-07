import React from 'react';
import Default from '../Default';

describe('Default snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Default/>);

        expect(component).toMatchSnapshot();
    });
});