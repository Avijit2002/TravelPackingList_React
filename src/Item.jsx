

export default function Item({ data, handleDeleteItem, onPacked }) {
    return (
      <li>
        <input type="checkBox" value={data.packed} onChange={() => { onPacked(data.id) }} />
        <span style={data.packed ? { textDecoration: "line-through" } : {}}>
          {data.quantity} {data.description}
        </span>
        <div onClick={() => handleDeleteItem(data.id)}>❌</div>
      </li>)
  }