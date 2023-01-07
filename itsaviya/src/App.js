import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
