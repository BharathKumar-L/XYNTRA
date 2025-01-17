import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import './Registration.css';

const Registration = () => {
    // Poem text
    const kiplingPoem = `<p>IEEE Computer Society - <span>BATTLEEIDOS</span> Look dad i going to  <span>WIN!</span></p>;`;

    useEffect(() => {
        // Insert poem into all elements with the "text" class
        const textDivs = document.querySelectorAll(".text");
        textDivs.forEach((div) => {
            div.innerHTML = kiplingPoem;
        });

        // Adjust content size based on viewport width
        const contentDiv = document.querySelector(".content");

        function adjustContentSize() {
            const viewportWidth = window.innerWidth;
            const baseWidth = 1000;
            const scaleFactor = viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.9 : 1;
            if (contentDiv) {
                contentDiv.style.transform = `scale(${scaleFactor})`;
            }
        }

        // Add event listeners for resizing
        window.addEventListener("resize", adjustContentSize);
        adjustContentSize();

        return () => {
            window.removeEventListener("resize", adjustContentSize);
        };
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMessages, setErrorMessages] = React.useState([]);

    const [formData, setFormData] = useState({
        teamName: "",
        domain: "",
        teamLeaderName: "",
        teamLeaderPhone: "",
        teamLeaderEmail: "",
        teamLeaderCollege: "",
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
        // Abstract submission
        abstractFile: null,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        setFormData({ ...formData, abstractFile: e.target.files[0] });
    };

    // Navigation
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);
    const validateForm = () => {
        const errors = [];
        const requiredFields = ["teamLeaderName", "teamLeaderPhone", "teamLeaderEmail", "teamLeaderCollege", "member1Name", "member1Phone", "member1Email", "member1College", "member2Name", "member2Phone", "member2Email", "member2College"];

        // Check required fields for Team Leader and minimum members
        requiredFields.forEach((field) => {
            if (!formData[field]) {
                errors.push(`${field.replace(/([A-Z])/g, " $1")} is required.`);
            }
        });

        // Check at least 1 female
        const isFemalePresent =
            formData.teamLeaderGender === "Female" ||
            formData.member1Gender === "Female" ||
            formData.member2Gender === "Female" ||
            formData.member3Gender === "Female" ||
            formData.member4Gender === "Female";

        if (!isFemalePresent) {
            errors.push("At least one female member is required.");
        }

        // Check file size
        if (formData.abstractFile && formData.abstractFile.size > 5 * 1024 * 1024) {
            errors.push("Abstract file size should not exceed 5MB.");
        }

        // Minimum members should be 3
        if (!formData.member3Name || !formData.member3Phone || !formData.member3Email || !formData.member3College) {
            errors.push("Minimum 3 members (including Team Leader) must have all required details.");
        }

        setErrorMessages(errors);
        return errors.length === 0;
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Proceed to submission logic
            console.log("Form is valid. Proceed to submit.");
        } else {
            // Errors will be displayed on the 6th page
            setPage(6); // Redirect to the 6th page to show errors
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return (
                    <>
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
                    </>
                );
            case 2:
                return (
                    <>
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
                            name="member1IEEEMember"
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
                    </>
                );
            case 3:
                return (
                    <>
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
                    </>
                );
            case 4:
                return (
                    <>
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
                    </>
                );
            case 5:
                return (
                    <>
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
                    </>
                );




            // Add cases 3–5 for other members
            case 6:
                return (
                    <>
                        {errorMessages.length > 0 && (
                            <div className="error-messages">
                                <h3>Please correct the following errors:</h3>
                                <ul>
                                    {errorMessages.map((error, index) => (
                                        <li key={index} style={{ color: "red" }}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <input
                            className="form-content"
                            type="file"
                            name="abstractFile"
                            onChange={handleFileUpload}
                        />
                        <button type="submit">Submit</button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div id="Container-input">
                <form className="form" onSubmit={handleSubmit}>
                    <div id="login-lable">BattleEidos</div>
                    {renderPage()}
                    <div className="button-container">
                        {currentPage > 1 && (
                            <button type="button" onClick={prevPage}>
                                Previous
                            </button>
                        )}
                        {currentPage < 6 && (
                            <button type="button" onClick={nextPage}>
                                Next
                            </button>
                        )}
                    </div>
                </form>
                <div id="rays">
                    <svg
                        fill="none"
                        viewBox="0 0 299 152"
                        height="9em"
                        width="18em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#paint0_linear_8_3)"
                            d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
                        />
                        <defs>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                y2="12.1981"
                                x2="150.12"
                                y1={152}
                                x1="149.5"
                                id="paint0_linear_8_3"
                            >
                                <stop stopColor="#00E0FF" />
                                <stop stopOpacity={0} stopColor="#65EDFF" offset={1} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div id="emiter">
                    <svg
                        fill="none"
                        viewBox="0 0 160 61"
                        height={61}
                        width={160}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_di_1_38)">
                            <path
                                fill="#2B2B2B"
                                d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                        <ellipse
                            fill="url(#paint0_radial_1_38)"
                            ry="4.80773"
                            rx="28.3956"
                            cy="17.4236"
                            cx={80}
                        />
                        <g filter="url(#filter1_i_1_38)">
                            <path
                                fill="#323232"
                                d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                        <g filter="url(#filter2_di_1_38)">
                            <path
                                fill="#378BA6"
                                d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="45.5002"
                                width={160}
                                y="15.4996"
                                x={0}
                                id="filter0_di_1_38"
                            >
                                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                                <feColorMatrix
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    type="matrix"
                                    in="SourceAlpha"
                                />
                                <feOffset dy={4} />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite operator="out" in2="hardAlpha" />
                                <feColorMatrix
                                    values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0"
                                    type="matrix"
                                />
                                <feBlend
                                    result="effect1_dropShadow_1_38"
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                />
                                <feBlend
                                    result="shape"
                                    in2="effect1_dropShadow_1_38"
                                    in="SourceGraphic"
                                    mode="normal"
                                />
                                <feColorMatrix
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    type="matrix"
                                    in="SourceAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={8} />
                                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                                <feColorMatrix
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                    type="matrix"
                                />
                                <feBlend
                                    result="effect2_innerShadow_1_38"
                                    in2="shape"
                                    mode="normal"
                                />
                            </filter>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="25.0002"
                                width={152}
                                y={3}
                                x={4}
                                id="filter1_i_1_38"
                            >
                                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                                <feBlend
                                    result="shape"
                                    in2="BackgroundImageFix"
                                    in="SourceGraphic"
                                    mode="normal"
                                />
                                <feColorMatrix
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    type="matrix"
                                    in="SourceAlpha"
                                />
                                <feMorphology
                                    result="effect1_innerShadow_1_38"
                                    in="SourceAlpha"
                                    operator="erode"
                                    radius={3}
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="6.5" />
                                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                                <feColorMatrix
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                                    type="matrix"
                                />
                                <feBlend
                                    result="effect1_innerShadow_1_38"
                                    in2="shape"
                                    mode="normal"
                                />
                            </filter>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="26.7583"
                                width="78.4615"
                                y="0.692139"
                                x="40.7693"
                                id="filter2_di_1_38"
                            >
                                <feFlood result="BackgroundImageFix" floodOpacity={0} />
                                <feColorMatrix
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    type="matrix"
                                    in="SourceAlpha"
                                />
                                <feMorphology
                                    result="effect1_dropShadow_1_38"
                                    in="SourceAlpha"
                                    operator="dilate"
                                    radius={2}
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={4} />
                                <feComposite operator="out" in2="hardAlpha" />
                                <feColorMatrix
                                    values="0 0 0 0 0 0 0 0 0 0.941176 0 0 0 0 1 0 0 0 1 0"
                                    type="matrix"
                                />
                                <feBlend
                                    result="effect1_dropShadow_1_38"
                                    in2="BackgroundImageFix"
                                    mode="color-dodge"
                                />
                                <feBlend
                                    result="shape"
                                    in2="effect1_dropShadow_1_38"
                                    in="SourceGraphic"
                                    mode="normal"
                                />
                                <feColorMatrix
                                    result="hardAlpha"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    type="matrix"
                                    in="SourceAlpha"
                                />
                                <feMorphology
                                    result="effect2_innerShadow_1_38"
                                    in="SourceAlpha"
                                    operator="erode"
                                    radius={1}
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation={2} />
                                <feComposite k3={1} k2={-1} operator="arithmetic" in2="hardAlpha" />
                                <feColorMatrix
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.52 0"
                                    type="matrix"
                                />
                                <feBlend
                                    result="effect2_innerShadow_1_38"
                                    in2="shape"
                                    mode="normal"
                                />
                            </filter>
                            <radialGradient
                                gradientTransform="translate(80 17.4236) rotate(90) scale(6.25004 36.9143)"
                                gradientUnits="userSpaceOnUse"
                                r={1}
                                cy={0}
                                cx={0}
                                id="paint0_radial_1_38"
                            >
                                <stop stopColor="#00FFF0" />
                                <stop stopColor="#001AFF" offset="0.901042" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div
                className="content"
                style={{ display: "block", width: 1000, height: 562 }}
            >
                <div className="container-full">
                    <div className="animated hue" />
                    <img
                        className="backgroundImage"
                        src="https://drive.google.com/thumbnail?id=1_ZMV_LcmUXLsRokuz6WXGyN9zVCGfAHp&sz=w1920"
                        alt="Background"
                    />
                    <img
                        className="boyImage"
                        src="https://drive.google.com/thumbnail?id=1eGqJskQQgBJ67myGekmo4YfIVI3lfDTm&sz=w1920"
                        alt="Boy"
                    />
                    <div className="container">
                        <div className="cube">
                            <div className="face top" />
                            <div className="face bottom" />
                            <div className="face left text" />
                            <div className="face right text" />
                            <div className="face front" />
                            <div className="face back text" />
                        </div>
                    </div>
                    <div className="container-reflect">
                        <div className="cube">
                            <div className="face top" />
                            <div className="face bottom" />
                            <div className="face left text" />
                            <div className="face right text" />
                            <div className="face front" />
                            <div className="face back text" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Registration;
