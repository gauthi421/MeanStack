import React from 'react';


const Option = (props) => {
    return (
        <div>
            <div key={props.optionName}> {props.optionName}  <button onClick={(e) => { props.handelDeleteOption(props.optionName); }}>Remove</button></div>
        </div>
    );
}

export default Option;
