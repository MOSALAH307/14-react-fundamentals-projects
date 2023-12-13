import CartContainer from "./CartContainer";
import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";

function App() {
  const { loading } = useGlobalContext();

  if (loading === true) {
    return <div className="loading"></div>;
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
