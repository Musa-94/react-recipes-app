import React from 'react';
import Search from '../Search';

const props = {
    search: '',
    isError: false,
    handleSubmit: () => {},
    handleChange: () => {},
}

describe('Search snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Search {...props}/>);

        expect(component).toMatchSnapshot();
    });
});