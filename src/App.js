import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      error: false
    }
  }

  handleKeyDown = (e) => {
    let errorCount = 0;
    if (e.key === 'Enter') {
      if (e.target.value.length > 0) {
        if (this.state.tags.length > 0) {
          this.state.tags.forEach(tag => {
            if (tag.toLowerCase() === e.target.value.toLowerCase()) {
              this.setState({
                error: true
              })
              setTimeout(() => {
                this.setState({
                  error: false
                })
              }, 3000)
              errorCount++
            }
          })
          if (errorCount === 0) {
            const tags = this.state.tags;
            tags.push(e.target.value)
            this.setState({
              tags
            })
          }
        } else {
          const tags = this.state.tags;
          tags.push(e.target.value)
          this.setState({
            tags
          })
        }
      }
      e.target.value = null;
    }
  }

  render() {
    return (
      <div className="tag-container">
        {
          this.state.tags.map((item, i) => (
            <span className="tag" key={i}>
              <span className="content">{item}    </span>
              <span className="close">X</span>
            </span>
          ))
        }

        <input type="text" name="tag" id="tag" onKeyDown={(e) => this.handleKeyDown(e)} />
        {
          this.state.error === false ? null : <div className="error">Bu etiket daha önceden eklenmiş !! </div>
        }

      </div>
    );
  }
}

export default App;
