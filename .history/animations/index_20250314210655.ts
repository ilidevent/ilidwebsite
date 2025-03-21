export const speakerAnimation = {
  initial: { opacity: 0 },

  enter: {
    opacity: 1,
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    transition: { duration: 0.7, ease: [0.3, 0, 0.7, 0] },
  },
};

export const betterMarqueAnim = {
  open: {
    width: "320px",
    height: "400px",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1]}
  },
  closed: {
    width: "0px",
    height: "0px",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 1}
  },
}