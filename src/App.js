import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PostWrapper from "./pages/PostWrapper";
import Home from "./pages/Home";
import CategoryMain from "./pages/categoryMain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/post/:category/:subCategory/:topic/:name"
          element={<PostWrapper />}
        />
        <Route
          path="/:category/:subCategory/:topic"
          element={<CategoryMain />}
        />
        <Route
          path="/:category/:subCategory/:topic"
          element={<CategoryMain />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
