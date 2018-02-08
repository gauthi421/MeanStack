class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.mainTag = 'visibility Toggle';
        this.detlsBtnLabl = ['Show details', 'Hide details'];
        this.visToggle = this.visToggle.bind(this);
        this.state = {
            visIp: false
          
        }

    }

    visToggle() {
        this.setState((prevState) => {
            return {
                visIp: !prevState.visIp
            };
        });
    }

    render() {
        return (
            <div>
                <h1> {this.mainTag}</h1>
                {this.state.visIp ? <p>I'm hidden</p> : ''}
                <br />
                <button onClick={this.visToggle}>{this.state.visIp ?this.detlsBtnLabl[1] : this.detlsBtnLabl[0]}</button>
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
