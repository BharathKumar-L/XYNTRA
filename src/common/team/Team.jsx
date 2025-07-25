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
import divyadharshini from "../../assets/DivyaDharshini.jpg";
import jayadharshini from "../../assets/Jayadharsini.jpg";
import suranjana from "../../assets/Suranjana S.jpg";
import bharath_d from "../../assets/bharath_d.jpg";
import linkedin from "../../assets/linkedin.png";
import sowmi from "../../assets/ragul_sowmi.jpg";
import bhuvaneswari from "../../assets/bhuvaneswari.jpg";
import nithish from "../../assets/Nithish.jpg";
import varun from "../../assets/Varun.jpg";
import nandha from "../../assets/Nandha Kumar P.jpg";
import treasurer from "../../assets/deepiga.jpg"
import harsha from "../../assets/Harsha.jpg";
import swathi from "../../assets/swathi.jpg";
import vishwa from "../../assets/vishwa.jpg";
import farheen from "../../assets/farheen.jpg";
import roshini from "../../assets/roshini.jpg";
import bharath_b from "../../assets/bharath_b.jpg";
import ramalingam from "../../assets/Ramalingam.jpg";
import himesh from "../../assets/Himeshwar.jpg";
import srivarshni from "../../assets/Srivarshni.jpeg";
import gokul from "../../assets/gokul.jpg";
import amrutha from "../../assets/Amrutha.jpg";
import janani from "../../assets/janani.jpg";

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
    image: gokul,
    linkedIn: "https://www.linkedin.com/in/gokula-sarathy-p-s-8343121b8",
  },
  {
    id: 3,
    name: "Joderick Sherwin",
    role: "SECRETARY & ML LEAD",
    image: secretary,
    linkedIn: "https://www.linkedin.com/in/joderick-sherwin-j/"
  },
  {
    id: 4,
    name: "Deepiga Dharshini C",
    role: "TREASURER",
    image: treasurer,
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
    image: roshini,
    linkedIn: "https://www.linkedin.com/in/roshini-d-33a851257/",
  },
  {
    id: 7,
    name: "Amrutha B J",
    role: "APP DEVELOPMENT LEAD",
    image: amrutha,
    linkedIn: "https://www.linkedin.com/in/amrutha-b-j-22244828a/",
  },
  {
    id: 8,
    name: "Caroline Suja J S",
    role: "MEDIA MANAGEMENT LEAD",
    image: caroline,
    linkedIn: "www.linkedin.com/in/caroline-suja-0b56962a8",
  },
  {
    id: 9,
    name: "Ragul Sowmiyanarayanan G K",
    role: "EVENT MANAGEMENT LEAD",
    image:sowmi,
    linkedIn: "https://www.linkedin.com/in/ragul-sowmiyanarayanan-gk-983a42255/",
  },
  {
    id: 10,
    name: "Nandha Kumar P",
    role: "DESIGN TEAM LEAD",
    image: nandha,
    linkedIn: "https://www.linkedin.com/in/nandha-kumar-p-1627b6257/",
  },
  {
    id: 11,
    name: "Nithish Rao P",
    role: "WEB DEVELOPMENT TEAM",
    image:nithish,
    linkedIn: "https://www.linkedin.com/in/nithish-rao-p/",
  },
  {
    id: 12,
    name: "Varun G",
    role: "WEB DEVELOPMENT TEAM",
    image: varun,
    linkedIn: "https://www.linkedin.com/in/varun-g-6b08a9259/",
  },
  {
    id: 13,
    name: "Suranjana S",
    role: "MACHINE LEARNING TEAM",
    image: suranjana,
    linkedIn: "https://www.linkedin.com/in/suranjana-srinivasan-b76850257",
  },
  {
    id: 14,
    name: "Sri Harshavardhanan R",
    role: "APP DEVELOPMENT TEAM",
    image: harsha,
    linkedIn: "https://www.linkedin.com/in/hvardhanan/",
  },
  {
    id: 15,
    name: "Bharath D",
    role: "EVENT MANAGEMENT TEAM",
    image: bharath_d,
    linkedIn: "https://www.linkedin.com/in/bharath-d-2a60ab2a6/",
  },
  {
    id: 16,
    name: "AgishRaj R",
    role: "EVENT MANAGEMENT TEAM",
    image: agish,
    linkedIn: "www.linkedin.com/in/agish-raj-83bbb1318",
  },
  {
    id: 17,
    name: "Bharath B",
    role: "EVENT MANAGEMENT TEAM",
    image: bharath_b,
    linkedIn: "https://www.linkedin.com/in/bharath-b-196a4a308/",
  },
  {
    id: 18,
    name: "Swathi G",
    role: "EVENT MANAGEMENT TEAM",
    image: swathi,
    linkedIn: "https://www.linkedin.com/in/swathi-g-45bb1b2b2/",
  },
  {
    id: 19,
    name: "Aathithya S K",
    role: "EVENT MANAGEMENT TEAM",
    image: aathithya,
    linkedIn: "https://www.linkedin.com/in/athithya-s-k/",
  },
  {
    id: 20,
    name: "Kamalesh S P",
    role: "EVENT MANAGEMENT TEAM",
    image: kamalesh,
    linkedIn: "https://www.linkedin.com/in/kamalesh-sp",
  },
  {
    id: 21,
    name: "Dinisha R",
    role: "EVENT MANAGEMENT TEAM",
    image: dinisha,
    linkedIn: "https://www.linkedin.com/in/dinisha20",
  },
  {
    id: 22,
    name: "Divya K",
    role: "EVENT MANAGEMENT TEAM",
    image: divya_k,
    linkedIn: "https://www.linkedin.com/in/divya-k-3aa1862a2/",
  },
  {
    id: 23,
    name: "Vishwa J",
    role: "EVENT MANAGEMENT TEAM",
    image: vishwa,
    linkedIn: "https://www.linkedin.com/in/vishwa-j-5019112a2/",
  },
  {
    id: 24,
    name: "Ramalingam S",
    role: "EVENT MANAGEMENT TEAM",
    image: ramalingam,
    linkedIn: "https://www.linkedin.com/in/ramalingamsankaranarayanan/",
  },
  {
    id: 25,
    name: "Himeshwar N",
    role: "EVENT MANAGEMENT - PR TEAM",
    image: himesh,
    linkedIn: "https://www.linkedin.com/in/himeshwarnagarajan/",
  },
  {
    id: 26,
    name: "Jayadharshini M",
    role: "EVENT MANAGEMENT - PR TEAM",
    image: jayadharshini,
    linkedIn:
      "https://www.linkedin.com/in/jayadharsini-mathiyalagan-72607b2a2/",
  },
  {
    id: 27,
    name: "Farheen Tabassum H",
    role: "DESIGN TEAM",
    image: farheen,
    linkedIn: "https://www.linkedin.com/in/farheen-tabassum-8526042a2/",
  },
  {
    id: 28,
    name: "Srivarshni S",
    role: "DESIGN TEAM",
    image: srivarshni,
    linkedIn: "https://www.linkedin.com/in/srivarshni-s-a161042a4/",
  },
  {
    id: 29,
    name: "Janani T",
    role: "DESIGN TEAM",
    image: janani,
    linkedIn: "www.linkedin.com/in/janani-t-5576002a2",
  },
  {
    id: 30,
    name: "DivyaDharshini K",
    role: "DESIGN TEAM",
    image: divyadharshini,
    linkedIn: "https://www.linkedin.com/in/divya-dharshini-k-925832295/",
  }
];

