import { useParams } from "react-router-dom";
import Header from "../Components/header/Header";
import "../style/component/category.css";

const CategoryMain = () => {
  const { category, topic } = useParams();

  return (
    <>
      <Header />
      <main className="category-main">
        <section className="topic-title-container">
          <span className="topic-category">{category}</span>
          <h2 className="topic-title">{topic}</h2>
        </section>

        <section className="topic-content-container">
          <p> {topic} 관련 글 목록</p>
          {/* 동적으로 글이 생성되게 하기 */}
        </section>
      </main>
    </>
  );
};

export default CategoryMain;
