import React from "react";
import "./App.css";

export const Item = props => {
  const onClickAdd = () => {
    props.addInventory(props.item);
  };
  return (
    <div className="item-container">
      <div className="item-head">
        <div className="item-name">{props.item.name}</div>
        <button onClick={onClickAdd}>Add</button>
      </div>
      <div className="item-details">
        <div className="item-section">{props.item.section}</div>
        <div className="item-id">{props.item.id}</div>
      </div>
    </div>
  );
};
