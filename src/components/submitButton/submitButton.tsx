import React from'react';
import "./submitButton.scss";

type SubmitButtonProps = {
    value: string;
    readonly: boolean
  };

export const SubmitButton = ({value, readonly}:SubmitButtonProps) => {


    return (
        <input 
            className='submit_btn'
            type="submit"  
            value= {value}
            disabled = {readonly}
        />
    )
}