'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var app = {
	title: 'React project',
	subtitle: 'React proj sub title',
	options: []
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];

	appRender();
};

var formSubmit = function formSubmit(e) {
	e.preventDefault();
	var newOption = e.target.elements.option.value;
	if (newOption) {
		app.options.push(newOption);
		e.target.elements.option.value = '';
	}
	appRender();
};

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
				' ',
				React.createElement('br', null),
				' ',
				React.createElement(
					'p',
					null,
					' Total no of Options- ',
					app.options.length,
					' '
				)
			) : React.createElement(
				'p',
				null,
				' No options '
			)
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
				{ onClick: '' },
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

appRender();
