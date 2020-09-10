import React, { Component, Fragment } from 'react';
import './App.css';
import Tags from './components/Tags/Tags.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "deneme,test",
      selectedTheme: "warning",
    }
  }
  
  render() {
    return (
      <Fragment>
        <Tags value={this.state.value} selectedTheme={this.state.selectedTheme}/>
      </Fragment>
    );
  }
}

export default App;
