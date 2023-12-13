import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

function App() {
  const url = "http://course-api.com/react-tours-project";

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("couldn't fetch tours!!!");
      }

      const toursData = await response.json();
      setTours(toursData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      // console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // if (isLoading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

  const removeTourHandler = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (!isLoading && !error && tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn refresh" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {!isLoading && error && <h1>{error}</h1>}
      {isLoading && !error && <Loading />}
      {!isLoading && !error && (
        <Tours tours={tours} removeTour={removeTourHandler} />
      )}
    </main>
  );
}

export default App;
