import React from 'react';

// add PureComponent
class Article extends React.PureComponent {
    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen ? <section style={{marginTop: '10px'}}>{article.text}</section> : '';
        const styleDate = {float: 'right'};
        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className="btn btn-primary float-right" onClick={onButtonClick}>
                            {isOpen ? 'close' : 'open'}
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
}

export default Article;