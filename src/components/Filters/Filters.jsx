import React from 'react'
import "./Filters.css";

const Filters = () => {
  return (
    <div className='filters'>
      <select>
        <option value="">Category</option>
      </select>
      <select>
        <option value="">Sub-Category</option>
      </select>
      <select>
        <option value="">Operator</option>
      </select>
      <select>
        <option value="">Value</option>
      </select>
      <button className='search-button'>Search</button>
    </div>
  )
}

export default Filters
