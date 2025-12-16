import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PostPage from "./pages/PostPage";
import Home from "./pages/Home";
import CategoryMain from "./pages/categoryMain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:category/:name" element={<PostPage />} />
        <Route path="/develop/:category/:topic" element={<CategoryMain />} />
        <Route path="/devops/:category/:topic" element={<CategoryMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
