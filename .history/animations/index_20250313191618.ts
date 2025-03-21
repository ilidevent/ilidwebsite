export const scaleAnimation = {
  initial: { opacity: 0 },

  enter: {
    scale: 1,
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    scale: 0,
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};