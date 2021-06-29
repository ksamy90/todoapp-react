let count = 0;
const addOne = () => {
  count++;
  countNumbers();
};
const minusOne = () => {
  count--;
  countNumbers();
};
const reset = () => {
  count = 0;
  countNumbers();
};

const appRoot = document.getElementById("app");

const countNumbers = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

countNumbers();
