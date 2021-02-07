import React from 'react';
import Header from '../Header';

const props = {
    title: 'title',
    children: 'children',
    styleClass: 'styleClass',
};

describe('Header snapshot', () => {
    it('should correct renderer', () => {
        const component = renderer(<Header {...props}/>);

        expect(component).toMatchSnapshot();
    });
});