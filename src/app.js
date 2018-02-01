console.log('App.js is running!');

const appRoot = document.getElementById('app');

/*App object */
const app={
title: 'React project',
subtitle:'React proj sub title',
options: []
};

/* Remove Options Object */
const onRemoveAll = () => {
app.options = [];
appRender();
};


/*Form Submission - To Add new Option Functionality */

const formSubmit = (e) =>{
e.preventDefault(); 
const newOption = e.target.elements.option.value; 
if(newOption){
app.options.push(newOption); 
e.target.elements.option.value='';
}
appRender();
};

/*Pick an option */

const pickOp= () => {

const randomNum= Math.floor(Math.random()*app.options.length);
const pick = app.options[randomNum];
alert(pick);
};

/* JSX Template Functionality*/

// JSX - JavaScript XML
const appRender = () => {
const template =(
 <div>
	<h1>{app.title}</h1>
 {(app.subtitle) && <p> {app.subtitle}</p>}
<div>	{app.options.length>0?<div><p> Here are the options </p><br/></div>:<p> No options </p>}</div>

<button disabled={app.options.length==0} onClick={pickOp} > What should I do ? </button>

	<ol> 
	{
app.options.map((opt) => {
return <li key={opt}> {opt} </li>;
})
	}
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

//Initialise My Page.
appRender();
