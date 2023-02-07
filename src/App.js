import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import CustomNav from "./components/CustomNav";
import Home from "./components/Home";

function App() {
  return (
    <>
      <CustomNav claim="Best pasta in town!" />
      <Home />
    </>
  );
}

export default App;
