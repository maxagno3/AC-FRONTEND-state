import React from 'react'
import Button from './components/Button'
import Heading from './components/Heading'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      name: 'Counter',
    }
  }

  handleInc = () => {
    //   Changing the state.
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  handleDec = () => {
    this.setState(state => ({
      count: state.count - 1,
    }))
  }

  handleReset = () => {
    this.setState(state => ({
      count: 0,
    }))
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        {/* <h3>{this.state.count}</h3> */}
        <Heading>{this.state.count}</Heading>
        <Button handleClick={this.handleInc}>
          Increment
        </Button>
        <Button handleClick={this.handleDec}>
          Decrement
        </Button>
        <Button handleClick={this.handleReset}>
          Reset
        </Button>
      </>
    )
  }
}
export default App
