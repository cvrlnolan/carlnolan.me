import React from "react";
import Link from "next/link";
import type { SnippetData } from "@/assets/types";
import { motion } from "framer-motion";
import { item } from "@/assets/animations";

const SnippetCard: React.FC<{ props: SnippetData }> = ({ props }) => {
  return (
    <>
      <Link href={`/snippets/${props.slug}`} passHref>
        <motion.div
          variants={item}
          exit={{ opacity: 0 }}
          layout
          className="w-full md:w-52 rounded shadow-md p-0.5 bg-gradient-to-tr from-green-300 to-purple-500 cursor-pointer transform motion-safe:hover:scale-105 md:motion-safe:hover:scale-110 transition-transform duration-150"
        >
          <div className="flex-col h-full bg-white dark:bg-gray-800 overflow-hidden rounded">
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-gray-700 dark:text-gray-300">
                {props.title}
              </div>
            </div>
            <div className="flex flex-wrap px-6 pb-2">
              <p className="text-gray-700 dark:text-gray-300">
                {props.summary}
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default SnippetCard;
