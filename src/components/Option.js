import React from 'react';


const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text" key={props.optionName}> {props.optionName} </p> <button className="button button--link" onClick={(e) => { props.handelDeleteOption(props.optionName); }}>Remove</button>
        </div>
    );
}

export default Option;
