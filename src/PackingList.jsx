import Item from "./Item";
import { useState } from "react";

export default function Packinglist({ list, handleDeleteItem, onPacked,onClear,onClearList }) {
    const [sortBy,setSortBy] = useState("input");
    //console.log(list)
    let sortedList;
  
    if(sortBy==="input") sortedList=list;
    else if(sortBy==="desc") sortedList = list.slice().sort((a,b)=> a.description.localeCompare(b.description))
    else if(sortBy==="packed") sortedList = list.slice().sort((a,b)=> a.packed - b.packed)
  
    return <div className="list">
      <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by already packed</option>
        </select>
        <button onClick={onClear}>Clear Packed items</button>
        <button onClick={onClearList}>Clear List</button>
      </div>
      <ul >
        {sortedList.map((x) => <Item data={x} key={x.id} handleDeleteItem={handleDeleteItem} onPacked={onPacked} />)}
      </ul>
    </div>
  }