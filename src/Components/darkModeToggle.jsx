import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 14px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "600",
        background: theme === "light" ? "#333" : "#eee",
        color: theme === "light" ? "#fff" : "#333",
        transition: "0.3s",
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
