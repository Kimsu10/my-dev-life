import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import DarkModeToggle from "../Components/darkModeToggle";
import extractHeadings from "../utils/extractHeadings";
import Toc from "./toc/Toc";
import { headingComponents } from "./toc/heading";
import "../style/darkMode.css";

const Post = ({ category, fileName }) => {
  const [content, setContent] = useState("");
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const url = `/posts/${category}/${fileName}.md`;

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
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={headingComponents}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default Post;
