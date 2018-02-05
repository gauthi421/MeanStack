class IndecisionApp extends React.Component{

render(){
return (
<div>
<Header />
<Action />
<Options />
<AddOption />
</div>
);
}
}


class Header extends React.Component {
render(){

return (
<div>
<h1> Indecision</h1>
<h2> Hello Message </h2>
</div>
);
}
}

class Action extends React.Component{

render(){
return (
<div>
<button> What should I do ?</button>
</div>
);
}
}

class Options extends React.Component {

render(){
return (
<div>
<ol>
<Option />
 </ol>
</div>
);
}
}

class Option  extends React.Component{
render()
{
let inc =0;
return (
<li>Option{inc++} </li>
);
}
}

class AddOption extends React.Component {
render(){

return (
<div>
<form onSubmit=''>
<button> AddOption </button>
</form>
</div>
);
}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
