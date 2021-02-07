// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
    mount,
    shallow,
    configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });

fetchMock.enableMocks();

global.fetchMock = fetchMock;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.renderer = component => renderer.create(component).toJSON();
