import React from 'react';
import "./spinner.scss";

const Spinner = () => {
    return (
        <div className="spinner">
                <div className='spinner__squere'>
                    <div className='spinner__sub_squere'></div>
                </div>
        </div>
    )
}

export default Spinner;