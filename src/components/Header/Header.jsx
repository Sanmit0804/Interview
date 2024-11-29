import React from 'react';
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { RiContactsBook3Line } from "react-icons/ri";


const Header = () => {
  return (
    <header className='header'>
      <div className="logo">SPRIGSTACK</div>
      <div className="search-container">
      <CiSearch/>
      <input type="text" placeholder='Enter Keywords' className='search-bar'/>
      </div>
      <div className="nav-buttons">
        <div className="new-contacts">
        <IoIosContact/>
        <button>New Contacts</button>
        </div>
        <div className='all-contacts'>
        <RiContactsBook3Line/>
        <button>All Contacts</button>
        </div>
      </div>
      <div className="profile">
        <span>Florida Manager</span>
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" alt="Profile Pic" className='profile-pic' />
      </div>
    </header>
  )
}

export default Header
