'use strict';

<<<<<<< HEAD
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
=======
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
>>>>>>> origin/master

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

<<<<<<< HEAD
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Indecision'
        ),
        React.createElement(
          'h2',
          null,
          ' Hello Message '
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          null,
          ' What should I do ?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'ol',
          null,
          React.createElement(
            'li',
            null,
            'Option1 '
          ),
          React.createElement(
            'li',
            null,
            'Option2 '
          ),
          React.createElement(
            'li',
            null,
            'Option3 '
          ),
          React.createElement(
            'li',
            null,
            'Option4 '
          )
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: '' },
          React.createElement(
            'button',
            null,
            ' AddOption '
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var jsx = React.createElement(
  'div',
  null,
  React.createElement(Header, null),
  React.createElement(Action, null),
  React.createElement(Options, null),
  React.createElement(AddOption, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
=======
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Person Class
var Person = function () {

	// Person Constructor
	function Person() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
		var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Person);

		this.name = name;
		this.age = age;
	}

	//super greeting method


	_createClass(Person, [{
		key: 'getGreeting',
		value: function getGreeting() {
			console.log('Hey This is ' + this.name);
		}

		//super description method

	}, {
		key: 'getDescription',
		value: function getDescription() {
			console.log(this.name + ' is of Age - ' + this.age);
		}
	}]);

	return Person;
}();

// Student Class


var Student = function (_Person) {
	_inherits(Student, _Person);

	//Child Construtor method
	function Student(name, age, major) {
		_classCallCheck(this, Student);

		var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

		_this.major = major;
		return _this;
	}

	//Check for major


	_createClass(Student, [{
		key: 'hasMajor',
		value: function hasMajor() {
			return !!this.major;
		}

		//overriden description method

	}, {
		key: 'getDescription',
		value: function getDescription() {
			var supGreet = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
			if (this.hasMajor()) {
				supGreet = supGreet + (' with a major - ' + this.major);
			}
			return supGreet;
		}
	}]);

	return Student;
}(Person);

// Traveler Class


var Traveler = function (_Person2) {
	_inherits(Traveler, _Person2);

	function Traveler(name, age, supPlace) {
		_classCallCheck(this, Traveler);

		var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

		_this2.supPlace = supPlace;
		return _this2;
	}

	_createClass(Traveler, [{
		key: 'getGreeting',
		value: function getGreeting() {
			_get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
			if (!!this.supPlace) {
				console.log('I\'m visting from ' + this.supPlace + '.');
			}
		}
	}]);

	return Traveler;
}(Person);

var me = new Person('Gautham', 10);
console.log(me.getDescription());
var stud = new Student('Sunny', 10, 'CSE');
console.log(stud.getDescription());
var trvlr = new Traveler('Amul', 26, 'Michigan');
trvlr.getGreeting();
>>>>>>> origin/master
