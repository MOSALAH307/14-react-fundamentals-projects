import { Fragment } from "react";
import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidbar";

function App() {
  return (
    <Fragment>
      <Home />
      <Sidebar />
      <Modal />
    </Fragment>
  );
}

export default App;
