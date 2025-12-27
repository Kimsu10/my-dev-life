import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/header/Header";
import "../style/component/category.css";
import { useEffect, useState } from "react";

const CategoryMain = () => {
  const { category, subCategory, topic } = useParams();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!topic || !category || !subCategory) return;
    // 레포지토리 폴더명(대소문자)와 구조랑 반드시 일치해야함
    const url = `https://api.github.com/repos/Kimsu10/my-dev-life/contents/src/posts/${category}/${subCategory}/${topic}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setPosts([]);
          return;
        }

        const mdFiles = data
          .filter((item) => item.type === "file" && item.name.endsWith(".md"))
          .map((item) => ({
            name: item.name.replace(".md", ""),
          }));

        setPosts(mdFiles);
      })
      .catch(console.error);
  }, [category, subCategory, topic]);

  const parsePostName = (name) => {
    const [year, month, day, ...titleParts] = name.split("-");
    return {
      date: `${year}-${month}-${day}`,
      title: titleParts.join(" "),
    };
  };

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
          <div className="post-list">
            {posts.map((post) => {
              const { date, title } = parsePostName(post.name);
              return (
                <div
                  key={post.name}
                  className="post-item"
                  onClick={() =>
                    navigate(
                      `/post/${category}/${subCategory}/${topic}/${post.name}`
                    )
                  }
                >
                  <img
                    src={`/images/category/${topic}.png`}
                    alt={`${topic} thumbnail`}
                    className="topic-img"
                  />
                  <div>
                    <h2 className="post-title">{title}</h2>
                    <p className="post-date">{date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default CategoryMain;
