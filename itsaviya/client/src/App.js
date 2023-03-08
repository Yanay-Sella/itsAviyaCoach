import { Route, Routes } from "react-router-dom";

import Page from "./pages/Page.jsx";
import Home from "./pages/home/Home.jsx";
import Blog from "./pages/blog/Blog.jsx";
import PostPage from "./pages/blog/PostPage.jsx";
import NewPost from "./pages/blog/NewPost.jsx";

import ProtectedRoutes from "./ProtectedRoutes.jsx";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F6F6F4",
    },
    secondary: {
      main: "#d5bdaf",
    },
    info: {
      main: "#434337",
    },
  },
});

function App() {
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/home" element={<Page children={<Home />} />} />

          {/* blog */}
          <Route exact path="/blog" element={<Page children={<Blog />} />} />
          <Route
            path="blog/:blogName"
            element={<Page children={<PostPage />} />}
          />

          {/* ~!~should not be accessible to anyone~!~ */}
          <Route element={<ProtectedRoutes />}>
            <Route path="blog/new" element={<Page children={<NewPost />} />} />
          </Route>

          {/* 404 page not found */}
          {/* <Route path="*" element={<Missing />} /> */}
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
