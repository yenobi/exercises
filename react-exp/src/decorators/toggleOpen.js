import React from 'react';

export default (OriginalComponent) => class WrappedComponent extends React.Component {
    state = {
        isOpen: false
    }

    toggleOpen = (e) => {
       e && e.preventDefault && e.preventDefault();
       this.setState({
           isOpen: !this.state.isOpen
       }) 
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
    }
}