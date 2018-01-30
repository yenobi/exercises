import React, {Component} from 'react';
import articles from '../fixtures';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    reverted: false
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="title">App name</h1>
          <button className="btn" onClick={this.revert}>{this.state.reverted ? 'A-Z' : 'Z-A'}</button>
        </div>
          <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    );
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    });
  }
}

export default App;