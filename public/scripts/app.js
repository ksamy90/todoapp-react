"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "this option already exists";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleRemoveOption",
    value: function handleRemoveOption(itemToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return itemToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNumber];
      alert(option);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var fetchTodos = localStorage.getItem("options");
        var todoItems = JSON.parse(fetchTodos);
        if (todoItems) {
          this.setState(function () {
            return {
              options: todoItems
            };
          });
        }
      } catch (error) {
        console.log(error, "no todos were found");
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var todoItem = JSON.stringify(this.state.options);
        localStorage.setItem("options", todoItem);
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render elements");
      var title = "TodoApp React";
      var subtitle = "awesome react todos";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickOption: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleRemoveAll,
          handleDeleteItem: this.handleRemoveOption
        }),
        React.createElement(AddOption, { addOption: this.handleAddOption })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.pickOption },
      "What should I do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "remove all"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        removeItem: props.handleDeleteItem
      });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          props.removeItem(props.optionText);
        }
      },
      "remove"
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      optionValue: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var value = this.props.addOption(option);
      this.setState(function () {
        return {
          optionValue: value
        };
      });
      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.optionValue && React.createElement(
          "p",
          null,
          this.state.optionValue
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option", autoComplete: "off" }),
          React.createElement(
            "button",
            null,
            "add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("app"));
