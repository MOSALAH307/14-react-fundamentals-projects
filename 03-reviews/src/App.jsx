import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPersonHandler = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const surpriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % people.length;
    }
    setIndex(randomIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPersonHandler}>
            <FaChevronLeft />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={nextPersonHandler} />
          </button>
        </div>
        <button className="btn" onClick={surpriseHandler}>
          surprise me
        </button>
      </article>
    </main>
  );
}

export default App;
