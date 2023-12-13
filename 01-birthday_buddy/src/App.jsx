import { useState } from "react";
import { data } from "./components/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);

  const clearHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearHandler}>
          Claer All
        </button>
      </section>
    </main>
  );
}

export default App;
