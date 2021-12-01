import React from "react";
import Navbar from "@/components/navbar";

const SnippetLayout = ({ children }: any) => {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
};

export default SnippetLayout;
