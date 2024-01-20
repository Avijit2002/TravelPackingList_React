

export default function Stats({list}) {
    const totalItem = list.length
    if(totalItem===0){
      return <p className="stats"><em>Start adding some item in packing list 🛍️</em></p>
    }
    const packedCount = list.filter(x=>x.packed===true).length;
    const percentPacked = Math.round((packedCount*100)/list.length);
    //console.log(percentPacked)
    return <footer className="stats">
      {percentPacked===100?
       <em>
        You got everything! Ready to go ✈️.
     </em>  : <em>
        You have {totalItem} items on your list and already packed {packedCount} ({percentPacked}%).
      </em> 
      }
      
    </footer>
  }