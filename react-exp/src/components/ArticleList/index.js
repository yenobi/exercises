import React from 'react';
import Article from '../Article';
import './style.css';

export default class AticleList extends React.Component {
    state = {
        openArticleId: null
    }
    render() {
        const articleElements = this.props.articles.map((article, index) => {
            return (
                <li key={article.id}> 
                    <Article 
                        article={article}
                        isOpen={this.state.openArticleId === article.id}
                        onButtonClick={this.handleClick.bind(this, article.id)} />
                </li>
            )
        });
        return (
            <ul className="article-list">
                {articleElements}
            </ul>
        )
    }

    handleClick = (articleId) => {
        this.setState({
            openArticleId: this.state.openArticleId === articleId ? null : articleId
        });
    }
}