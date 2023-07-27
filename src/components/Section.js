import React from "react";
// import styled from "styled-components";
import "./Section.css";
import Fade from 'react-reveal/Fade';

function Section(props) {
  const { BackgroungImage } = props;
  return (
    <div
      className="wrap"
      style={{
        backgroundImage: `url("/images/${BackgroungImage}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        /* other styles here */
      }}
    >
   
    <Fade bottom>
      <div className="itemText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      </Fade>
      <div className="buttons">
      <Fade bottom>
        <div className="buttonGroup">
          <div className="leftBtn">{props.LeftBtnText}</div>
          {props.rightBtnText && (
            <div className="rightBtn"> {props.rightBtnText} </div>
          )}
        </div>
        </Fade>
        <img src="/images/down-arrow.svg" alt="" className="downArrow" />
      </div>
    </div>
  );
}

export default Section;
