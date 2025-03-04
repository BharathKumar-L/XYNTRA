import React from 'react';
import './Registration.css';
import FlowingMenu from './submit'
import unstop from '../../assets/unstop.png'
const Register = () => {
  const demoItems = [
    { link: '#', text: 'Register Now', image: unstop },
  ];
  
  return (
    <div className="container_registration">
      <div className="content">
        <div className="box">
          <h2>Guidelines</h2>
          <ul>
            <li><strong>Team Formation</strong>
              <ul>
                <li>Each team can have 4 to 6 members.</li>
                <li>Teams must register and submit their abstract before the deadline.</li>
                <li>A team can submit only one idea.</li>
              </ul>
            </li>
            <li><strong>Abstract Submission</strong>
              <ul>
                <li>The abstract must be submitted in PDF format through the designated platform - Unstop.</li>
                <li>The document should be structured as per the given template.</li>
              </ul>
            </li>
            <li><strong>Selection Process</strong>
              <ul>
                <li>Teams will be shortlisted based on innovation, feasibility, technical approach, and impact.</li>
                <li>The decision of the evaluation panel is final.</li>
                <li>Shortlisted teams will proceed to the 36-hour on-site hackathon.</li>
              </ul>
            </li>
            <li><strong>Deadline & Communication</strong>
              <ul>
                <li>Late submissions will not be considered.</li>
                <li>Results will be communicated via E-mail or Whatsapp group.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="box">
          <h2>Rules and Regulations</h2>
          <ul>
            <li><strong>Originality</strong>
              <ul>
                <li>The idea must be original or an innovative improvement on existing solutions.</li>
                <li>Plagiarism will result in immediate disqualification.</li>
              </ul>
            </li>
            <li><strong>Team Integrity</strong>
              <ul>
                <li>Each team must submit its work independently.</li>
                <li>Teams found sharing or copying submissions will be disqualified.</li>
              </ul>
            </li>
            <li><strong>Submission Format</strong>
              <ul>
                <li>Abstracts should not exceed 1 page.</li>
                <li>The document should be clear, concise, and well-structured.</li>
              </ul>
            </li>
            <li><strong>Evaluation Criteria</strong>
              <ul>
                <li><strong>Problem Identification (20%)</strong> – Clarity of problem statement.</li>
                <li><strong>Innovation & Creativity (30%)</strong> – Novelty of the proposed solution.</li>
                <li><strong>Feasibility (20%)</strong> – Practicality and implementability.</li>
                <li><strong>Technology & Approach (20%)</strong> – Use of tech tools/methodologies.</li>
                <li><strong>Impact (10%)</strong> – Potential benefit and scalability.</li>
              </ul>
            </li>
            <li><strong>Shortlisting Announcement</strong>
              <ul>
                <li>Selected teams will be notified via E-mail or Whatsapp group.</li>
                <li>Teams must confirm their participation in Round 2 within the given deadline.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <FlowingMenu items={demoItems} />
    </div>
  );
};

export default Register;
