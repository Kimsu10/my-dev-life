import { useParams } from "react-router-dom";
import Post from "../Components/Post";

const PostPage = () => {
  const { category, name } = useParams();

  if (!category || !name) return <div>잘못된 접근입니다.</div>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2>📄 {name}</h2>
      <Post category={category} fileName={name} />
    </div>
  );
};

export default PostPage;
