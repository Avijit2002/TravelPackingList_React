import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import Packinglist from "./PackingList";
import Stats from "./Stats";




export default function App() {

  const [items, setItem] = useState([])

  function onNewItem(newItem) {
    setItem(items => [...items, newItem])
  }

  function onDeleteItem(id) {
    setItem(items => items.filter(x => x.id !== id))
  }

  function onPacked(id) {
    setItem(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function onClear() {
    const confirmed = window.confirm("You are deleting packed items from list !!!")
    if(confirmed) setItem(items => items.filter(item=> item.packed===false))
  }
  function onClearList() {
    const confirmed = window.confirm("You are deleting all items !!!")
    if(confirmed) setItem([])
  }

  return <div className="app">
    <Logo />
    <Form handleNewItem={onNewItem} />
    <Packinglist 
          list={items} 
          handleDeleteItem={onDeleteItem} 
          onPacked={onPacked}
          onClear={onClear}
          onClearList={onClearList} />
    <Stats list={items}/>
  </div>
}







