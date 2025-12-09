export const createId = (children) => {
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

export const headingComponents = {
  h1: ({ children, ...props }) => {
    const id = createId(children);
    return (
      <h1 id={id} {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }) => {
    const id = createId(children);
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const id = createId(children);
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    );
  },
};
