import { useParams } from "react-router-dom";
import Post from "../Components/Post";
import "../style/default.css";
const PostPage = () => {
  const { category, name } = useParams();

  if (!category || !name) return <div>잘못된 접근입니다.</div>;

  const [year, month, day, ...rest] = name.split("-");
  const date = `${year}-${month}-${day}`;
  const title = rest.join("-");

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <div className="flex-column-container" style={{ height: 40 }}>
        <h1 className="page-title">{title}</h1>
        <p className="written-date">{date}</p>
      </div>
      <Post category={category} fileName={name} />
    </div>
  );
};

export default PostPage;
