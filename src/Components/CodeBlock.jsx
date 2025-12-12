// CodeBlock.jsx
export default function CodeBlock({ inline, className, children, ...props }) {
  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  // 라이브러리가 pre 태그를 만들어줘서 pre태그 만들 필요가 없다.
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}
