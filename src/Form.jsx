import { useState } from "react";

export default function Form({ handleNewItem }) {

    const [description, setDesc] = useState("");
    const [quantity, setQuantity] = useState(1);
  
  
    function formSubmitHandle(e) {
      e.preventDefault()
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() }
      console.log(newItem)
      setDesc('')
      setQuantity(1)
  
      handleNewItem(newItem)
  
    }
    return <form className="add-form" onSubmit={formSubmitHandle}>
      <h3>What do you need for 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num =>
          <option value={num} key={num}>
            {num}
          </option>)}
      </select>
      <input type="text" placeholder="Enter item here..." value={description} onChange={(e) => setDesc(e.target.value)} />
      <button>Add</button>
    </form>
  }