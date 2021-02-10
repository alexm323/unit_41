import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogDetails({dog}) {

//   if (!dog) return <Redirect to="/dogs"/>

  return (
      <div>
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((funFact, i) => (
            <li key={i}>{funFact}</li>
          ))}
        </ul>
        <Link to="/dogs">Take me Home</Link>
      </div>
  );
}

export default DogDetails;
