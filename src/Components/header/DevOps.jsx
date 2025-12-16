import { Link } from "react-router-dom";
import "../../style/header/category.css";

const categories = [
  {
    title: "CLOUD",
    items: ["AWS", "GCP", "OCI", "SCP", "NCP"],
  },
  {
    title: "Management",
    items: ["Git", "GitHub", "Jenkins"],
  },
  {
    title: "WebServer",
    items: ["Apache", "Tomcat", "Nginx"],
  },
  {
    title: "Container",
    items: ["Docker", "Kubernetes"],
  },
  {
    title: "OS",
    items: ["Linux", "Windows"],
  },
];

const DevOps = () => {
  return (
    <div className="category-container">
      <section className="category-grid">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`category-card ${
              ["CLOUD", "Management", "WebServer", "Container"].includes(
                category.title
              )
                ? "first-row"
                : ""
            }`}
          >
            <h2>{category.title}</h2>
            <ul>
              {category.items.map((item) => (
                <li key={item}>
                  <Link
                    to={`/devops/${category.title.toLowerCase()}/${item
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

export default DevOps;
