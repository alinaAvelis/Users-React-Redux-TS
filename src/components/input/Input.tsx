import React from 'react';
import "./input.scss";

type InputProps = {
    type: string;
    name: string;
    inputId: string;
    inputValue: string;
    onChangeHandler: Function;
    placeholder: string;
    labelText: string;
    readonly: boolean;
    required: boolean;
  };

const InputComponent = ({type, name, inputId, inputValue, onChangeHandler, placeholder, labelText, readonly, required} : InputProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(event.target.value)
    }

    return (
        <label>
            <p>{labelText}</p>
            <input 
                type={type} 
                name={name} 
                id={inputId} 
                value={inputValue} 
                placeholder={placeholder}  
                onChange={onChange}
                readOnly={readonly}
                required={required}
            />
        </label>
    )
}

export default InputComponent;