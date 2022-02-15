import React, { Component } from 'react';
import './App.css';
import Turn from './components/Turn/Turn';
import Restart from './components/Restart/Restart';
import Playarea from './components/PlayArea/PlayArea';
import GameOptions from './components/GameOptions/GameOptions';
import XOSymbol from './components/X-O-symbol/XOSymbol';
import ViewWinner from './components/ViewWinner/ViewWinner';

class App extends Component {
  
  state = {
    content: ['', '', '', '', '', '', '', '', ''],
    screen: 'options',
    vs: '',
    playerChoose: 'o',
    cpuChoose: null,
    nextPlay: 'x',
    winner: null,
    palyer1Score: '0',
    palyer2Score: '0',
    ties: '0'
  };;

  checkWin = (arr) => {
    const con = [...arr];
    let winner = [];

    if(con[0] && con[0] === con[1] && con[1] === con[2]) {
      winner = [con[0], [0, 1, 2]];
    }else if(con[3] && con[3] === con[4] && con[4] === con[5]) {
      winner = [con[3], [3, 4, 5]];
    }else if(con[6] && con[6] === con[7] && con[7] === con[8]) {
      winner = [con[6], [6, 7, 8]];
    }else if(con[0] && con[0] === con[3] && con[3] === con[6]) {
      winner = [con[0], [0, 3, 6]];
    }else if(con[1] && con[1] === con[4] && con[4] === con[7]) {
      winner = [con[1], [1, 4, 7]];
    }else if(con[2] && con[2] === con[5] && con[5] === con[8]) {
      winner = [con[2], [2, 5, 8]];
    }else if(con[0] && con[0] === con[4] && con[4] === con[8]) {
      winner = [con[0], [0, 4, 8]];
    }else if(con[2] && con[2] === con[4] && con[4] === con[6]) {
      winner = [con[2], [2, 4, 6]];
    }else return [];

    return winner;
  }

  toggleScreen = (vs, playerChoose) => {
    let cpuChoose =  playerChoose === 'x' ? 'o' : 'x'
    let f = vs === 'cpu' && playerChoose === 'o' ? 
            this.cpuStep(this.state.content, cpuChoose) :
            this.state.content

    this.setState(()=> ({
      content: f,
      screen: 'game',
      vs: vs,
      playerChoose: playerChoose,
      cpuChoose: cpuChoose,
      nextPlay: playerChoose
    }));
    return;
  }

  cpuStep = (content, cpuChoose) => {
    const playerChoose = this.state.playerChoose;
    const con = [...content];

    const p = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    const ps = [ [con[0],con[1],con[2]],
                 [con[3],con[4],con[5]],
                 [con[6],con[7],con[8]], 
                 [con[0],con[3],con[6]], 
                 [con[1],con[4],con[7]], 
                 [con[2],con[5],con[8]], 
                 [con[0],con[4],con[8]], 
                 [con[2],con[4],con[6]] ];

    for (let i = 0; i <= p.length-1; i++) {
      if ((ps[i][0] === ps[i][1] && ps[i][0] !== '' && ps[i][2] === '' && ps[i][0] === cpuChoose) ||
          (ps[i][0] === ps[i][2] && ps[i][0] !== '' && ps[i][1] === '' && ps[i][0] === cpuChoose) ||
          (ps[i][1] === ps[i][2] && ps[i][1] !== '' && ps[i][0] === '' && ps[i][1] === cpuChoose)) {
        con[p[i][ps[i].indexOf('')]] = cpuChoose;
        break;
      }
      if ((ps[i][0] === ps[i][1] && ps[i][0] !== '' && ps[i][2] === '' && ps[i][0] === playerChoose) ||
          (ps[i][0] === ps[i][2] && ps[i][0] !== '' && ps[i][1] === '' && ps[i][0] === playerChoose) ||
          (ps[i][1] === ps[i][2] && ps[i][1] !== '' && ps[i][0] === '' && ps[i][1] === playerChoose)) {
        con[p[i][ps[i].indexOf('')]] = cpuChoose;
        break;
      }
      if ((ps[i][0] === ps[i][1] && ps[i][0] === '' && ps[i][2] === cpuChoose) ||
          (ps[i][0] === ps[i][2] && ps[i][0] === '' && ps[i][1] === cpuChoose) ||
          (ps[i][1] === ps[i][2] && ps[i][1] === '' && ps[i][0] === cpuChoose)) {
        con[p[i][ps[i].indexOf('')]] = cpuChoose;
        break;
      }
      if (con.indexOf('x') === -1 || con.indexOf('o') === -1)  {
        con[Math.floor(Math.random() * 9)] = cpuChoose;
        break;
      }
    }
    return con;
  }

