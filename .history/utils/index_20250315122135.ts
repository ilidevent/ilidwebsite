import IMAGE1 from "../public/svg/summit.svg";
import IMAGE2 from "../public/svg/lab.svg";
import IMAGE3 from "../public/svg/pitch.svg";

import IMAGE4 from "../public/images/speaker.jpg";
import IMAGE5 from "../public/images/workshop.jpg";
import IMAGE6 from "../public/images/networking.jpg";
import IMAGE7 from "../public/images/partnering.jpg";
import IMAGE8 from "../public/images/pitching.jpg";

import PARTNER from "../public/images/partner.png";
import PARTNER2 from "../public/images/partner2.png";
import PARTNER3 from "../public/images/partner3.png";
import PARTNER4 from "../public/images/partner4.png";
import PARTNER5 from "../public/images/partner5.png";
import PARTNER6 from "../public/images/partner6.png";
import PARTNER7 from "../public/images/partner7.png";
import PARTNER8 from "../public/images/partner8.png";
import PARTNER9 from "../public/images/partner9.png";
import PARTNER10 from "../public/images/partner10.png";

export const AboutData = [
  {
    image: IMAGE1,
    aspectRatio: "387.5811/400",
    name: "ILID Summit",
    text: "Participants engage with industry experts through panels, presentations, and networking to explore challenges and sustainable solutions.",
  },
  {
    image: IMAGE2,
    aspectRatio: "452.2738/400",
    name: "Innovation Lab",
    text: "Participants team up in hands-on sessions to transform local infrastructure challenges into practical, innovative, and sustainable solutions.",
  },
  {
    image: IMAGE3,
    aspectRatio: "384.1681/400",
    name: "Pitch Contest",
    text: "Participants showcase their innovative solutions to a panel of industry experts, potential investors, and visionary leaders.",
  },
];

export const OpportunityData = [
  {
    image: IMAGE4,
    heading: "Industry Leading Speakers",
    text: "Hear from top experts innovating infrastructure and sustainable development in engaging sessions.",
  },
  {
    image: IMAGE5,
    heading: "Interactive Workshops",
    text: "Engage in practical sessions to develop actionable, innovative, and sustainable infrastructure solutions.",
  },
  {
    image: IMAGE6,
    heading: "Networking Opportunities",
    text: "Connect with leaders, mentors, and peers to build valuable relationships and future collaborations.",
  },
];

export const JoinData = [
  {
    image: IMAGE8,
    heading: "Pitch your Ideas at ILID",
    text: "Showcase bold solutions to infrastructure challenges before industry leaders and investors.",
    linkData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  },
  {
    image: IMAGE4,
    heading: "Become a Speaker at ILID",
    text: "Share your insights and expertise at the forefront of sustainable furure development.",
    linkData: {
      name: "Become a speaker",
      link: "/speakers",
    },
  },
  {
    image: IMAGE7,
    heading: "Sponsor or Partner with ILID",
    text: "Join us to shape Cameroon's future through collaborative infrastructure innovation.",
    linkData: {
      name: "Partner with us",
      link: "/partners",
    },
  },
];

export const SpeakerData = [
  {
    id: 1,
    image: IMAGE4,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker"],
  },
  {
    id: 2,
    image: IMAGE5,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker", "workshop"],
  },
  {
    id: 3,
    image: IMAGE6,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker"],
  },

  {
    id: 4,
    image: IMAGE4,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["workshop"],
  },
  {
    id: 5,
    image: IMAGE5,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker"],
  },
  {
    id: 6,
    image: IMAGE6,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker"],
  },
  {
    id: 7,
    image: IMAGE4,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker", "workshop"],
  },
  {
    id: 8,
    image: IMAGE5,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["workshop"],
  },
  {
    id: 9,
    image: IMAGE6,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker"],
  },
  {
    id: 10,
    image: IMAGE4,
    name: "Fankam Louisa",
    position: "Founder GICSA",
    roles: ["speaker", "workshop"],
  },
];

export const PartnerData = [
  {
    id: 1,
    name: "Company Name",
    role: " ILID 2025 Official Sponsor",
    image: PARTNER,
    width: "70%",
    aspectRatio: "3000/934",
  },
  {
    id: 2,
    name: "Company Name",
    role: "Official Engineering Sponsor",
    image: PARTNER2,
    width: "50%",
    aspectRatio: "3000/2549",
  },
  {
    id: 3,
    name: "Company Name",
    role: "Official Construction Sponsor",
    image: PARTNER3,
    width: "70%",
    aspectRatio: "1024/300",
  },
  {
    id: 4,
    name: "Company Name",
    role: "Youth Development Partner",
    image: PARTNER4,
    width: "35%",
    aspectRatio: "473/746",
  },
  {
    id: 5,
    name: "Company Name",
    role: "Infrastructure Partner",
    image: PARTNER5,
    width: "70%",
    aspectRatio: "1200/755",
  },
  {
    id: 6,
    name: "Company Name",
    role: "Official Broadcasting Partner",
    image: PARTNER6,
    width: "65%",
    aspectRatio: "1/1",
  },
  {
    id: 7,
    name: "Company Name",
    role: "Sustainable Energy Partner",
    image: PARTNER7,
    width: "60%",
    aspectRatio: "208/152",
  },
  {
    id: 8,
    name: "Company Name",
    role: "Sustainable Energy Partner",
    image: PARTNER8,
    width: "70%",
    aspectRatio: "1988/512",
  },
  {
    id: 9,
    name: "Company Name",
    role: "Financial Innovation Partner",
    image: PARTNER9,
    width: "55%",
    aspectRatio: "1/1",
  },
  {
    id: 10,
    name: "Company Name",
    role: "Banking Services Partner",
    image: PARTNER10,
    width: "70%",
    aspectRatio: "910/512",
  },
];


export const FAQData = [
  {
    id: 1,
    question: "How do I register for ILID 2025?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    question: "What are the dates and location of the event?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    question: "Is there a fee to attend ILID?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    question: "Will the event be conducted in english or other languages?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 5,
    question: "How do I participate in the Innovation lab and pitch contest?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 6,
    question: "How can I become a speaker or panelist at ILID?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 7,
    question: "How can my organization become a sponsor or partner?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 8,
    question: "What happens if the event is cancelled or postponed?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 9,
    question: "Will sessions be recorded?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 10,
    question: "How do I register for ILID 2025?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]


export const AgendaData = [
  {
    dayname: "Day 1",
    date: "Friday, 21st",
    abbraviations: ["Fri", 21]
  }
]