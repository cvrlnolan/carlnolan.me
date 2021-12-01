import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MDXComponents = {
  h1: (props: any) => (
    <p className="text-4xl tracking-tight font-black" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-500"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="w-full overflow-x-auto">
      <SyntaxHighlighter language="tsx" style={dracula} showLineNumbers>
        {props.children.props.children}
      </SyntaxHighlighter>
      {/* <code {...props} /> */}
    </pre>
  ),
};

export default MDXComponents;
