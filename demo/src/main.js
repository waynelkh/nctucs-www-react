var React = require('react');
var $ = require('jquery');
var request = require('superagent');
var Header = require('./header.js');
var List = require('./List.js');

var main = React.createClass({

    getInitialState: function() {
        return {
            number: 0,
            like: true,
            humun: []
        };
    },

    componentDidMount: function() {
        //"http://filltext.com/?rows=20&name={firstName}&age={randomNumberRange|5to50}"
        var url = "http://www.filltext.com/?callback=?";
         $.getJSON( url, {
           'rows': 20,
           'name': '{firstName}',
           'age': '{randomNumber}'
         })
         .done(function( data ) {
            this.setState({
                humun: data
            });
         }.bind(this));
    },

    handleClick: function(){
        var url = "http://www.filltext.com/";
        request
            .get(url)
            .query('rows=20&name={firstName}&age={randomNumber}')
            .end(function(err, res){
                this.setState({
                    humun: JSON.parse(res.text)
                });
        }.bind(this));

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
                <List humun={this.state.humun} />
            </div>
        );
    }

});

module.exports = main;