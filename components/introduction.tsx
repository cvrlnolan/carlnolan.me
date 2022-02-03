import { LazyMotion, m } from "framer-motion";
import Image from "next/image";
import myPic from "public/me.png";
import React from "react";

const animationFeatures = import("@/lib/features").then((res) => res.default);

const Introduction: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const transition = {
    type: "spring",
    stiffness: 100,
  };

  return (
    <>
      <LazyMotion features={() => animationFeatures}>
        <m.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={transition}
          viewport={{ once: true, amount: 0.8 }}
          layout
          className="flex flex-wrap-reverse w-full justify-between items-center"
        >
          <div className="flex-col w-full md:w-1/2 justify-center">
            <p className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-500 text-center md:text-justify">
              Carl Nolan
            </p>
            <p className="intro_text">Writes clean code.</p>
            <p className="intro_text">Fueled by simplicity.</p>
            <p className="intro_text">Navigates the web like a pirate.</p>
            <p className="intro_text">A free electron in a nuclear world.</p>
          </div>
          <div className="flex mx-auto md:mx-0 mb-4 md:mb-0">
            <div className="w-36 h-36 relative rounded-full">
              <Image
                alt="Carl"
                src={myPic}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default Introduction;
