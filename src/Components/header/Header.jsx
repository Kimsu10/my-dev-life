import { useState } from "react";
import "../../style/header/header.css";
import Develop from "./Develop";
import DevOps from "./DevOps";

const Header = () => {
  const [activeToolbar, setActiveToolbar] = useState(null);
  const [hoverToolbar, setHoverToolbar] = useState(null);

  const handleToolbarClick = (type) => {
    setActiveToolbar((prev) => (prev === type ? null : type));
  };
  const visibleToolbar = hoverToolbar ?? activeToolbar;
  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <div class="circle-loader">목록</div>
            <button
              className={`toolbar ${
                activeToolbar === "develop" || hoverToolbar === "develop"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleToolbarClick("develop")}
              // onMouseEnter={() => setHoverToolbar("develop")}
              // onMouseLeave={() => setHoverToolbar(null)}
            >
              Develop
            </button>

            <button
              className={`toolbar ${
                activeToolbar === "devops" || hoverToolbar === "devops"
                  ? "active"
                  : ""
              }`}
              onClick={() => handleToolbarClick("devops")}
              // onMouseEnter={() => setHoverToolbar("devops")}
              // onMouseLeave={() => setHoverToolbar(null)}
            >
              DevOps
            </button>
          </div>

          <div className="header-middle">
            <a href="/" className="logo">
              Kimsu's Dev Life
            </a>
          </div>

          <nav className="header-right">
            <span>
              <img src="/images/blog/search.png" className="search-img" />
            </span>
          </nav>
        </div>
      </header>

      <div className="category-wrapper">
        {visibleToolbar === "develop" && <Develop />}
        {visibleToolbar === "devops" && <DevOps />}
      </div>
    </div>
  );
};

export default Header;
