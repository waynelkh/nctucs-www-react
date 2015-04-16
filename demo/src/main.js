var React = require('react');
var Header = require('./header.js');

var main = React.createClass({

    render: function() {
        return (
            <div>
                <Header />
                hello world
            </div>
        );
    }

});

module.exports = main;