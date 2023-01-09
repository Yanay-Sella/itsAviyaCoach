import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/blog" element={<h1>blogs</h1>} />
      </Routes>
    </div>
  );
}

export default App;
