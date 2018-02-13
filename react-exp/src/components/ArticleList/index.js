import React from 'react';
import Article from '../Article';
import './style.css';

export default class AticleList extends React.Component {
    render() {
        const articleElements = this.props.articles.map((article, index) => {
            return (
                <li key={article.id}> 
                    <Article article={article} />
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