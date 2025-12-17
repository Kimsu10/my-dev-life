export const loadPosts = () => {
  const modules = import.meta.glob("../posts/**/*.md", {
    as: "raw",
    eager: true,
  });

  return Object.entries(modules).map(([path, content]) => {
    const parts = path.split("/");
    const filename = parts.at(-1);
    const category = parts.at(-2);

    const [year, month, day, ...titleParts] = filename
      .replace(".md", "")
      .split("-");

    return {
      category,
      topic: titleParts.join("-"),
      title: titleParts.join(" "),
      date: `${year}-${month}-${day}`,
      content,
      path,
    };
  });
};
