import React, { Component } from "react";
import XOSymbol from "../X-O-symbol/XOSymbol";

class GameOptions extends Component {
  state = {
    activeChoice: 'x'
  }

  render() {
    const active = this.state.activeChoice;

    return (
      <div className="game-options">
        <div className='logo center-flex'>
          <XOSymbol xo='x' size='big' color='colors' />
          <XOSymbol xo='o' size='big' color='colors' />
        </div>
        <div className="button-style dark-button">
          <p>PICK PLAYER 1'S MARK</p>
          <div className="choose-XO center-flex">
            <button 
              className="center-flex" 
              style={{background: (active === 'x' && '#a2bfc6')}}
              onClick={() => this.setState({activeChoice: 'x'})}
            >
              <XOSymbol 
                xo='x' 
                size='big' 
                color={active === 'x' ? 'dark' : 'light'} 
              />
              </button>
            <button 
              className="center-flex" 
              style={{background: (active === 'o' && '#a2bfc6')}}
              onClick={() => this.setState({activeChoice: 'o'})}
            >
              <XOSymbol 
                xo='o' 
                size='big' 
                color={active === 'o' ? 'dark' : 'light'} 
              />
            </button>
          </div>
          <p>REMEMBER: X GOES FIRST</p>
        </div>
        <button className="choose-cpu button-style yellow-button" onClick={() => this.props.toggleScreen('cpu', active)}>NEW GAME (VS CPU)</button>
        <button className="choose-player button-style blue-button" onClick={() => this.props.toggleScreen('player', 'x')}>NEW GAME (VS PLAYER)</button>
      </div>
    )
  }
}

export default GameOptions;