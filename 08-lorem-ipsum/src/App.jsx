import { useRef, useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

function App() {
  const [text, setText] = useState([]);
  // const [inputCount, setInputCount] = useState(1);
  const inputCount = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // const input = parseInt(inputCount);
    // setText(data.slice(0, input));
    // console.log(typeof inputCount.current.value);
    const input = parseInt(inputCount.current.value);
    setText(data.slice(0, input));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="9"
          ref={inputCount}
          // value={inputCount}
          // onChange={(event) => setInputCount(event.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
