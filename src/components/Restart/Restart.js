import { React, Component } from 'react';

class Restart extends Component {
  state= {
    restartPage: false
  }

  render() {
    return (
      <div className='restart'>
        <button 
          className='button-style light-button restart-toggle-button'
          onClick={() => this.setState({restartPage: true})}
        >⟳</button>
        {this.state.restartPage && 
        <section className='restartPage center-flex'>
          <div>
            <p>RESTART GAME?</p>
            <button 
              className='button-style light-button'
              onClick={() => this.setState({restartPage: false})}
            >NO, CANCEL</button>
            <button 
              className='button-style yellow-button'
              onClick={() => {this.setState({restartPage: false}); this.props.restartOptions('quit')}}
            >YES, RESTART</button>
          </div>
        </section>
        }
      </div>
    )
  }
}

export default Restart;