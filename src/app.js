
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.title = 'Indecision';
        this.message = 'Hello Message';
        this.state = {
            options: ['Option A', 'Option B', 'Option C']
        };
        this.btnLbl = 'What should I do ?';
        this.formLbl = 'Add Option';
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClickAction = this.onClickAction.bind(this);
    }

    onClickAction() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleRemoveAll() {

        this.setState(() => {
            return { options: [] };
        });
    }

    handleSubmit(option) {
      
        this.setState((prevState) => {
            options: prevState.options.push(option);
        });
    }


    render() {
        return (
            <div>
                <Header title={this.title} message={this.message} />
                <Action lbl={this.btnLbl}
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.onClickAction} />
                <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
                <AddOption formLbl={this.formLbl} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.message} </h2>
            </div>
        );
    }
}
class Action extends React.Component {

    constructor(props) {

        super(props);
    }


    render() {
        return (
            <div>
                <button onClick={this.props.pickOption} disabled={!this.props.hasOptions}> What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ol>
                    {

                        this.props.options.map((option) => {
                            console.log('called');
                            return (<Option key={option} optionName={option} />);
                        }
                        )}
                </ol>
                <button onClick={this.props.handleRemoveAll}>Remove All Options </button>
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.optionName}> {this.props.optionName} </li>
        );
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
       this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.ipText.value.trim();
        if(option){
        this.props.handleSubmit(option);
        }
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

