import React from 'react'
import "./Header.css";
import logo from "../../assets/netflix.png"
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoMdArrowDropdown } from 'react-icons/io';
function Header() {
  return (
    <div>
     
      <div className="header-outer-container">
        <div className="header-container">
          <div className="header-left">
            <ul>
              <li>
                <img src={logo} alt="netflix logo" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <IoSearchOutline />
              </li>
              <li>
                <IoMdNotificationsOutline />
              </li>
              <li>
                <MdOutlineAccountBox />
              </li>
              <li>
                <IoMdArrowDropdown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
