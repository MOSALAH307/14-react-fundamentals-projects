import { useState } from "react";
import Question from "./Question";
import data from "./data";

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  const showInfoHandler = (id) => {
    // to hide info
    if (id === activeId) {
      setActiveId(null);
    }
    // to show info
    else {
      setActiveId(id);
    }
  };
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((question) => (
        <Question
          key={question.id}
          {...question}
          activeId={activeId}
          toggleInfo={showInfoHandler}
        />
      ))}
    </section>
  );
};

export default Questions;
