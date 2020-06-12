import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

class SideMenu extends React.Component {
  state = {
    activeTab: '',
  }

  handleClick = tab => {
    this.setState({
      activeTab: tab,
    })
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.handleClick('home')
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            this.handleClick('contact')
          }}
        >
          Contact
        </button>

        <button
          onClick={() => {
            this.handleClick('about')
          }}
        >
          About
        </button>
        
        <div>
          {this.state.activeTab === 'home' ? <Home /> : ''}
          {this.state.activeTab === 'about' ? (
            <About />
          ) : (
            ''
          )}
          {this.state.activeTab === 'contact' ? (
            <Contact />
          ) : (
            ''
          )}
        </div>
      </>
    )
  }
}

export default SideMenu
