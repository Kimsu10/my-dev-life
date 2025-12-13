import "../../style/header/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <span className="sidebar">사이드바</span>
          <span>Develop</span>
          <span>DevOps</span>
        </div>
        <div className="header-middle">
          <a href="/" className="logo">
            Kimsu's Dev Life
          </a>
        </div>

        <nav className="header-right">
          <span>페이지</span>
          <span>검색바</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
