const { assert } = require("assertthat");
const { render, screen } = require('@testing-library/react');
const React = require('react')

const TestComponent = () => React.createElement('h1', {}, 'Hello World');

describe('Example Case', () => {
  it('fails with a huge message', () => {
    render(React.createElement(TestComponent));

    // This should fail with a message "is not null"
    assert.that(screen.getByText('Hello World')).is.null();
  });

});
