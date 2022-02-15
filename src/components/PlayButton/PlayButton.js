import React from "react";
import XOSymbol from "../X-O-symbol/XOSymbol";

const PlayButton = (props) => {
  const X_or_O = props.XO === 'x' ? <XOSymbol xo='x' size='big' color='colors' /> :
                 props.XO === 'o' ? <XOSymbol xo='o' size='big' color='colors' /> : props.XO


  return (
    <div className="center-flex ">
      <button 
        className="button-style center-flex dark-button"
        onClick={() => props.handleGameClicks(props.index)}
      >
        {X_or_O}
      </button>
    </div>
    
  )
}

export default PlayButton;