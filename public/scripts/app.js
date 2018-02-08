'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.title = 'Indecision';
        _this.message = 'Hello Message';
        _this.state = {
            options: ['Option A', 'Option B', 'Option C']
        };
        _this.btnLbl = 'What should I do ?';
        _this.formLbl = 'Add Option';
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.onClickAction = _this.onClickAction.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'onClickAction',
        value: function onClickAction() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            console.log(randomNum);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {

            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(option) {

            this.setState(function (prevState) {
                options: prevState.options.push(option);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title, message: this.message }),
                React.createElement(Action, { lbl: this.btnLbl,
                    hasOptions: this.state.options.length > 0,
                    pickOption: this.onClickAction }),
                React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOption, { formLbl: this.formLbl, handleSubmit: this.handleSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
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
                    ' ',
                    this.props.title,
                    ' '
                ),
                React.createElement(
                    'h2',
                    null,
                    ' ',
                    this.props.message,
                    ' '
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.pickOption, disabled: !this.props.hasOptions },
                    ' What should I do ?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
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
                    this.props.options.map(function (option) {
                        console.log('called');
                        return React.createElement(Option, { key: option, optionName: option });
                    })
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveAll },
                    'Remove All Options '
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option(props) {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                { key: this.props.optionName },
                ' ',
                this.props.optionName,
                ' '
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.handleOnSubmit = _this6.handleOnSubmit.bind(_this6);
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.ipText.value.trim();
            if (option) {
                this.props.handleSubmit(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleOnSubmit },
                    React.createElement('input', { name: 'ipText', type: 'text' }),
                    React.createElement(
                        'button',
                        null,
                        ' ',
                        this.props.formLbl,
                        '  '
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
