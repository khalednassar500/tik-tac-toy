import React from 'react';
import XOSymbol from '../X-O-symbol/XOSymbol';

const Turn = (props) => {
  return (
    <div className='center-flex'>
      <p className="button-style dark-button turn center-flex">
        {props.nextPlay === 'o' ? <XOSymbol xo='o' size='small' color='light' /> :
                                  <XOSymbol xo='x' size='small' color='light' />
        } 
        &nbsp;TURN</p>
    </div>
  )
}

export default Turn;