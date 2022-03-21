import React from 'react';
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

type InputProps = {
    type: string;
    name: string;
    inputId: string;
    inputValue: string;
    onChangeHandler: Function;
    placeholder: string;
    labelText: string;
    readonly: boolean;
  };

const InputComponent = ({type, name, inputId, inputValue, onChangeHandler, placeholder, labelText, readonly} : InputProps) => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(event.target.value)
    }

    if(type === "password") {
        return (
            <label>
                <p>{labelText}</p>
                <Space direction="vertical">
                    <Input.Password
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={onChange}
                    id={inputId}
                    name={name}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>
            </label>
        ) 
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
            />
        </label>
    )
}

export default InputComponent;