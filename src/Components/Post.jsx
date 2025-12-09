import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "../style/custom.css";

/**
 * Markdown Rendering
 * @param {*} param
 * @returns file directory url
 */
const Post = ({ category, fileName }) => {
  const [content, setContent] = useState("");

  // 레포지토리 public 후 사용가능 => 작동 ✅
  // useEffect(() => {
  //   const url = `https://raw.githubusercontent.com/Kimsu10/my-dev-life/main/src/posts/${category}/${fileName}.md`;

  //   fetch(url)
  //     .then((res) => res.text())
  //     .then((text) => {
  //       setContent(text);
  //     });
  // }, [fileName]);

  // 로컬 테스트용
  useEffect(() => {
    const url = `/posts/${category}/${fileName}.md`;

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
      });
  }, [fileName]);

  return (
    <div className="markdown-body">
      <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Post;
