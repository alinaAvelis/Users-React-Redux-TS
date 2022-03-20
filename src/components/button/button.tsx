import React from 'react';
import "./button.scss";

type ButtonProps = {
    text: string;
    onClickHundler: Function;
  };

const Button = ({text, onClickHundler} : ButtonProps) => {
    return (
        <button 
            className='button'
            type="button"
            onClick={() => {onClickHundler()}}>
            {text}
        </button>
    )
}

export default Button;