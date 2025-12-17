import { useState } from "react";
import "../../style/header/header.css";
import Develop from "./Develop";
import DevOps from "./DevOps";

const Header = () => {
  const [openToolbar, setOpenToolbar] = useState(null);

  const closeToolbar = () => {
    setOpenToolbar(null);
  };

  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <div className="circle-loader">목록</div>

            <button
              className={`toolbar ${openToolbar === "develop" ? "active" : ""}`}
              onMouseEnter={() => setOpenToolbar("develop")}
            >
              Develop
            </button>

            <button
              className={`toolbar ${openToolbar === "devops" ? "active" : ""}`}
              onMouseEnter={() => setOpenToolbar("devops")}
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
            <img src="/images/blog/search.png" className="search-img" />
          </nav>
        </div>
      </header>

      {/* hover 영역 유지 */}
      <div className="category-wrapper" onMouseLeave={closeToolbar}>
        {openToolbar === "develop" && <Develop onSelect={closeToolbar} />}
        {openToolbar === "devops" && <DevOps onSelect={closeToolbar} />}
      </div>
    </div>
  );
};

export default Header;
