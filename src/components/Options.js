import React from 'react';
import Option from './Option.js';

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => {
                    console.log('called');
                    return (<Option key={option} optionName={option} handelDeleteOption={props.handelDeleteOption} />);
                }
                )}

            {props.errormsg && <p className="add-option-error" > {props.errormsg} </p>}
            <button className="button" onClick={props.handleRemoveAll}>Remove All Options </button>
        </div>
    );
}

export default Options;
