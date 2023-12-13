import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ id, title, info, activeId, toggleInfo }) => {
  // to control showing info and button
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="btn" onClick={() => toggleInfo(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
