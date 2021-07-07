import React from "react";

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        className="button button--link"
        onClick={() => {
          props.removeItem(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
