import React from "react";
import data from "../../data/data";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();

  const handleClick = (title) => {
 const encodedTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
    navigate(`/details/${encodedTitle}`);
  };

  return (
    <div className="Cardcontainer">
      {data.map((item, i) => (
        <div
          className={`card ${item.difficulty.toLowerCase()}`}
          key={i}
          onClick={() => handleClick(item.title)}
        >
          <h4>{item.title}</h4>
          <div className="difficulty">{item.difficulty}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
