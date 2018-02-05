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
<li>Option1 </li>
<li>Option2 </li>
<li>Option3 </li>
<li>Option4 </li>
 </ol>
</div>
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

const jsx = (
<div>
<Header />
<Action />
<Options />
<AddOption />
</div>
);

ReactDOM.render(jsx, document.getElementById('app'));
