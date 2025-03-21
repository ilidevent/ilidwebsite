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

export const agendaAnimation = {
  initial: { opacity: 0, x: "20%" },

  enter: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.4, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    opacity: 0,
    x: "-20%",
    transition: { duration: 0.4, ease: [0.3, 0, 0.7, 0] },
  },
};

export const sideBarAnimation = {
  initial: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },

  enter: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },

  closed: {
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
  },
};

export const sideContentAnim = {
  initial: { opacity: 0, x: "60%" },

  enter: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.3 },
  },

  closed: {
    opacity: 0,
    x: "60%",
    transition: { duration: 0.5, ease: [0.3, 0, 0.7, 0] },
  },
};
