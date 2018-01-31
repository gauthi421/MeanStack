console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app={
title: 'React project',
subtitle:'React proj sub title',
options: []
};

const onRemoveAll = () => {
alert('i');
app.options = [];

appRender();
};

const formSubmit = (e) =>{
e.preventDefault(); 
const newOption = e.target.elements.option.value; 
if(newOption){
app.options.push(newOption); 
e.target.elements.option.value='';
}
appRender();
};

// JSX - JavaScript XML
const appRender = () => {
const template =(
 <div>
	<h1>{app.title}</h1>
 {(app.subtitle) && <p> {app.subtitle}</p>}
<div>	{app.options.length>0?<div><p> Here are the options </p> <br/> <p> Total no of Options- {app.options.length} </p></div>:<p> No options </p>}</div>
	<ol> 
		<li>Item One </li>
		<li>Item Two </li>
	</ol> 
<form name='mainForm' onSubmit={formSubmit}>

<input type='text' name='option'/>
<button onClick=''> Add option </button>
<button onClick={onRemoveAll}> Remove All options </button>


</form>
</div>
);
ReactDOM.render(template, appRoot);
};

appRender();
