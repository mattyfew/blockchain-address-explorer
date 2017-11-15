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










// describe('Address type', () => {
//     it('should be a main tag', () => {
//         console.log("RAAAWWWRRRR")
//
//         const renderer = new ShallowRenderer();
//         renderer.render(<Address addressInfo={sample}/>)
//
//         const actual = renderer.getRenderOutput().type;
//         const expected = 'main'
//         expect(actual).toEqual(expected)
//
//     })
// })
//
//
//  describe('createKey', () => {
//      it('should create a unique key for each rendered transaction', () => {
//
//          const renderer = TestUtils.createRenderer()
//          renderer.render(<Main />)
//          const output = renderer.getRenderOutput()
//          console.log(output)
//
//           expect(actual).toEqual(expected)
//      })
//  })
