import { createId } from "./createId";

const extractHeadings = (markdownText) => {
  const headingRegex = /^(#{1,6})\s+(.*)/gm;
  const headings = [];

  let match;
  while ((match = headingRegex.exec(markdownText)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = createId(text);

    headings.push({ level, text, id });
  }

  return headings;
};

export default extractHeadings;
