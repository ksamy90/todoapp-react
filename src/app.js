class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options: [],
    };
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handleRemoveOption(itemToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => itemToRemove !== option),
      };
    });
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  componentDidMount() {
    try {
      const fetchTodos = localStorage.getItem("options");
      const todoItems = JSON.parse(fetchTodos);
      if (todoItems) {
        this.setState(() => {
          return {
            options: todoItems,
          };
        });
      }
    } catch (error) {
      console.log(error, "no todos were found");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const todoItem = JSON.stringify(this.state.options);
      localStorage.setItem("options", todoItem);
    }
  }
  render() {
    console.log("render elements");
    const title = "TodoApp React";
    const subtitle = "awesome react todos";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickOption={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleRemoveAll}
          handleDeleteItem={this.handleRemoveOption}
        />
        <AddOption addOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pickOption}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>remove all</button>
      {props.options.map((option) => {
        return (
          <Option
            key={option}
            optionText={option}
            removeItem={props.handleDeleteItem}
          />
        );
      })}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={() => {
          props.removeItem(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      optionValue: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const value = this.props.addOption(option);
    this.setState(() => {
      return {
        optionValue: value,
      };
    });
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <div>
        {this.state.optionValue && <p>{this.state.optionValue}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" autoComplete="off" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
