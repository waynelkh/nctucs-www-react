var React = require('react');
var ListItem = require('./ListItem.js')

var List = React.createClass({

    render: function() {

        var row = this.props.humun.map(function(data, i){
            return <ListItem key={i} name={data.name} age={data.age} />
        });

        return (
            <table className="table">
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
        );
    }

});

module.exports = List;