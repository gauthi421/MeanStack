'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'New Cart'
	),
	React.createElement(
		'p',
		null,
		' Below are the items '
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One '
		),
		React.createElement(
			'li',
			null,
			'Item Two '
		)
	)
);

var appRoot = document.getElementById('app');
var userName = 'Gautham Nag';
var userAge = 29;
var userLocation = 'Michigan';

var user = {
	userName: 'Gautham Nag',
	userAge: 29,
	userLocation: 'Michigan'
};

var app = {
	title: 'React project',
	subtitle: 'React proj sub title',
	options: ['one', 'two']
};

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'p',
		null,
		' ',
		app.title,
		' '
	),
	app.subtitle && React.createElement(
		'p',
		null,
		' ',
		app.subtitle
	),
	app.options && app.options.length > 0 ? React.createElement(
		'p',
		null,
		' ',
		'Here are Options',
		' '
	) : React.createElement(
		'p',
		null,
		' ',
		'No options',
		' '
	),
	React.createElement(
		'h1',
		null,
		'This is' + (user.userName ? user.userName : 'Anonymous'),
		' '
	),
	user.userAge && user.userAge >= 18 && React.createElement(
		'p',
		null,
		' Age: ',
		user.userAge,
		' '
	),
	React.createElement(
		'p',
		null,
		user.userLocation
	)
);

//ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot);
