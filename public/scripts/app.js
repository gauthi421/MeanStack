'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

/*App object */
var app = {
	title: 'React project',
	subtitle: 'React proj sub title',
	options: []
};

/* Remove Options Object */
var onRemoveAll = function onRemoveAll() {
	app.options = [];
	appRender();
};

/*Form Submission - To Add new Option Functionality */

var formSubmit = function formSubmit(e) {
	e.preventDefault();
	var newOption = e.target.elements.option.value;
	if (newOption) {
		app.options.push(newOption);
		e.target.elements.option.value = '';
	}
	appRender();
};

/*Pick an option */

var pickOp = function pickOp() {

	var randomNum = Math.floor(Math.random() * app.options.length);
	var pick = app.options[randomNum];
	alert(pick);
};

/* JSX Template Functionality*/

// JSX - JavaScript XML
var appRender = function appRender() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtitle && React.createElement(
			'p',
			null,
			' ',
			app.subtitle
		),
		React.createElement(
			'div',
			null,
			' ',
			app.options.length > 0 ? React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					' Here are the options '
				),
				React.createElement('br', null)
			) : React.createElement(
				'p',
				null,
				' No options '
			)
		),
		React.createElement(
			'button',
			{ disabled: app.options.length == 0, onClick: pickOp },
			' What should I do ? '
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (opt) {
				return React.createElement(
					'li',
					{ key: opt },
					' ',
					opt,
					' '
				);
			})
		),
		React.createElement(
			'form',
			{ name: 'mainForm', onSubmit: formSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				{ onClick: 'mainForm.submit()' },
				' Add option '
			),
			React.createElement(
				'button',
				{ onClick: onRemoveAll },
				' Remove All options '
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

//Initialise My Page.
appRender();
