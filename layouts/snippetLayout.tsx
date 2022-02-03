import React from "react";

import Navbar from "@/components/navbar";

const SnippetLayout = ({ children }: any) => {
  return (
    <>
      <Navbar>
        <div className="w-full space-y-4 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </Navbar>
    </>
  );
};

export default SnippetLayout;
