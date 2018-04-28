import React from 'react';
import CommentList from './CommentList';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

class Article extends React.PureComponent {
    transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
      };

      defaultStyle = {
        transition: `opacity 300ms ease-in-out`,
        opacity: 0,
        padding: 20,
        display: 'inline-block',
        backgroundColor: '#8787d8'
      };
    getBody = () => {
        if (!this.props.isOpen) return null;
        return <section style={{marginTop: '10px',...this.defaultStyle, ...this.transitionStyles}}>{this.props.article.text}</section>;
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const styleDate = {float: 'right'};
        const comments = isOpen ? <CommentList comments={article.comments}/> : '';
        return (
            <section className="card" ref={this.setContainerRef}>
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
                    <Transition
                        transitionName='article'
                        timeout={300}>
                        {this.getBody}
                    </Transition>
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

export default Article;