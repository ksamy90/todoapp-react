class TodoApp extends React.Component {
  render() {
    const title = "TodoApp React";
    const subtitle = "awesome react todos";
    const options = ["thing one", "thing two", "thing three"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>Options component here</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component</div>;
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
