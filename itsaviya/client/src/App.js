import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import PostPage from "./pages/blog/PostPage.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="blog/:blogName" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
