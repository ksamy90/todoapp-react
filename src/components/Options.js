import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        remove all
      </button>
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

export default Options;
