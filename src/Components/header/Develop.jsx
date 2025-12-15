import "../../style/header/category.css";

const Develop = () => {
  return (
    <div className="category-container">
      <section className="category-grid">
        <div className="category-card first-row">
          <h2>CS</h2>
          <ul>
            <li>HTTP</li>
            <li>Network</li>
            <li>IT</li>
            <li>Design Pattern</li>
          </ul>
        </div>

        <div className="category-card first-row">
          <h2>Basic</h2>
          <ul>
            <li>HTML</li>
            <li>Markdown</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="category-card first-row">
          <h2>Language</h2>
          <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>TypeScript</li>
            <li>C</li>
          </ul>
        </div>

        <div className="category-card first-row">
          <h2>Framework</h2>
          <ul>
            <li>Node.js</li>
            <li>Spring</li>
            <li>Django</li>
          </ul>
        </div>

        <div className="category-card">
          <h2>Test</h2>
          <ul>
            <li>Jest</li>
            <li>Cypress</li>
            <li>JUnit</li>
          </ul>
        </div>

        <div className="category-card">
          <h2>IDE</h2>
          <ul>
            <li>VS Code</li>
            <li>IntelliJ</li>
          </ul>
        </div>
        <div className="category-card">
          <h2>DBMS</h2>
          <ul>
            <li>Database 이론</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Develop;
