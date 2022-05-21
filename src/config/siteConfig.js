import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  author: {
    name: "Debraj Kundu",
    accounts: [
      {
        url: "https://github.com/Debraj-Kundu",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/DebrajK13126335",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      // {
      //   url: "https://dev.to/m_ahmad",
      //   label: "Dev Account",
      //   type: "gray",
      //   icon: <FaDev />
      // },
      {
        url: "https://www.linkedin.com/in/debrajkundu31/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:debrajk27@gmail.com",
        label: "Mail debraj",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
