import React, { useState, useEffect, useRef } from "react";
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

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setsidepanel(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  })

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
        <div className="sidebar_menu" style={{ left: sidepanel ? "0px" : "-280px" }} ref={menuRef}>
          <ul className="menu">

            <a href="/Login">
              <li>
                <img src={login} alt="Login" />
                Login/Sign-Up
              </li>
            </a>

            <a href="/">
              <li>
                <img src={home} alt="Home" />
                Home
              </li>
            </a>

            <a href="/">
              <li>
                <img src={bookmark} alt="Bookmark" />
                Bookmark
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
