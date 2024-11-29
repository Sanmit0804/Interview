import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="social-icons">
          <button>FB</button>
          <button>X</button>
          <button>G+</button>
          <button>Li</button>
        </div>
        <div>
          <img src="" alt="Company Logo" />
        </div>
        <div className="policy">
        ©2024 Privacy Policy | Site Map
        </div>
        <div className="end">
        The Small Business CRM Trusted by IOWs of entrepreneurs.
        </div>
        <div className="gototop">
          <button>^</button>
        </div>
    </div>
  )
}

export default Footer
