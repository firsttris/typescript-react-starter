import * as React from 'react';
const renderer = require('react-test-renderer');
import LinkItem from "./LinkItem";
const {Router} = require('react-router-dom');
const createHistory = require('history/createMemoryHistory').default;

test('FadeCard changes the class when hovered', () => {
    const component = renderer.create(
        <Router history={createHistory()}>
            <LinkItem focus={true} path="/" name="App"/>
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});