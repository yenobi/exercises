import React from 'react';

export default (OriginalComponent) => class WrappedAccordion extends React.Component {
    state = {
        openItemId: null
    }

    toggleOpenItem = (openItemId) => {
       this.setState(
           openItemId === this.state.openItemId ? {openItemId: null} : {openItemId}
        )
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenItem}/>
    }
}