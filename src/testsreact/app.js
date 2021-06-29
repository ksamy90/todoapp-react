let app = {
  title: "Todo App",
  subtitle: "planning for the projects",
  options: [], // app.options.length
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

function onRemoveAll() {
  app.options = [];
  render();
}

const showOption = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
  alert(option);
};

const appRoot = document.getElementById("app");

const render = () => {
  let data = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button onClick={showOption}>what should i do?</button>
      <button onClick={onRemoveAll}>remove all</button>
      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" autoComplete="off" />
        <button>add option</button>
      </form>
    </div>
  );
  ReactDOM.render(data, appRoot);
};

render();

// visibility.js
// let visibility = false

// create a render function(change visibility from false to true and true to false)
// render function should include jsx(div) -> h1(Visibility Toggle)
// create a button below h1(onClick event called --> toggleVisibility)
// content of button should be if visible(hide details), if invisible(show details)
// <p>here are your details</p>
