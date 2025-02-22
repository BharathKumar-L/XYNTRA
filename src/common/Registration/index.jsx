import React, { useEffect, useState } from "react";
import "./Registration.css";

const Registration = () => {

  const [formData, setFormData] = useState({
    teamName: "",
    domain: "",
    teamLeaderName: "",
    teamLeaderPhone: "",
    teamLeaderEmail: "",
    teamLeaderCollege: "",
    teamLeaderGender: "Male",
    teamLeaderIEEEMember: "No",
    teamLeaderMembershipID: "",
    // Member 1 details
    member1Name: "",
    member1Phone: "",
    member1Email: "",
    member1College: "",
    member1Gender: "Male",
    member1IEEEMember: "No",
    member1MembershipID: "",
    // Member 2 details
    member2Name: "",
    member2Phone: "",
    member2Email: "",
    member2College: "",
    member2Gender: "Male",
    member2IEEEMember: "No",
    member2MembershipID: "",
    // Member 3 details
    member3Name: "",
    member3Phone: "",
    member3Email: "",
    member3College: "",
    member3Gender: "Male",
    member3IEEEMember: "No",
    member3MembershipID: "",
    // Member 4 details
    member4Name: "",
    member4Phone: "",
    member4Email: "",
    member4College: "",
    member4Gender: "Male",
    member4IEEEMember: "No",
    member4MembershipID: "",
    // Member 5 Details
    member5Name: "",
    member5Phone: "",
    member5Email: "",
    member5College: "",
    member5Gender: "Male",
    member5IEEEMember: "No",
    member5MembershipID: "",
    // Abstract submission
    abstractFile: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setFormData((prev) => ({ ...prev, abstractFile: e.target.files[0] }));
  };

  // No validation logic—always returns true.
  const validateForm = () => true;

  // Handle form submission by sending data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submissionData = new FormData();
      for (const key in formData) {
        submissionData.append(key, formData[key]);
      }
      try {
        const response = await fetch("http://localhost:5000/registrations", {
          method: "POST",
          body: submissionData,
        });
        const result = await response.json();
        console.log("Submission successful:", result);
        // Optionally, reset the form or navigate to a success page.
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="container">
      <div id="Container-input">
        <form className="form" onSubmit={handleSubmit}>
          <div id="login-lable">XYNTRA</div>
          {/* Team Leader Details */}
          <h2>Team Leader</h2>
          <input
            className="form-content"
            type="text"
            name="teamName"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="domain"
            placeholder="Domain Chosen"
            value={formData.domain}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="teamLeaderName"
            placeholder="Team Leader Name"
            value={formData.teamLeaderName}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="teamLeaderPhone"
            placeholder="Team Leader Phone Number"
            value={formData.teamLeaderPhone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="teamLeaderEmail"
            placeholder="Team Leader Email"
            value={formData.teamLeaderEmail}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="teamLeaderCollege"
            placeholder="Team Leader College"
            value={formData.teamLeaderCollege}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="teamLeaderGender"
            value={formData.teamLeaderGender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="teamLeaderIEEEMember"
            value={formData.teamLeaderIEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.teamLeaderIEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="teamLeaderMembershipID"
              placeholder="IEEE Membership ID"
              value={formData.teamLeaderMembershipID}
              onChange={handleChange}
            />
          )}

          {/* Member 1 Details */}
          <h2>Member 1</h2>
          <input
            className="form-content"
            type="text"
            name="member1Name"
            placeholder="Member 1 Name"
            value={formData.member1Name}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="member1Phone"
            placeholder="Member 1 Phone Number"
            value={formData.member1Phone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="member1Email"
            placeholder="Member 1 Email"
            value={formData.member1Email}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="member1College"
            placeholder="Member 1 College"
            value={formData.member1College}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="member1Gender"
            value={formData.member1Gender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="member1IEEEMember"
            value={formData.member1IEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.member1IEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="member1MembershipID"
              placeholder="Member 1 IEEE Membership ID"
              value={formData.member1MembershipID}
              onChange={handleChange}
            />
          )}

          {/* Member 2 Details */}
          <h2>Member 2</h2>
          <input
            className="form-content"
            type="text"
            name="member2Name"
            placeholder="Member 2 Name"
            value={formData.member2Name}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="member2Phone"
            placeholder="Member 2 Phone Number"
            value={formData.member2Phone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="member2Email"
            placeholder="Member 2 Email"
            value={formData.member2Email}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="member2College"
            placeholder="Member 2 College"
            value={formData.member2College}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="member2Gender"
            value={formData.member2Gender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="member2IEEEMember"
            value={formData.member2IEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.member2IEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="member2MembershipID"
              placeholder="Member 2 IEEE Membership ID"
              value={formData.member2MembershipID}
              onChange={handleChange}
            />
          )}

          {/* Member 3 Details */}
          <h2>Member 3</h2>
          <input
            className="form-content"
            type="text"
            name="member3Name"
            placeholder="Member 3 Name"
            value={formData.member3Name}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="member3Phone"
            placeholder="Member 3 Phone Number"
            value={formData.member3Phone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="member3Email"
            placeholder="Member 3 Email"
            value={formData.member3Email}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="member3College"
            placeholder="Member 3 College"
            value={formData.member3College}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="member3Gender"
            value={formData.member3Gender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="member3IEEEMember"
            value={formData.member3IEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.member3IEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="member3MembershipID"
              placeholder="Member 3 IEEE Membership ID"
              value={formData.member3MembershipID}
              onChange={handleChange}
            />
          )}

          {/* Member 4 Details */}
          <h2>Member 4</h2>
          <input
            className="form-content"
            type="text"
            name="member4Name"
            placeholder="Member 4 Name"
            value={formData.member4Name}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="member4Phone"
            placeholder="Member 4 Phone Number"
            value={formData.member4Phone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="member4Email"
            placeholder="Member 4 Email"
            value={formData.member4Email}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="member4College"
            placeholder="Member 4 College"
            value={formData.member4College}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="member4Gender"
            value={formData.member4Gender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="member4IEEEMember"
            value={formData.member4IEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.member4IEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="member4MembershipID"
              placeholder="Member 4 IEEE Membership ID"
              value={formData.member4MembershipID}
              onChange={handleChange}
            />
          )}

           {/* Member 4 Details */}
           <h2>Member 5</h2>
          <input
            className="form-content"
            type="text"
            name="member5Name"
            placeholder="Member 5 Name"
            value={formData.member5Name}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="tel"
            name="member5Phone"
            placeholder="Member 5 Phone Number"
            value={formData.member5Phone}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="email"
            name="member5Email"
            placeholder="Member 5 Email"
            value={formData.member5Email}
            onChange={handleChange}
          />
          <input
            className="form-content"
            type="text"
            name="member5College"
            placeholder="Member 5 College"
            value={formData.member5College}
            onChange={handleChange}
          />
          <select
            className="form-content"
            name="member5Gender"
            value={formData.member5Gender}
            onChange={handleChange}
          >
            <option value="Male">Gender: Male</option>
            <option value="Female">Gender: Female</option>
          </select>
          <select
            className="form-content"
            name="member5IEEEMember"
            value={formData.member5IEEEMember}
            onChange={handleChange}
          >
            <option value="No">IEEE Member? No</option>
            <option value="Yes">IEEE Member? Yes</option>
          </select>
          {formData.member5IEEEMember === "Yes" && (
            <input
              className="form-content"
              type="text"
              name="member5MembershipID"
              placeholder="Member 5 IEEE Membership ID"
              value={formData.member5MembershipID}
              onChange={handleChange}
            />
          )}

          <button type="submit">Submit Registration</button>
        </form>
      </div>
      <div className="content" style={{ display: "block", width: 1000, height: 562 }}>
        {/* Animated background, images, etc. */}
      </div>
    </div>
  );
};

export default Registration;
