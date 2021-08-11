import React from 'react';

const style = {
  marginLeft: "25%",
  fontSize: "80px",
  height: "100px"
}

const Result = (props) => (
  <div>
    <h1 style={style}>{props.total}</h1>
    <h1 style={style}>{props.result}</h1>
  </div>
);

export default Result;