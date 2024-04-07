import React, { useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { title: "mouse", quantity: 5 },
    { title: "keyboard", quantity: 1 },
    { title: "watch", quantity: 1 },
  ]);

  const [inputValue, setInputValue] = useState({
    title: "watch",
    quantity: 0,
  });

  const [upateItemIndx, setupateItemIndx] = useState(null);

  //   const [title, setTitle] = useState("");
  //   const [quantity, setquantity] = useState(second);
  //   const [price, setprice] = useState(second);
  //   const [description, setdescription] = useState(second);

  const handleSubmit = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let quantity = e.target.quantity.value;

    let updatedItems;
    /* code here for update */

    if (upateItemIndx != null) {
      // update existing
      updatedItems = [...items];
      updatedItems[upateItemIndx].title = inputValue.title;
      updatedItems[upateItemIndx].quantity = inputValue.quantity;
    } else {
      // create new.
      updatedItems = [...items, { title, quantity }];
      // setItems((prevItems) => [...prevItems, { title, quantity }]);
    }

    setItems(updatedItems);
    setupateItemIndx(null);
    setInputValue({
      title: "",
      quantity: "",
    });
  };

  const updateItem = (idx, title, quantity) => {
    console.log(title, quantity);
    // document.getElementById("title").value = title;
    // document.getElementById("quantity").value = quanity;
    setupateItemIndx(idx);
    setInputValue({
      title,
      quantity,
    });
  };

  return (
    <>
      <p>state-inputValue:{JSON.stringify(inputValue)}</p>
      <p>state-upateItemIndx:{upateItemIndx}</p>
      <div>ShoppingList</div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          value={inputValue.title}
          onChange={(e) => {
            setInputValue({
              ...inputValue,
              title: e.target.value,
            });
          }}
          type="text"
          name="title"
          placeholder="item"
        />
        <input
          value={inputValue.quantity}
          id="quantity"
          type="text"
          name="quantity"
          placeholder="quantity"
          onChange={(e) => {
            setInputValue({
              ...inputValue,
              quantity: e.target.value,
            });
          }}
        />
        <input type="submit" value={"submit"} />
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>quanity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      updateItem(index, item.title, item.quantity);
                    }}
                  >
                    edit
                  </button>{" "}
                  <button>delete</button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
