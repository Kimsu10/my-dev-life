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
<<<<<<< HEAD
      items: ["Database", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
=======
      items: ["Database", "MySQL", "PostgreSQL", "MongoDB", "Cache"],
>>>>>>> fb2ecbc2adf828f63c3db833946a5fa52bd6edcc
    },
    {
      title: "Test",
      items: ["Jest", "Cypress", "JUnit"],
    },
    {
      title: "FRONTEND",
      items: ["React", "Vue"],
    },
<<<<<<< HEAD
=======
    {
      title: "IDE",
      items: ["VsCode", "IntelliJ"],
    },
>>>>>>> fb2ecbc2adf828f63c3db833946a5fa52bd6edcc
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
<<<<<<< HEAD
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
=======
                <li key={item}>
                  <Link
                    to={`/develop/${category.title.toLowerCase()}/${item.replace(
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
>>>>>>> fb2ecbc2adf828f63c3db833946a5fa52bd6edcc
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Develop;
