import React from 'react';

export default class AddOption extends React.Component {
    
        constructor(props) {
            super(props);
            this.handleOnSubmit = this.handleOnSubmit.bind(this);
        }
    
        handleOnSubmit(e) {
            e.preventDefault();
            const option = e.target.elements.ipText.value.trim();
            this.props.handleSubmit(option);
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.handleOnSubmit}>
                        <input name='ipText' type='text'></input>
                        <button> {this.props.formLbl}  </button>
                    </form>
                </div>
            );
        }
    }

