import React from "react";
import { Link } from "react-router-dom";

// take in 3 props so we can check if a color exists and what the values are for tyhat object
function Color({hex, color, history}) {
  if (!hex) {
    //   takes us back to the colors
    history.push("/colors");
  }

  return (
    //   our styling is all just based on the hex color
    <div className="Color" style={{ backgroundColor: hex }}>

      <p>this is {color}.</p>
      <p>You need not follow but you must witness!</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
