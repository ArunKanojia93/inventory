import React from "react";
import "./App.css";

export const AddToInventory = props => {
  console.log(props.inventorySections);
  return Object.entries(props.inventorySections).map(([sectionName, items]) => {
    return (
      <div className="inventory-section" key={sectionName}>
        <h4>{sectionName}</h4>
        <div>
          {Object.entries(
            items.reduce((prev, next) => {
              if (prev[next.name]) {
                prev[next.name] += 1;
                return prev;
              }
              prev[next.name] = 1;
              return prev;
            }, {})
          ).map(([name, count]) => {
            return (
              <div className="inventory-item" key={name}>
                {name} x {count}
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};
