import { Link } from "react-router-dom";
import "../../style/header/category.css";

const Develop = ({ onSelect }) => {
  const categories = [
    {
      title: "CS",
      items: ["HTTP", "Network", "IT", "DesignPattern"],
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
      items: ["Database", "MySQL", "PostgreSQL", "MongoDB", "Cache"],
    },
    {
      title: "Test",
      items: ["Jest", "Cypress", "JUnit"],
    },
    {
      title: "FRONTEND",
      items: ["React", "Vue"],
    },
    {
      title: "IDE",
      items: ["VsCode", "IntelliJ"],
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
                <li key={item}>
                  <Link
                    to={`/develop/${category.title}/${item.replace(
                      /\s+/g,
                      "-"
                    )}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect();
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Develop;
