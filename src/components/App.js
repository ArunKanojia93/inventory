import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./SearchBar";
import { Item } from "./Item";
import { AddToInventory } from "./AddToInventory";

const itemList = [
  {
    name: "salt",
    id: 2501,
    section: "kirana"
  },
  {
    name: "chilly",
    id: 904,
    section: "kirana"
  },
  {
    name: "sugar",
    id: 1701,
    section: "kirana"
  },
  {
    name: "tea",
    id: 902,
    section: "kirana"
  },
  {
    name: "coffee",
    id: 901,
    section: "kirana"
  },
  {
    name: "shampoo",
    id: 3305,
    section: "cosmetics"
  },
  {
    name: "cream",
    id: 3304,
    section: "cosmetics"
  },
  {
    name: "powder",
    id: 3303,
    section: "cosmetics"
  },
  {
    name: "deodorant",
    id: 3307,
    section: "cosmetics"
  },
  {
    name: "paste",
    id: 3306,
    section: "cosmetics"
  },
  {
    name: "chocolate",
    id: 1704,
    section: "confectionary"
  },
  {
    name: "pasta",
    id: 1902,
    section: "confectionary"
  },
  {
    name: "noodles",
    id: 1903,
    section: "confectionary"
  },
  {
    name: "bread",
    id: 1905,
    section: "confectionary"
  },
  {
    name: "juice",
    id: 2009,
    section: "confectionary"
  }
];

const App = () => {
  const [items = itemList, setItems] = useState();
  const [inventory = [], setInventory] = useState();

  const onFormSubmit = value => {
    const filteredItems = itemList.filter(item => {
      return (
        value === item.name ||
        value === item.id.toString() ||
        value === item.section
      );
    });
    setItems(filteredItems);
  };

  const addInventory = item => {
    const itemsList = inventory.concat(item);
    setInventory(itemsList);
  };

  const inventorySections = inventory.reduce((prev, next) => {
    if (prev[next.section]) {
      prev[next.section].push(next);
      return prev;
    }
    prev[next.section] = [next];
    return prev;
  }, {});

  return (
    <div className="container">
      <SearchBar onFormSubmit={onFormSubmit} />
      <h2 style={{ textAlign: "center" }}>Inventory</h2>
      <div className="inventory">
        <AddToInventory inventorySections={inventorySections} />
      </div>
      <div className="container-item">
        {items.map(item => (
          <Item
            key={item.id.toString()}
            item={item}
            addInventory={addInventory}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
