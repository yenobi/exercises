import React from 'react';
import Article from './Article';
import '../assets/ArticleList.css';
import accordion from '../decorators/accordion';

function ArticleList({articles, openArticleId, toggleOpenArticle}) {
    const articleElements = articles.map((article, index) => {
        return (
            <li key={article.id}> 
                <Article
                    article={article}
                    isOpen={article.id === openArticleId}
                    toggleOpen={() => toggleOpenArticle(article.id)}/>
            </li>
        )
    });
    return (
        <ul className="article-list">
            {articleElements}
        </ul>
    )
}

export default accordion(ArticleList);