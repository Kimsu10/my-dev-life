const Toc = ({ headings }) => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="markdown-toc">
      <h2>📑 목차</h2>
      <ul>
        {headings.map((h, idx) => (
          <li key={idx} style={{ marginLeft: (h.level - 1) * 12 }}>
            <a href={`#${h.id}`} onClick={(e) => handleScroll(e, h.id)}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Toc;
