import React from 'react';
import Article from './Article';
import '../assets/ArticleList.css';

export default class AticleList extends React.Component {
    state = {
        openArticleId: null
    }

    toggleOpenArticle(openArticleId) {
       this.setState(
           openArticleId === this.state.openArticleId ? {openArticleId: null} : {openArticleId}
        )
    }

    render() {
        const articleElements = this.props.articles.map((article, index) => {
            return (
                <li key={article.id}> 
                    <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleOpen={this.toggleOpenArticle.bind(this, article.id)}/>
                </li>
            )
        });
        return (
            <ul className="article-list">
                {articleElements}
            </ul>
        )
    }
}