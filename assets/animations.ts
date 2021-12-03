export const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      when: "afterChildren",
    },
  },
};

export const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const transition = {
  type: "spring",
  stiffness: 100,
};
