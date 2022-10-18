import renderer from 'react-test-renderer';
import Messager from './messager';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../_redux/store'
import { BrowserRouter as Router } from 'react-router-dom';

it('render messager', () => {
    const component = renderer.create(
        <Router>
            <Provider store={store}>
                <Messager/>
            </Provider>
        </Router>

    )

    // let tree = component.toJSON();
    // tree = component.toJSON();
    expect(component).not.toBeNull();
})