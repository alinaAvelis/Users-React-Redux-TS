import React, {useState} from'react';
import "./submitButton.scss";

type SubmitButtonProps = {
    value: string;
  };

export const SubmitButton = ({value}:SubmitButtonProps) => {


    return (
        <input 
            className='submit_btn'
            type="submit"  
            value= {value}
        />
    )
}