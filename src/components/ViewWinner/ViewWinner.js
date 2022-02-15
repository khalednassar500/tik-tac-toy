import React from "react";
import XOSymbol from "../X-O-symbol/XOSymbol";

const ViewWinner = (props) => {
  const { vs, winner, cpuChoose, restartOptions } = props;

  return (
    <div className="winner-con center-flex">
      <section>
        <p>
          {vs === 'cpu' && cpuChoose === winner ? 'CPU WON!' : vs === 'cpu' && cpuChoose === winner ? 'YOU WON!' : ''}
          {winner === 'no winner' && 'NO WINNER!'}
        </p>
        {winner !== 'no winner' && <p className="winner center-flex">
          <XOSymbol xo={winner} size='big' color='colors' /> 
          &nbsp;
          <span style={{color: (winner === 'x' ? '#5bc6be' :'#f3ae2f')}}>TAKES THE ROUND</span>
        </p>}
        <div>
          <button 
            className="button-style light-button"
            onClick={() => restartOptions('quit')}
          >QUIT</button>
          <button 
            className={`button-style ${(winner === 'x' ? 'yellow-button' :'blue-button')}`}
            onClick={() => restartOptions('nextRound')}
          >NEXT ROUND</button>
        </div>
      </section>
    </div>
  )
}

export default ViewWinner;