import React from 'react';

const style = {
  fontSize: "80px",
  paddingLeft: "12%",
  paddingRight: "12%"
}

const SelectButton = (props) => (
  <button type="button" className="btn btn-primary" onClick={() => props.game()} style={style}>{props.value}</button>
);

export default SelectButton;