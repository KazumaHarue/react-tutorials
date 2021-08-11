import React from 'react';

const style = {
  marginLeft: "46%",
  fontSize: "120px",
  height: "150px"
}

const Hands = (props) => (
  <h1 style={style}>{props.Hand}</h1>
);

export default Hands;