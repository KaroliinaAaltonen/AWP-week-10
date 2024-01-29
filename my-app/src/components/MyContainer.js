import React, { useState } from 'react';
import MyList from './MyList';

const MyContainer = () => {
  const [items, setItems] = useState([
    { id: "1", text: "item 1", clicked: false },
    { id: "2", text: "item 2", clicked: false },
  ]);

  const updateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  };

  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (newItemText.trim() !== '') {
      const newItem = {
        id: String(Date.now()),
        text: newItemText.trim(),
        clicked: false,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setNewItemText('');
    }
  };

  return (
    <div>
      <MyList
        updateItem={updateItem}
        header="Really epic list component"
        items={items}
      />

      <textarea
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        placeholder="Enter new item text"
      />

      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default MyContainer;
