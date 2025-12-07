import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import PostPage from "./pages/PostPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:category/:name" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
