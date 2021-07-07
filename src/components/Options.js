import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          remove all
        </button>
      </div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
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
