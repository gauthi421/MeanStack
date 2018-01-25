console.log('App.js is running!');

// JSX - JavaScript XML

var template =(
 <div>
	<h1>New Cart</h1>

	<p> Below are the items </p>
	<ol> 
		<li>Item One </li>
		<li>Item Two </li>
	</ol>
</div>
);



let appRoot = document.getElementById('app');
let userName = 'Gautham Nag';
let userAge = 29;
let userLocation = 'Michigan';

let user= {
userName: 'Gautham Nag',
userAge: 29,
userLocation: 'Michigan'
};


let app={
title: 'React project',
subtitle:'React proj sub title',
options: ['one', 'two']
};

let template2 = (
<div>
<p> {app.title} </p>
{app.subtitle && <p> {app.subtitle}</p>}
 {(app.options && app.options.length>0)? <p> {'Here are Options'} </p>: <p> {'No options'} </p>}
<h1>{ 'This is' + (user.userName? user.userName: 'Anonymous') } </h1>
 
{(user.userAge && user.userAge>=18)&&<p> Age: {user.userAge} </p>} 
<p>{user.userLocation}</p>

</div>
);

//ReactDOM.render(template, appRoot);
ReactDOM.render(template2,appRoot);
