'use client';

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const HighlightedCode = ({
  children,
  language = "javascript",
  showLineNumbers = false,
  wrapLongLines = true,
  customStyle,
  ...props
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      showLineNumbers={showLineNumbers}
      wrapLongLines={wrapLongLines}
      {...props}
    >
      {String(children)}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
