import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Action from './Action.js';
import Header from './Header.js';
import Modal from './utils/ReactModal.js';

export default class IndecisionApp extends React.Component {

    title = 'Indecision';
    message = 'Hello Message';
    btnLbl = 'What should I do ?';
    formLbl = 'Add Option';

    state = {
        options: ['Option A', 'Option B', 'Option C'],
        showModal: undefined,
        errormsg: ''
    };


    onClickAction = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        //alert(option);
        this.setState(() => ({ showModal: (<div><p className="modal__body">{option}</p><p><button  className="button" onClick={this.modalClose}> Close</button></p></div>) }));
    }


    modalClose = () => {
        this.setState(() => ({ showModal: undefined }));
    }

    handelDeleteOption = (optionDel) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => { return (optionDel !== option) })
            };
        });
    }

    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }

    handleSubmit = (option) => {
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

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount = () => {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div>
                <Header title={this.title}
                    message={this.message} />
                <div className="container">
                    <Action lbl={this.btnLbl}
                        hasOptions={this.state.options.length > 0}
                        pickOption={this.onClickAction} />
                    <div className="widget">
                        <Options handelDeleteOption={this.handelDeleteOption}
                            errormsg={this.state.errormsg}
                            options={this.state.options}
                            handleRemoveAll={this.handleRemoveAll} />

                        <AddOption formLbl={this.formLbl}
                            handleSubmit={this.handleSubmit} />
                    </div>
                </div>

                <Modal showModal={this.state.showModal} />
            </div>
        );
    }
}

