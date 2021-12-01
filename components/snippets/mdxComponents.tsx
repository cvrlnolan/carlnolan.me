import React from "react";

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
    <pre className="w-full overflow-x-auto p-4 bg-gray-200 dark:bg-gray-700 rounded shadow-md">
      <code {...props} />
    </pre>
  ),
};

export default MDXComponents;
