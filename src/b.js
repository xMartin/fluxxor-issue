var React = require('react/addons');
var Fluxxor = require('fluxxor');
var cx = React.addons.classSet;

var fluxMixin = Fluxxor.FluxMixin(React);

module.exports = React.createClass({

  mixins: [
    fluxMixin
  ],

  render: function () {
    return null;
  }

});
