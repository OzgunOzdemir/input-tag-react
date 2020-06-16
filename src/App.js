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
    let matchedTag = false;
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
              matchedTag = true
            }
          })
          if (!matchedTag) {
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
    if(e.key === 'Backspace'){
      if(e.target.value.length <= 0){
        this.state.tags.splice(this.state.tags.length - 1, 1)
        this.setState({
          tags: this.state.tags
        })
      }
    }
  }

  removeTag = (index) => {
    this.state.tags.splice(index, 1);
    this.setState({
      tags: this.state.tags
    })
  }

  render() {
    return (
      <div className="tag-container">
        {
          this.state.tags.map((item, i) => (
            <span className="tag" key={i}>
              <span className="content">{item}    </span>
              <span className="close" onClick={() => this.removeTag(i)}>X</span>
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
