import { useParams } from "react-router-dom";
import Post from "../Components/Post";

/**
 * matching URL test
 */
const PostPage = () => {
  const { category, name } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>포스트 페이지</h2>
      <p>category: {category}</p>
      <p>name: {name}</p>
    </div>
  );
};

export default PostPage;
