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


export const AttendFormFields = [
  {
    id: 1,
    name: "firstname",
    type: "text",
    placeholder: "Your first name",
    errorMessage: "Your first name must contain at least 3 letters.",
    label: "First Name*",
    required: true,
    minlength: 3,
    inputState: true
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Your last name",
    label: "Last Name",
    required: false,
    inputState: true
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "example@domain.com",
    errorMessage: "Please enter a valid company email address.",
    label: "Email*",
    required: true,
    inputState: true
  },
  {
    id: 4,
    name: "affiliation",
    type: "text",
    placeholder: "e.g. name of university, company, NGO",
    errorMessage: "Your affiliation must contain at least 3 letters.",
    label: "Affiliation*",
    required: true,
    minlength: 3,
    inputState: true
  }
]

export const SpeakerFormFields = [
  {
    id: 1,
    name: "firstname",
    type: "text",
    placeholder: "Your first name",
    errorMessage: "Your first name must contain at least 3 letters.",
    label: "First Name*",
    required: true,
    minlength: 3,
    inputState: true
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Your last name",
    label: "Last Name",
    required: false,
    inputState: true
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "example@domain.com",
    errorMessage: "Please enter a valid company email address.",
    label: "Email*",
    required: true,
    inputState: true
  },
  {
    id: 4,
    name: "stitle",
    type: "text",
    placeholder: "e.g. Civil Engineer at CABRIC Engineering",
    errorMessage: "Your title must contain at least 10 letters.",
    label: "Professional title & Organization*",
    required: true,
    minlength: 10,
    inputState: true
  },
  {
    id: 5,
    name: "profile",
    type: "text",
    placeholder: "e.g. LinkedIn profile, personal website",
    label: "Links to Professional Profiles",
    required: false,
    inputState: true
  },
  {
    id: 6,
    name: "ptitle",
    type: "text",
    placeholder: "Your presentation title",
    errorMessage: "Your presentation title must contain at least 10 letters.",
    label: "Presentation Title*",
    required: true,
    minlength: 10,
    inputState: true
  },
  {
    id: 7,
    name: "abstract",
    type: "text",
    placeholder: "A brief summary (150 words max) outlining your presentation topic",
    errorMessage: "Presentation abstract must be at least 70 characters long.",
    label: "Presentation Abstract*",
    required: true,
    minlength: 70,
    inputState: false
  },
  {
    id: 8,
    name: "expertise",
    type: "text",
    placeholder: "Primary theme e.g. Renewable Energy",
    errorMessage: "Primary theme must contain at least 3 letters.",
    label: "Presentation area of Expertise*",
    required: true,
    minlength: 3,
    inputState: true
  },
  {
    id: 9,
    name: "profile",
    type: "text",
    placeholder: "e.g. LinkedIn profile, personal website",
    label: "Links to Professional Profiles",
    required: false,
    inputState: true
  },
]

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
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    question: "What are the dates and location of the event?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    question: "Is there a fee to attend ILID?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "Will the event be conducted in english or other languages?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 5,
    question: "How do I participate in the Innovation lab and pitch contest?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 6,
    question: "How can I become a speaker or panelist at ILID?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 7,
    question: "How can my organization become a sponsor or partner?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 8,
    question: "What happens if the event is cancelled or postponed?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 9,
    question: "Will sessions be recorded?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 10,
    question: "How do I register for ILID 2025?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const AgendaData = [
  {
    dayname: "Day 1",
    date: "Friday, 25th",
    abbraviations: ["Fri", "25"],
    agenda: [
      {
        key: "21-1",
        time: "08:00 - 09:00",
        location: "Amphi 100 Reception",
        header: "Registration and Welcome Breakfast",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-2",
        time: "09:00 - 09:30",
        location: "Amphi 1000",
        header: "Welcome Address by Event Organizers",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-3",
        time: "09:30 - 10:30",
        location: "Amphi 1000",
        header: "Panel Discussion 1",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-4",
        time: "10:30 - 11:30",
        location: "Amphi 100 Reception",
        header: "Panel Discussion 2",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-5",
        time: "11:30 - 12:30",
        location: "Amphi 100 Hall Room",
        header: "Refreshments & Networking",
        break: true,
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
      },
      {
        key: "21-6",
        time: "12:30 - 14:00",
        location: "Amphi 1000",
        header: "3 Different Workshop Sessions",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-7",
        time: "14:00 - 15:00",
        location: "Amphi 1000",
        header: "Panel Discussion 3",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-8",
        time: "15:00 - 16:00",
        location: "Amphi 1000",
        header: "Interactive Workshop",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "21-9",
        time: "16:00 - 16:30",
        location: "Amphi 1000",
        header: "Closing Remarks and Preview of Day",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      }
    ],
  },
  {
    dayname: "Day 2",
    date: "Saturday, 26th",
    abbraviations: ["Sat", "26"],
    agenda: [
      {
        key: "22-1",
        time: "08:00 - 09:00",
        location: "Amphi 100 Reception",
        header: "Registration and Welcome Breakfast",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-2",
        time: "09:00 - 09:30",
        location: "Amphi 1000",
        header: "Welcome Address by Event Organizers",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-3",
        time: "09:30 - 10:30",
        location: "Amphi 1000",
        header: "Panel Discussion 1",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-4",
        time: "10:30 - 11:30",
        location: "Amphi 100 Reception",
        header: "Panel Discussion 2",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-5",
        time: "11:30 - 12:30",
        location: "Amphi 100 Hall Room",
        header: "Refreshments & Networking",
        break: true,
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
      },
      {
        key: "22-6",
        time: "12:30 - 14:00",
        location: "Amphi 1000",
        header: "3 Different Workshop Sessions",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-7",
        time: "14:00 - 15:00",
        location: "Amphi 1000",
        header: "Panel Discussion 3",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-8",
        time: "15:00 - 16:00",
        location: "Amphi 1000",
        header: "Interactive Workshop",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "22-9",
        time: "16:00 - 16:30",
        location: "Amphi 1000",
        header: "Closing Remarks and Preview of Day",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      }
    ],
  },
  {
    dayname: "Day 3",
    date: "Sunday, 27th",
    abbraviations: ["Sun", "27"],
    agenda: [
      {
        key: "23-1",
        time: "08:00 - 09:00",
        location: "Amphi 100 Reception",
        header: "Registration and Welcome Breakfast",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-2",
        time: "09:00 - 09:30",
        location: "Amphi 1000",
        header: "Welcome Address by Event Organizers",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-3",
        time: "09:30 - 10:30",
        location: "Amphi 1000",
        header: "Panel Discussion 1",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-4",
        time: "10:30 - 11:30",
        location: "Amphi 100 Reception",
        header: "Panel Discussion 2",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-5",
        time: "11:30 - 12:30",
        location: "Amphi 100 Hall Room",
        header: "Refreshments & Networking",
        break: true,
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
      },
      {
        key: "23-6",
        time: "12:30 - 14:00",
        location: "Amphi 1000",
        header: "3 Different Workshop Sessions",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-7",
        time: "14:00 - 15:00",
        location: "Amphi 1000",
        header: "Panel Discussion 3",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-8",
        time: "15:00 - 16:00",
        location: "Amphi 1000",
        header: "Interactive Workshop",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "23-9",
        time: "16:00 - 16:30",
        location: "Amphi 1000",
        header: "Closing Remarks and Preview of Day",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      }
    ],
  },
  {
    dayname: "Day 4",
    date: "Wednesday, 30th",
    abbraviations: ["Wed", "30"],
    agenda: [
      {
        key: "24-1",
        time: "08:00 - 09:00",
        location: "Amphi 100 Reception",
        header: "Registration and Welcome Breakfast",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-2",
        time: "09:00 - 09:30",
        location: "Amphi 1000",
        header: "Welcome Address by Event Organizers",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-3",
        time: "09:30 - 10:30",
        location: "Amphi 1000",
        header: "Panel Discussion 1",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-4",
        time: "10:30 - 11:30",
        location: "Amphi 100 Reception",
        header: "Panel Discussion 2",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-5",
        time: "11:30 - 12:30",
        location: "Amphi 100 Hall Room",
        header: "Refreshments & Networking",
        break: true,
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
      },
      {
        key: "24-6",
        time: "12:30 - 14:00",
        location: "Amphi 1000",
        header: "3 Different Workshop Sessions",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-7",
        time: "14:00 - 15:00",
        location: "Amphi 1000",
        header: "Panel Discussion 3",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-8",
        time: "15:00 - 16:00",
        location: "Amphi 1000",
        header: "Interactive Workshop",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      },
      {
        key: "24-9",
        time: "16:00 - 16:30",
        location: "Amphi 1000",
        header: "Closing Remarks and Preview of Day",
        title:
          "Infrastructure Challenges in Cameroon - Analyzing Obstacles and Crafting Sustainable Solutions for the Future.",
        details:
          "We invite you to join us for a pivotal discussion on the infrastructure challenges facing Cameroon. We'll delve into cutting-edge strategies, sustainable solutions, and the collaborative efforts required to overcome these obstacles. This is your chance to gain valuable insights, engage with key stakeholders, and contribute to shaping the future of Cameroon's infrastructure. Don't miss this opportunity to be part of a transformative conversation and help build a resilient, sustainable future for our nation.",
        panelist: [
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
          {
            name: "Fankam Louisa",
            position: "GICSA, Founder & CEO",
            image: IMAGE4,
            about:
              "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change.",
          },
        ],
      }
    ],
  },
];
