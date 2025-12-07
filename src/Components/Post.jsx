import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Markdown Rendering
 * @param {*} param
 * @returns file directory url
 */
const Post = ({ category, fileName }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const url = `https://raw.githubusercontent.com/Kimsu10/my-dev-life/main/posts/${category}/${fileName}.md`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, [fileName]);

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
