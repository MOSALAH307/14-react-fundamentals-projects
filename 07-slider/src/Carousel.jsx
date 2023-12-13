import { useEffect, useState } from "react";
import { list, longList, shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevPerson = () => {
    setCurrentPerson((prevOrder) => {
      const newOrder = (prevOrder - 1 + people.length) % people.length;
      return newOrder;
    });
  };

  const nextPerson = () => {
    setCurrentPerson((prevOrder) => {
      const newOrder = (prevOrder + 1) % people.length;
      return newOrder;
    });
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextPerson();
    }, 2000);

    return () => clearInterval(autoPlay);
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index === currentPerson ? 1 : 0,
              visibility: index === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" type="button" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
      <button className="next" type="button" onClick={nextPerson}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
