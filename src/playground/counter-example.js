class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            number: props.ini
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return { number: prevState.number + 1 };
        });

    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                number: prevState.number - 1
            };
        });

    }

    handleReset() {
        this.setState(() => {return {number: 0}; });

    }

    render() {
        return (
            <div>
                <h1> count: {this.state.number}</h1>
                <button onClick={this.handleAddOne}> +1 </button>
                <button onClick={this.handleMinusOne}> -1 </button>
                <button onClick={this.handleReset}> reset </button>
            </div>);
    }
}

ReactDOM.render(<Counter ini= {0} />, document.getElementById('app'));