  handleGameClicks = (i) => {
    if (this.state.content[i]) return;

    const vs = this.state.vs;    
    let nextPlay = (vs ==='cpu' ? 
                    this.state.playerChoose :
                    this.state.nextPlay )
    
    const prevContent = [...this.state.content];
    prevContent[i] = nextPlay;

    nextPlay =  vs !== 'cpu' ? (nextPlay === 'x' ? 'o' : 'x'): nextPlay

    let winner = this.checkWin(prevContent);

    this.setState((prevState) => ({
      content: prevContent,
      nextPlay:  nextPlay,
      winner: !prevContent.includes('') ? 'no winner' : winner[0]
    }))



    if (vs === 'cpu') {
      let f = this.cpuStep(prevContent, this.state.cpuChoose);
      winner = this.checkWin(f);

      this.setState(()=> ({
        content: f,
        winner: !f.includes('') ? 'no winner' : winner[0]
      }))
    }
  }

  restartOptions = (type) => {
    if ( type === 'quit' ) {
      this.setState(() => ({
        content: ['', '', '', '', '', '', '', '', ''],
        screen: 'options',
        vs: null,
        playerChoose: 'o',
        cpuChoose: null,
        nextPlay: 'x',
        winner: null,
        palyer1Score: '0',
        palyer2Score: '0',
        ties: '0'
      }))
    }else if ( type === 'nextRound' ) {
      this.setState((prevState) => ({
        content: ['', '', '', '', '', '', '', '', ''],
        screen: 'game',
        winner: null,
        palyer1Score: prevState.winner[0] === 'x' ? ++prevState.palyer1Score : prevState.palyer1Score,
        palyer2Score: prevState.winner[0] === 'o' ? ++prevState.palyer2Score : prevState.palyer2Score,
        ties: ++prevState.ties
      }));
      if (this.state.vs === 'cpu' && this.state.cpuChoose === 'x') {
        let f = this.cpuStep(['', '', '', '', '', '', '', '', ''], this.state.cpuChoose);
  
        this.setState(()=> ({
          content: f,
        }))
      }
    }
  }

  render() {
    return (
      <div className='app'>
        {this.state.screen === 'game' && 
        <div>
          <header>
            <div className='logo'>
              <XOSymbol xo='x' size='big' color='colors' />
              &nbsp;
              <XOSymbol xo='o' size='big' color='colors' />
            </div>
            <Turn nextPlay={this.state.nextPlay} />
            <Restart restartOptions={this.restartOptions} />
          </header>
          
          <Playarea 
            content={this.state.content}
            handleGameClicks={(i) => this.handleGameClicks(i)}
          />
        
          <footer>
            <div className='center-flex'>
              <div className='center-flex player-1'>
                <p className='title'>X{this.state.vs === 'cpu' && this.state.cpuChoose === 'x' ? ' (CPU)' : this.state.vs === 'cpu' && this.state.cpuChoose === 'o' ? ' (YOU)': ''}</p>
                <p className='num'>{this.state.palyer1Score}</p>
              </div>
            </div>
            <div className='center-flex'>
              <div className='center-flex ties'>
                <p className='title'>TIES</p>
                <p className='num'>{this.state.ties}</p>
              </div>
            </div>
            <div className='center-flex'>
              <div className='center-flex player-2'>
                <p className='title'>O{this.state.vs === 'cpu' && this.state.cpuChoose === 'o' ? ' (CPU)' : this.state.vs === 'cpu' && this.state.cpuChoose === 'x' ? ' (YOU)': ''}</p>
                <p className='num'>{this.state.palyer2Score}</p>
              </div>
            </div>
          </footer>
        </div>
        }

        {this.state.screen === 'options' && 
          <GameOptions toggleScreen={this.toggleScreen} />
        }
        
        {this.state.winner && 
          <ViewWinner 
            winner={this.state.winner} 
            vs={this.state.vs}
            cpuChoose={this.state.cpuChoose}
            restartOptions={this.restartOptions}
          />

        }
      </div>
    )
  }

  setLocalStorage = (obj) => {
    for (let x in obj) {
      localStorage.setItem(x, obj[x])
    }
  }

  componentDidMount() {
    const initialState = {
      content: ['', '', '', '', '', '', '', '', ''],
      screen: 'options',
      vs: '',
      playerChoose: 'o',
      cpuChoose: null,
      nextPlay: 'x',
      winner: null,
      palyer1Score: '0',
      palyer2Score: '0',
      ties: '0'
    };


    if (!localStorage.content) {
      this.setLocalStorage(initialState);
    }
    
    localStorage.setItem('count' ,'s');

    if (!this.state.content) {
      const ls = {...localStorage};
      this.setState({
        content: ls.content.split(','),
        screen: ls.screen,
        vs: ls.vs,
        playerChoose: ls.playerChoose,
        cpuChoose: ls.winner === 'null' ? null : ls.winner,
        nextPlay: ls.nextPlay,
        winner: ls.winner === 'null' ? null : ls.winner,
        palyer1Score: ls.palyer1Score,
        palyer2Score: ls.palyer2Score,
        ties: ls.ties
      })
    }
  }
  componentDidUpdate() {
    this.setLocalStorage(this.state);
    localStorage.count = 'localStorage.count'
    console.log(localStorage.count)
  }
}

export default App;
