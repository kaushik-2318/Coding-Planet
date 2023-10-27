import React, { useState } from "react";
import logo from "../Assest/Logo.png";
import "../Components/CSS/footer.css";
import linkedin from "../Assest/Icons/linkedin-box-line.svg";
import instagram from "../Assest/Icons/instagram-line.svg";
import github from "../Assest/Icons/github-line.svg";

function Footer() {
  const [expand, setexpand] = useState(false);
  const follow = () => {
    setexpand(!expand);
  };
  return (
    <>
      <footer>
        <div className="upper">
          <img className="footerlogo" src={logo} alt="logo" />
          <div className="follow">
            <button className="btn" onClick={follow}>
              Follow Me
            </button>
            <ul className="icon">
              <li className={expand ? "item i1" : "item i11"}>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li className={expand ? "item i2" : "item i22"}>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/kaushik-verma-2b5515254"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className={expand ? "item i3" : "item i33"}>
                <a target="blank" href="https://github.com/kaushik-2318">
                  <img src={github} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="lower">
          <ul>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Privacy and Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
