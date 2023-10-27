import React from "react";
import "../Components/CSS/content.css";
import Contentcard from "./Contentcard";
import form from "../Assest/Images/blackFox.jpg";
import button from "../Assest/Images/Buttons.jpg"
import muchmore from "../Assest/Images/MuchMore.jpg"
import Carousel from './Carousel';


function Content() {
  return (
    <>
    <Carousel/>
      <div className="content">
        <Contentcard title="Forms" body="Here you will find different type of awesome LOGIN and SIGNUP form that help you to make your webpage more dynamic and awesome." lang="They are made by using HTML CSS JAVASCRIPT and REACT." before="right" img={form} flexdirection="row" width="139px" height="410px" tranform="translateX(-68px) rotate(340deg)" borderradius="0px 40px 40px 0px" links="form"/>

        <Contentcard title="Buttons" body="Here you will find awesome BUTTONS with awesome HOVER EFFECT, NEON BUTTONS." lang="Most of them are made using HTML CSS." before="left" img={button} flexdirection="row-reverse" width="139px" height="410px"  tranform="translateX(-68px) rotate(340deg)" borderradius="40px 0px 0px 40px" links="button"/>

        <Contentcard title="& Much More" body="Here you will find awesome BUTTONS with awesome HOVER EFFECT, NEON BUTTONS." lang="Most of them are made by using HTML CSS JAVASCRIPT and REACT." before="right" img={muchmore} flexdirection="row" width="139px" height="410px" tranform="translateX(-68px) rotate(340deg)" borderradius="0px 40px 40px 0px" links="MuchMore"/>
      </div>
    </>
  );
}

export default Content;
