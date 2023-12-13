import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(color);
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={submitHandler}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
