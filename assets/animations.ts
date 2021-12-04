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

export const mobileVariants = {
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const mobileItem = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const transition = {
  type: "spring",
  stiffness: 100,
};
