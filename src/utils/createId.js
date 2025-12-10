const createId = (children) => {
  let text = "";

  if (Array.isArray(children)) {
    text = children.map((c) => (typeof c === "string" ? c : "")).join(" ");
  } else if (typeof children === "string") {
    text = children;
  }

  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w가-힣]+/g, "-");
};

export default createId;
