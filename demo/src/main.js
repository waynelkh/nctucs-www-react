var React = require('react');
var Header = require('./header.js');

var main = React.createClass({

    getInitialState: function() {
        return {
            number: 0,
            like: true
        };
    },

    handleClick: function(){
        this.setState({
            number: this.state.number+1,
            like: !this.state.like
        });
    },

    render: function() {
        var isLike = this.state.like ? 'glyphicon glyphicon-heart' : '';
        return (
            <div>
                <Header />
                <p>Number: {this.state.number}</p>
                <p>
                    Like or not: <spen className={isLike}></spen>
                </p>
                <button onClick={this.handleClick}>Push</button>


            </div>
        );
    }

});

module.exports = main;