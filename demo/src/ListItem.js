var React = require('react');

var ListItem = React.createClass({

    render: function() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
            </tr>
        );
    }

});

module.exports = ListItem;