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
            options: ['Option A', 'Option B', 'Option C'],
            errormsg: ''
        };
        _this.btnLbl = 'What should I do ?';
        _this.formLbl = 'Add Option';
        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.onClickAction = _this.onClickAction.bind(_this);
        _this.handelDeleteOption = _this.handelDeleteOption.bind(_this);
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
        key: 'handelDeleteOption',
        value: function handelDeleteOption(optionDel) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionDel !== option;
                    })
                };
            });
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
            if (!option) {
                this.setState(function (prevState) {
                    return { errormsg: 'Please enter a valid Option' };
                });
            } else {
                if (this.state.options.length > 0 & this.state.options.includes(option)) {
                    this.setState(function (prevState) {
                        return { errormsg: 'Option Already Exists' };
                    });
                } else {
                    this.setState(function (prevState) {
                        return {
                            options: prevState.options.concat(option),
                            errormsg: ''
                        };
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title,
                    message: this.message }),
                React.createElement(Action, { lbl: this.btnLbl,
                    hasOptions: this.state.options.length > 0,
                    pickOption: this.onClickAction }),
                React.createElement(Options, { handelDeleteOption: this.handelDeleteOption,
                    errormsg: this.state.errormsg,
                    options: this.state.options,
                    handleRemoveAll: this.handleRemoveAll }),
                React.createElement(AddOption, { formLbl: this.formLbl,
                    handleSubmit: this.handleSubmit })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title,
            ' '
        ),
        React.createElement(
            'h2',
            null,
            ' ',
            props.message,
            ' '
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.pickOption, disabled: !props.hasOptions },
            ' What should I do ?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            console.log('called');
            return React.createElement(Option, { key: option, optionName: option, handelDeleteOption: props.handelDeleteOption });
        }),
        props.errormsg && React.createElement(
            'p',
            null,
            ' ',
            props.errormsg,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: props.handleRemoveAll },
            'Remove All Options '
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { key: props.optionName },
            ' ',
            props.optionName,
            '  ',
            React.createElement(
                'button',
                { onClick: function onClick(e) {
                        props.handelDeleteOption(props.optionName);
                    } },
                'Remove'
            )
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleOnSubmit',
        value: function handleOnSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.ipText.value.trim();
            this.props.handleSubmit(option);
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
