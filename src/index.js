import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <h1>Make My DEV Diary</h1>
      <ul>
        <li>1. Markdown 렌더</li>
        <li>
          2. github raw url fetch
          {/* (https://raw.githubusercontent.com/{owner}/{repo}/{branch}/{path}) */}
        </li>
        <li>3. 화면 구성도 만들기</li>
        <li>4. 카테고리 세분화</li>
        <li>5. 스타일링</li>
      </ul>
    </>
  </React.StrictMode>
);
