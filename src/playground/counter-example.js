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
        this.setState(() => { return { number: 0 }; });

    }
    componentDidMount(){
        const cacheData = localStorage.getItem('currNumber');
        const num = parseInt(cacheData, 10);
        if(!isNaN(num))
        {
        this.setState(() => ({num}) );
        }
    }
componentDidUpdate(prevProps,prevState){

localStorage.setItem('currNumber',this.state.number);
    
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
Counter.defaultProps = {ini:0};
ReactDOM.render(<Counter ini={10} />, document.getElementById('app'));
