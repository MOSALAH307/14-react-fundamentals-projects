import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const showInfoHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 140)}...`}
          <button className="btn info-btn" onClick={showInfoHandler}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
