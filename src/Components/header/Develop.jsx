import { Link } from "react-router-dom";
import "../../style/header/category.css";

const Develop = () => {
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
      title: "Test",
      items: ["Jest", "Cypress", "JUnit"],
    },
    {
      title: "IDE",
      items: ["VS Code", "IntelliJ"],
    },
    {
      title: "DBMS",
      items: ["Database", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ];

  return (
    <div className="category-container">
      <section className="category-grid">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`category-card ${
              category.title === "CS" ||
              category.title === "Basic" ||
              category.title === "Language" ||
              category.title === "Framework"
                ? "first-row"
                : ""
            }`}
          >
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item) => (
                <li key={item}>
                  <Link
                    to={`/develop/${category.title.toLowerCase()}/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
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
