import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import CodeBlock from "@shortcodes/CodeBlock";

const components = {
  ...shortcodes,
  code: CodeBlock,
  pre: ({ children }) => children,
};

const MDXContent = ({ content }) => {
  const mdxOptions = {
    remarkPlugins: [remarkGfm],
  };

  return (
    <MDXRemote
      source={content}
      components={components}
      options={{ mdxOptions }}
    />
  );
};

export default MDXContent;
