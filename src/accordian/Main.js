import React from 'react'
import JavaScript from './components/JavaScript'
import HTML from './components/HTML'
import Vue from './components/Vue'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showMessage: ''
    }
  }

  // barClicked = (msg) => {
  //   this.setState({showMessage: msg})
  // }

  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState({showMessage: 'javascript'})
          }
        >
          JavaScript
        </button>
        <button
          onClick={() =>
            this.setState({showMessage: 'html'})
          }
        >
          HTML
        </button>

        <button onClick={() => this.setState({showMessage: 'vue'})}>Vue</button>

        <div>
          {this.state.showMessage === 'javascript' ? (
            <JavaScript />
          ) : (
            ''
          )}

          {this.state.showMessage === 'vue' ? <Vue /> : ''}

          {this.state.showMessage === 'html' ? (
            <HTML />
          ) : (
            ''
          )}
        </div>
      </>
    )
  }

}

export default App
// export default function App() {
//   return <h1>Hello Accordian</h1>
// }
