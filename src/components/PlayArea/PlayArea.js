import React from "react";
import PlayButton from '../PlayButton/PlayButton';

const Playarea = (props) => {
  return (
    <div className="playArea">
      { props.content.map(( item, index ) => {
        return  <PlayButton 
                  key={index}
                  XO={item}
                  handleGameClicks={(i) => props.handleGameClicks(i)}
                  index={index}
                />
      }) }
    </div>
  )
}

export default Playarea;