var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

jest.dontMock('../a');
var A = require('../a');

describe('A', function () {

  it('has render method', function () {
    var a = TestUtils.renderIntoDocument(
      <A />
    );

    expect(a.render).toBeTruthy();
  });

});