const faculty_coordinators = [
  {
    id: 31,
    name : "Dr.S.VinodhKumar",
    role: "FACULTY COORDINATOR",
    linkedIn: "#",
  },
  {
    id: 32,
    name: "Dr.N.DuraiMurugan",
    role: "FACULTY COORDINATOR",
    linkedIn: "https://www.linkedin.com/in/duraimurugan-n-181145ba/",
  },
  {
    id: 33,
    name: "Dr.K.Anantajothi",
    role: "FACULTY COORDINATOR",
    linkedIn: "#",
  }
];

const Team = () => {
  return (
    <div className="team-page">
      <h1>Meet Our Team</h1>
      <h1>CONVENOR</h1>
      <div className="team">
          <div className="card2">
            <div className="card-content">
              <h2>Dr.P.Kumar</h2>
              <h3>Convenor</h3>
              <a href="https://www.linkedin.com/in/dr-p-kumar-1129aa194/" target="_blank" rel="noreferrer">
                Connect on LinkedIn
                <img
                  width={30}
                  className="my-auto"
                  src= {linkedin}
                  style={{ display: "inline" }}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
      </div>
      <h1>FACULTY COORDINATORS</h1>
      <div className="team">
        {faculty_coordinators.map((member) => (
          <div key={member.id} className="card2">
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
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      <h1>STUDENT COORDINATORS</h1>
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
                  loading="lazy"
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
