import React from "react";
import './XOSymbol.css';

const styles = {
  big: 'xo-size-big',
  small: 'xo-size-small',
  light: 'xo-colors-light',
  dark: 'xo-colors-dark',
  colors: 'xo-colors'
}

const XOSymbol = (props) => {
  const style = props.small === 'small' ? 'small-o' : '';
  const { xo, size, color } = props;


  return (
    <span className={`${styles[size]} ${styles[color]}`}>
      {xo === 'o' && 
      <span className={`o ${style} `}>
        <span className="center-position"></span>   
      </span> 
      }
      {xo === 'x' && 
      <span className={`x ${style} `}>
        <span className='center-position'></span>
        <span className='center-position'></span>
      </span>
      }
    </span>
  )
}

export default XOSymbol;