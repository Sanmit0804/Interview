import React from 'react'
import "./Pagination.css";

const Pagination = () => {
  return (
    <div  className='pagination'>
        <select name="" id="">
            <option value="">30</option>
        </select>
        <div className="pages">
            <div>Previous</div>
            <button className='active'>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <div>Next</div>
        </div>
      
    </div>
  )
}

export default Pagination
