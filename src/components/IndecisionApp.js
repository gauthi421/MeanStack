import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.title = 'Indecision';
        this.message = 'Hello Message';
        this.state = {
            options: ['Option A', 'Option B', 'Option C'],
            errormsg: ''
        };
        this.btnLbl = 'What should I do ?';
        this.formLbl = 'Add Option';
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickAction = this.onClickAction.bind(this);
        this.handelDeleteOption = this.handelDeleteOption.bind(this);
    }

    onClickAction() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handelDeleteOption(optionDel) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => { return (optionDel !== option) })
            };
        });
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleSubmit(option) {
        if (!option) {
            this.setState((prevState) => ({ errormsg: 'Please enter a valid Option' }));
        }

        else {
            if ((this.state.options.length > 0) & (this.state.options.includes(option))) {
                this.setState((prevState) => ({ errormsg: 'Option Already Exists' }));
            }
            else {
                this.setState((prevState) => {
                    return {
                        options: prevState.options.concat(option),
                        errormsg: ''
                    };
                });
            }
        }
    }


    render() {
        return (
            <div>
                <Header title={this.title}
                    message={this.message} />
                <Action lbl={this.btnLbl}
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.onClickAction} />
                <Options handelDeleteOption={this.handelDeleteOption}
                    errormsg={this.state.errormsg}
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll} />
                <AddOption formLbl={this.formLbl}
                    handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

