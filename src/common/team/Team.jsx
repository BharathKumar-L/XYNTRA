import React from "react";
import "./Team.css";

// Assets
import webmaster from "../../assets/webmaster.png";
import kamalesh from "../../assets/Kamalesh.jpg";
import secretary from "../../assets/vice.jpg";
import aathithya from "../../assets/aathithya_event_management.jpg";
import agish from "../../assets/Agishraj.jpg";
import caroline from "../../assets/Caroline.jpg";
import chairman from "../../assets/chairman.jpg";
import deepthi from "../../assets/Deepthi.jpeg";
import dhanasree from "../../assets/dhanasree.jpeg";
import dinisha from "../../assets/Dinisha.jpg";
import divya_k from "../../assets/Divya-K.jpg";
import jayadharshini from "../../assets/Jayadharsini.jpg";
import suranjana from "../../assets/Suranjana S.jpg";
import bharath_d from "../../assets/bharath_d.jpg";
import linkedin from "../../assets/linkedin.png";

const teamMembers = [
  {
    id: 1,
    name: "Bhuvaanesh R",
    role: "CHAIRMAN",
    image: chairman,
    linkedIn: "https://www.linkedin.com/in/bhuvaanesh-r",
  },
  {
    id: 2,
    name: "Gokulasarathy P S",
    role: "VICE CHAIRMAN",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/",
  },
  {
    id: 3,
    name: "Joderick Sherwin",
    role: "SECRETARY",
    image: secretary,
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/"
  },
  {
    id: 4,
    name: "Deepiga Dharshini C",
    role: "TREASURER",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/deepiga-dharshini-ts20",
  },
  {
    id: 5,
    name: "Bharath Kumar L",
    role: "WEBMASTER",
    image: webmaster,
    linkedIn: "https://www.linkedin.com/in/bharath-kumar-l-955304289/",
  },
  {
    id: 6,
    name: "Roshini D",
    role: "WEB DEVELOPMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 7,
    name: "Joderick Sherwin",
    role: "MACHINE LEARNING LEAD",
    image: secretary,
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/",
  },
  {
    id: 8,
    name: "Amrutha B J",
    role: "APP DEVELOPMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 9,
    name: "Caroline Suja J S",
    role: "MEDIA MANAGEMENT LEAD",
    image: caroline,
    linkedIn: "www.linkedin.com/in/caroline-suja-0b56962a8",
  },
  {
    id: 10,
    name: "Ragul Sowmiyanarayanan G K",
    role: "EVENT MANAGEMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 11,
    name: "Nandha Kumar P",
    role: "DESIGN TEAM LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 12,
    name: "Nithish Rao P",
    role: "WEB DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 13,
    name: "Varun G",
    role: "WEB DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 14,
    name: "Suranjana S",
    role: "MACHINE LEARNING TEAM",
    image: suranjana,
    linkedIn: "https://www.linkedin.com/in/suranjana-srinivasan-b76850257",
  },
  {
    id: 15,
    name: "Sri Harshavardhanan R",
    role: "APP DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/hvardhanan/",
  },
  {
    id: 16,
    name: "Deepthi P",
    role: "CONTENT WRITER",
    image: deepthi,
    linkedIn: "https://www.linkedin.com/in/deepthi-pavendan-b48853257/",
  },
  {
    id: 17,
    name: "Dhanasree L P",
    role: "EVENT MANAGER",
    image: dhanasree,
    linkedIn: "https://www.linkedin.com/in/dhanasree-l-p-63302b294/",
  },
  {
    id: 18,
    name: "Bharath D",
    role: "EVENT MANAGEMENT TEAM",
    image: bharath_d,
    linkedIn: "https://www.linkedin.com/in/bharath-d-2a60ab2a6/",
  },
  {
    id: 19,
    name: "AgishRaj R",
    role: "EVENT MANAGEMENT TEAM",
    image: agish,
    linkedIn: "www.linkedin.com/in/agish-raj-83bbb1318",
  },
  {
    id: 20,
    name: "Bharath B",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 21,
    name: "Swathi G",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 22,
    name: "Aathithya S K",
    role: "EVENT MANAGEMENT TEAM",
    image: aathithya,
    linkedIn: "https://www.linkedin.com/in/athithya-s-k/",
  },
  {
    id: 23,
    name: "Kamalesh S P",
    role: "EVENT MANAGEMENT TEAM",
    image: kamalesh,
    linkedIn: "https://www.linkedin.com/in/kamalesh-sp",
  },
  {
    id: 24,
    name: "Dinisha R",
    role: "EVENT MANAGEMENT TEAM",
    image: dinisha,
    linkedIn: "#",
  },
  {
    id: 25,
    name: "Divya K",
    role: "EVENT MANAGEMENT TEAM",
    image: divya_k,
    linkedIn: "https://www.linkedin.com/in/divya-k-3aa1862a2/",
  },
  {
    id: 26,
    name: "Vishwa J",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 27,
    name: "Ramalingam S",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 28,
    name: "Bhuvaneshwari M",
    role: "EVENT MANAGEMENT - PR TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/bhuvaneshwari-mohanraj",
  },
  {
    id: 29,
    name: "Himeshwar N",
    role: "EVENT MANAGEMENT - PR TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 30,
    name: "Jayadharshini M",
    role: "EVENT MANAGEMENT - PR TEAM",
    image: jayadharshini,
    linkedIn:
      "https://www.linkedin.com/in/jayadharsini-mathiyalagan-72607b2a2/",
  },
  {
    id: 31,
    name: "Gokula Sarathy PS",
    role: "DESIGN TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/gokula-sarathy-p-s-8343121b8",
  },
  {
    id: 32,
    name: "Srivarshni S",
    role: "DESIGN TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/srivarshni-s-a161042a4/",
  },
  {
    id: 33,
    name: "Janani T",
    role: "DESIGN TEAM",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 34,
    name: "DivyaDharshini K",
    role: "DESIGN TEAM",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team">
        {teamMembers.map((member) => (
          <div key={member.id} className="card2">
            <img src={member.image} alt={member.name} className="profile-pic" />
            <div className="card-content">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <a href={member.linkedIn}  target="_blank" rel="noreferrer">
                Connect on LinkedIn
                <img
                  width={30}
                  className="my-auto"
                  src={linkedin}
                  style={{ display: "inline" }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
