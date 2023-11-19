import React, { useState, useEffect } from 'react'
import './CSS/contentcard.css'
import { Link } from 'react-router-dom'

function Contentcard(props) {
  const [width, setwidth] = useState(getinnerwidth());
  useEffect(() => {
    function handleWindowResize() {
      setwidth(getinnerwidth());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  })


  return (
    <>
      <div className="c" style={{ flexDirection: width.innerWidth < 901 ? "column-reverse" : props.flexdirection }}>
        <div className="text">
          <p>{props.title}</p>
          <p>
            {props.body}
          </p>
          <p>
            {props.lang}
            <br />
            <Link to={props.links}><button>View More</button></Link>
          </p>
        </div>
        <div className={props.before}>
          <img src={props.img} style={{ borderRadius: width.innerWidth < 901 ? "4vh 4vh 0px 0px" : props.borderradius }} alt="" />
        </div>
      </div>
    </>
  )
}

const getinnerwidth = () => {
  const { innerWidth } = window;
  return { innerWidth };
}

export default Contentcard;
