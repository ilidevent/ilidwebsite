export const speakerAnimation = {
  initial: { opacity: 0 },

  enter: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};