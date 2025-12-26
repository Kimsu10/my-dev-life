import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import DarkModeToggle from "../Components/darkModeToggle";
import extractHeadings from "../utils/extractHeadings";
import Toc from "./toc/Toc";

import { headingComponents } from "./toc/heading";

import "../style/darkMode.css";
// import "../style/table.css";
import "../style/pre.css";
import CodeBlock from "./CodeBlock";
import Header from "./header/Header";

const Post = ({ category, topic, fileName }) => {
  const [content, setContent] = useState("");
  const [headings, setHeadings] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    // local 테스트용
    // const url = `/posts/${category}/${fileName}.md`;

    // github API 정확한 경로
    const url = `https://raw.githubusercontent.com/Kimsu10/my-dev-life/main/src/posts/${category}/${topic}/${fileName}.md`;

    console.log(url);

    console.log("category:", category);
    console.log("topic", topic);
    console.log("fileName:", fileName);

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setHeadings(extractHeadings(text));
      });
  }, [fileName]);

  return (
    <>
      <DarkModeToggle />
      <div className="markdown-layout">
        <Toc headings={headings} />
        <div className="markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              code: CodeBlock,
              ...headingComponents,
              img: ({ node, ...props }) => (
                <img
                  {...props}
                  className="markdown-img"
                  alt={props.alt}
                  onClick={() => setModalImage(props.src)}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
          {modalImage && (
            <div className="image-modal" onClick={() => setModalImage(null)}>
              <img src={modalImage} className="image-modal-content" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Post;
