// This Javascript is used until Udemy course of JSX expressions

console.log('App.js is running!');

// JSX - JavaScript XML

const template =(
 <div>
	<h1>New Cart</h1>

	<p> Below are the items </p>
	<ol> 
		<li>Item One </li>
		<li>Item Two </li>
	</ol>
</div>
);



const appRoot = document.getElementById('app');
const  userName = 'Gautham Nag';
const  userAge = 29;
const  userLocation = 'Michigan';

const user= {
userName: 'Gautham Nag',
userAge: 29,
userLocation: 'Michigan'
};


const app={
title: 'React project',
subtitle:'React proj sub title',
options: ['one', 'two']
};

const template2 = (
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
