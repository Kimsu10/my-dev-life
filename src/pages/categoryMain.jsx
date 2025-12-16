import { useParams } from "react-router-dom";
import Header from "../Components/header/Header";
import "../style/component/category.css";
import { useEffect, useState } from "react";

const CategoryMain = () => {
  const { category, topic } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const url = "https://api.github.com/repos/Kimsu10/my-dev-life/contents/src/posts/html"; //요청 성공 url
    // http://localhost:3000/develop/basic/html
    const url = `https://api.github.com/repos/Kimsu10/my-dev-life/contents/src/posts/${topic}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const mdFiles = data
          ?.filter((item) => item.type === "file" && item.name.endsWith(".md"))
          .map((item) => ({
            name: item.name.replace(".md", ""),
          }));

        console.log(mdFiles); // 추후 받아온 배열들을 DB 에 저장해서 사용하자.(토큰 없이 1시간에 60회 제한)
        setPosts(mdFiles || []);
      })
      .catch(console.error);
  }, []);

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
                <div key={post.name} className="post-item">
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
