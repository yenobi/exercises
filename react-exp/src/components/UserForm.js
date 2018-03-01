import React from 'react';

export default class UserForm extends React.Component {
    state = {
        username: ''
    };

    handleUserChange = (ev) => {
        this.setState({
          username: ev.target.value
        })
    };

    render() {
        return (
        <div>
            Name: <input type="text" value={this.state.username} onChange={this.handleUserChange}/>
        </div>
        )
    }
}