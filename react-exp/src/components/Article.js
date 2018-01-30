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
        const body = this.state.isOpen ? <section style={{marginTop: '10px'}}>{article.text}</section> : '';
        const styleDate = {float: 'right'};
        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary float-right" onClick={this.openArticle}>
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>    
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted" style={styleDate}>date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
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