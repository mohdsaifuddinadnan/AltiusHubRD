import React from 'react'

export const UpdateItem = () => {
  return (
    <>
    <form>
        <label>Item Name:</label>
        <input type="text" name="item_name" required/>
        <br/>
        <label>Quantity:</label>
        <input type="number" name="quantity" required/>
        <br/>
        <label>Price:</label>
        <input type="number" name="price" required/>
        <br/>
        <button type="submit">Add Item</button>
        
    </form>
    </>
  )
}
