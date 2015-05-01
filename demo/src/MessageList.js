var React = require('react');
var Message = require('./Message.js');

var MessageList = React.createClass({

    getDefaultProps: function() {
        return { messages: [] };
    },

    propTypes: {
        messages: React.PropTypes.array
    },

    render: function() {
        var message = this.props.messages.reverse().map(function(data,index){
            return <Message key={index}
                            avator={data.avator}
                            username={data.username}
                            message={data.message} />
        });
        return (
            <div className="list-group">
                {message}
            </div>
        );
    }

});

module.exports = MessageList;