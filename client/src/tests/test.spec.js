import React from 'react';
import Main from '../Main'
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({adapter: new Adapter()});

describe('App', () => {
    it('renders without crashing', () => {
        enzyme.shallow(<Main/>);
    });

    const component = renderer.create(
        <Main
            onAddressChange={() => {}}
            submitAddress={() => {}}/>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
