import { Link } from "react-router-dom";
import "../../style/header/category.css";

const Develop = ({ onSelect }) => {
  const categories = [
    {
      title: "CS",
      items: ["HTTP", "Network", "IT", "Design Pattern"],
    },
    {
      title: "Basic",
      items: ["HTML", "Markdown", "CSS", "Bootstrap"],
    },
    {
      title: "Language",
      items: ["JavaScript", "Java", "Python", "TypeScript", "C"],
    },
    {
      title: "Framework",
      items: ["Node.js", "Spring", "Django"],
    },
    {
      title: "DBMS",
      items: ["Database", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Test",
      items: ["Jest", "Cypress", "JUnit"],
    },
    {
      title: "IDE",
      items: ["VS Code", "IntelliJ"],
    },
  ];

  return (
    <div className="category-container">
      <section className="category-grid">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`category-card ${
              ["CS", "Basic", "Language"].includes(category.title)
                ? "first-row"
                : ""
            }`}
          >
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item) => (
                <Link
                  key={item}
                  to={`/develop/${category.title.toLowerCase()}/${item
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="category-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect();
                  }}
                >
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Develop;
