import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends React.PureComponent {
    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const body = isOpen ? <section style={{marginTop: '10px'}}>{article.text}</section> : '';
        const styleDate = {float: 'right'};
        const comments = isOpen ? <CommentList comments={article.comments}/> : '';
        return (
            <section className="card">
                <header className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary float-right" onClick={(e) => toggleOpen(e)}>
                            {isOpen ? 'close' : 'open'}
                        </button>    
                    </h2>
                </header>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted" style={styleDate}>date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
                <footer>
                    {comments}
                </footer>
            </section>
        );
    }
}

Article.propTypes = {
    article: PropTypes.object.isRequired
}

export default toggleOpen(Article);