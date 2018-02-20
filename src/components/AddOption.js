import React from 'react';

export default class AddOption extends React.Component {


    handleOnSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.ipText.value.trim();
        this.props.handleSubmit(option);
    }

    render() {
        return (
            <div>
                <form className="add-option" onSubmit={this.handleOnSubmit}>
                    <input className="add-option__input" name='ipText' type='text'></input>
                    <button className="button"> {this.props.formLbl}  </button>
                </form>
            </div>
        );
    }
}
