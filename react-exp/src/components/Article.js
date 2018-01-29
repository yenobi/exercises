import React, {Component} from 'react';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false 
        };
    }
    render() {
        const {article} = this.props;
        const body = this.state.isOpen ? <section>{article.text}</section> : '';
        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={this.openArticle}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>    
                </h2>
                <h3>date: {(new Date(article.date)).toDateString()}</h3>
                {body}
            </div>
        );
    }

    openArticle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // openArticle = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
}

export default Article;