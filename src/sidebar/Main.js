import React from 'react'
import Button from './components/Buttons'
import SideMenu from './components/SideMenu'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      activeTab: 'home',
    }
  }
  
  isHidden = () => {
    this.setState({isVisible: false})
  }

  isShowing = () => {
    this.setState({isVisible: true})
  }

  render() {
    if (this.state.isVisible) {
      return (
        <>
          <SideMenu />
          <Button click={this.isHidden}>Hide</Button>
        </>
      )
    } else {
      return <Button click={this.isShowing}>Show</Button>
    }
  }
}

export default App
