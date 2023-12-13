import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (newItemName.trim().length === 0) {
      toast.error("please enter item name");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          onChange={(e) => setNewItemName(e.target.value)}
          value={newItemName}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
