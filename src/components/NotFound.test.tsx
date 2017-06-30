import * as React from 'react';
import NotFound from './NotFound';
const renderer = require('react-test-renderer');
const {Router} = require('react-router-dom');
const createHistory = require('history/createMemoryHistory').default;

test('Display Component', () => {
    const component = renderer.create(
        <Router history={createHistory()}>
            <NotFound/>
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});