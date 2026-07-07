'use client';

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ children, className, ...props }) => {
  const language = className?.replace("language-", "") || "text";

  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      wrapLongLines
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
        fontSize: "0.875rem",
      }}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
