import renderer from 'react-test-renderer';
import Message from './message';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../_redux/store'

it('render message', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Message name="John" message="test message" date={6576547654}></Message>
        </Provider>
    )

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})