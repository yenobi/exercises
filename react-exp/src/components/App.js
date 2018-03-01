import React, {Component} from 'react';
import articles from '../fixtures';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from './UserForm';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {
  state = {
    reverted: false,
    selection: null
  }

  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    });
  }

  changeSelection = selection => this.setState({selection});

  render() {
    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <div className="container">
        <UserForm />
        <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi/>
        <div className="jumbotron">
          <h1 className="title">App name</h1>
          <button className="btn" onClick={this.revert}>{this.state.reverted ? 'A-Z' : 'Z-A'}</button>
        </div>
          <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
      </div>
    );
  }

  
}

export default App;