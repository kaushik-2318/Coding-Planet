import React, { useState } from "react";
import "./CSS/navbar.css";
import logo from "../Assest/Logo.png";
import menubar from "../Assest/Icons/menu-fill.png";
import closebutton from "../Assest/Icons/close-fill.png";
import login from "../Assest/Icons/login-box-fill.png";
import bookmark from "../Assest/Icons/bookmark-fill.png";
import search from "../Assest/Icons/search.svg";
import home from "../Assest/Icons/home-2-fill.svg";

function NavBar() {
  const [sidepanel, setsidepanel] = useState(false);
  const toggle = () => {
    setsidepanel(!sidepanel);
  };
  const [searchbar, setsearchbar] = useState('')
  const quicksearch = (e) => {
    setsearchbar(e.target.value)
    console.log(e.target.value)
  }
  return (
    <>
      <nav>
        <div className="sidepanel">
          <img src={!sidepanel ? menubar : closebutton} alt="hammburger" onClick={toggle} />
        </div>

        <div className="title">
          <a href="/">
            Coding Planet
            <span>
              <img className="logo" src={logo} alt="Logo" />
            </span>
          </a>
        </div>
        <div className="search">
          <input className="search_bar" onChange={quicksearch} placeholder="Quick Search" value={searchbar} type="search" />
          <img className="search_icon" src={search} alt="Search" />
        </div>
        <div>
          <ul className="link">
            <li className="link1">
              <a href="/Login">Login/Sign-Up</a>
            </li>
            <li className="link2">
              <a href="/">Home</a>
            </li>
            <li className="link3">
              <a href="/">Bookmark</a>
            </li>
          </ul>
        </div>
      </nav>




      <div className="main_box">
        <div
          className="sidebar_menu"
          style={{ left: sidepanel ? "0px" : "-280px" }}
        >
          <ul className="menu">
            <li>
              <img src={login} alt="Login" />
              <a href="/Login">Login/Sign-Up</a>
            </li>

            <li>
              <img src={home} alt="Home" />
              <a href="/">Home</a>
            </li>

            <li>
              <img src={bookmark} alt="Bookmark" />
              <a href="/">Bookmark</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
