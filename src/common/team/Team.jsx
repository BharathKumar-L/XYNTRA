import React from "react";
import "./Team.css";
import webmaster from "../../assets/webmaster.png";
import kamalesh from "../../assets/Kamalesh.jpg";
import VC from "../../assets/vice.jpg";
import aathithya from "../../assets/aathithya_event_management.jpg";
import chairman from "../../assets/chairman.jpg";
import deepthi from "../../assets/Deepthi.jpeg";
import dhanasree from "../../assets/dhanasree.jpeg";
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
    name: "Joderick Sherwin",
    role: "VICE CHAIRMAN",
    image: VC,
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/",
  },
  {
    id: 3,
    name: "Deepiga Dharshini C",
    role: "SECRETARY & TREASURER",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "https://www.linkedin.com/in/deepiga-dharshini-ts20",
  },
  {
    id: 4,
    name: "Bharath Kumar L",
    role: "WEBMASTER",
    image: webmaster,
    linkedIn: "https://www.linkedin.com/in/bharath-kumar-l-955304289/",
  },
  {
    id: 5,
    name: "Roshini D",
    role: "WEB DEVELOPMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 6,
    name: "Joderick Sherwin",
    role: "MACHINE LEARNING LEAD",
    image: VC,
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/",
  },
  {
    id: 7,
    name: "Amrutha B J",
    role: "APP DEVELOPMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 8,
    name: "Caroline Suja J S",
    role: "MEDIA MANAGEMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 9,
    name: "Ragul Sowmiyanarayanan G K",
    role: "EVENT MANAGEMENT LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 10,
    name: "Nandha Kumar P",
    role: "DESIGN TEAM LEAD",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 11,
    name: "Nithish Rao P",
    role: "WEB DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 12,
    name: "Varun G",
    role: "WEB DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 13,
    name: "Suranjana S",
    role: "MACHINE LEARNING TEAM",
    image: suranjana,
    linkedIn: "#",
  },
  {
    id: 14,
    name: "Sri Harshavardhanan R",
    role: "APP DEVELOPMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 15,
    name: "Deepthi P",
    role: "CONTENT WRITER",
    image: deepthi,
    linkedIn: "#",
  },
  {
    id: 16,
    name: "Dhanasree L P",
    role: "EVENT MANAGER",
    image: dhanasree,
    linkedIn: "#",
  },
  {
    id: 17,
    name: "Bharath D",
    role: "EVENT MANAGEMENT TEAM",
    image: bharath_d,
    linkedIn: "#",
  },
  {
    id: 18,
    name: "AgishRaj R",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 19,
    name: "Bharath B",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 20,
    name: "Swathi G",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 21,
    name: "Aathithya S K",
    role: "EVENT MANAGEMENT TEAM",
    image: aathithya,
    linkedIn: "#",
  },
  {
    id: 22,
    name: "Kamalesh S P",
    role: "EVENT MANAGEMENT TEAM",
    image: kamalesh,
    linkedIn: "#",
  },
  {
    id: 23,
    name: "Dinisha R",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 23,
    name: "Divya K",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 24,
    name: "Vishwa J",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 25,
    name: "Ramalingam S",
    role: "EVENT MANAGEMENT TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 26,
    name: "Bhuvaneshwari M",
    role: "EVENT MANAGEMENT - PR TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 27,
    name: "Himeshwar N",
    role: "EVENT MANAGEMENT - PR TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 28,
    name: "Jayadharshini M",
    role: "EVENT MANAGEMENT - PR TEAM",
    image: jayadharshini,
    linkedIn: "#",
  },
  {
    id: 29,
    name: "Gokula Sarathy PS",
    role: "DESIGN TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 30,
    name: "Farheen Tabassum H",
    role: "DESIGN TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
  {
    id: 31,
    name: "Srivarshni S",
    role: "DESIGN TEAM",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    linkedIn: "#",
  },
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
              <a href={member.linkedIn} target="_blank" rel="noreferrer">
                Connect on LinkedIn 
                 <img width={30} className="my-auto" src={linkedin} style={{display: "inline"}} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
