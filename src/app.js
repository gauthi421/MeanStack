
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const message = 'Hello Message';
        const options = ['Option A', 'Option B', 'Option C'];
        const btnLbl = 'What should I do ?';
        const formLbl = 'Add Option';
        return (
            <div>
                <Header title={title} message={message} />
                <Action lbl={btnLbl} />
                <Options options={options} />
                <AddOption formLbl={formLbl} />
            </div>
        );
    }
}
class Header extends React.Component {
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
    onClickAction() {
        alert('button Clicked');
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
    onClickAction() {
        alert('button Clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickAction}> {this.props.lbl} </button>
            </div>
        );
    }
}
class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert('removeAll');
    }
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} optionName={option} />;
                        }
                        )
                    }
                </ol>
                <button onClick={this.handleRemoveAll}>Remove All Options </button>
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <li key={this.props.optionName}> {this.props.optionName} </li>
        );
    }
}
class AddOption extends React.Component {
    handleOnSubmit(e) {
        e.preventDefault();
        alert(e.target.elements.ipText.value);
    };
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

