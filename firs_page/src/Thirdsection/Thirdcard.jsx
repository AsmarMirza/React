import React from "react";

function Thirdcard(props) {
  return (
    <div className="cardContainer">
      <div className="thirdIcon">{props.icon}</div>
      <div className="cardText">
        <p className="thirdCardHeader">On Time Service</p>
        <p className="thirdCardContent">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <span className="thirdSpan">Read more</span>
      </div>
    </div>
  );
}

export default Thirdcard;
