
class IndecisionApp extends React.Component {

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

const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.message} </h2>
        </div>
    );
}


const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOptions}> What should I do ?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => {
                    console.log('called');
                    return (<Option key={option} optionName={option} handelDeleteOption={props.handelDeleteOption} />);
                }
                )}

            {props.errormsg && <p> {props.errormsg} </p>}
            <button onClick={props.handleRemoveAll}>Remove All Options </button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <div key={props.optionName}> {props.optionName}  <button onClick={(e) => { props.handelDeleteOption(props.optionName); }}>Remove</button></div>
        </div>
    );
}

class AddOption extends React.Component {

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

