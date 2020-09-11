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
        <Tags value={this.state.value} selectedTheme={"primary"}/>
        <Tags value={this.state.value} selectedTheme={"success"}/>
        <Tags value={this.state.value} selectedTheme={"secondary"}/>
        <Tags value={this.state.value} selectedTheme={"info"}/>
        <Tags value={this.state.value} selectedTheme={"warning"}/>
        <Tags value={this.state.value} selectedTheme={"danger"}/>
        <Tags value={this.state.value} selectedTheme={"light"}/>
        <Tags value={this.state.value} selectedTheme={"dark"}/>
      </Fragment>
    );
  }
}

export default App;
