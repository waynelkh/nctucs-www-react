var React = require('react');

var Message = React.createClass({

    propTypes: {
        avator: React.PropTypes.string,
        username: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired,
    },

    render: function() {

        var avator = this.props.avator;
        var username = this.props.username;
        var message = this.props.message;

        return (
            <div>
                <div className="list-group-item">
                    <div className="row-picture">
                        <img className="circle" src={avator} alt="icon" />
                    </div>
                    <div className="row-content">
                        <h4 className="list-group-item-heading"> {username} </h4>
                        <p className="list-group-item-text"> {message} </p>
                    </div>
                </div>
                <div className="list-group-separator"></div>
            </div>
        );
    }

});

module.exports = Message;