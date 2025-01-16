import React, { useEffect,useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import './Registration.css';

const Registration = () => {
    // Poem text
    const kiplingPoem = `<p>If you can <span>keep</span> your head when all about you    
    Are <span>losing</span> theirs and <span>blaming</span> it on you; 
    If you can <span>trust</span> yourself when all men <span>doubt</span> you,    
    But make <span>allowance</span> for their doubting too; 
    If you can <span>wait</span> and not be tired by waiting,    
    Or, being <span>lied</span> about, don't deal in <span>lies</span>, 
    Or, being <span>hated</span>, don't give way to <span>hating</span>,    
    And yet don't look too good, nor talk too wise;
    If you can bear to hear the <span>truth</span> you've spoken    
    <span>Twisted</span> by knaves to make a <span>trap</span> for fools, 
    Or watch the things you gave your life to <span>broken</span>,    
    And <span>stoop</span> and build 'em up with wornout tools;
    If you can make one <span>heap</span> of all your <span>winnings</span>    
    And <span>risk</span> it on one turn of pitch-and-toss, 
    And <span>lose</span>, and start again at your beginnings    
    And never breathe a word about your <span>loss</span>; 
    If you can <span>force</span> your heart and nerve and <span>sinew</span>    
    To <span>serve</span> your turn long after they are gone, 
    And so <span>hold on</span> when there is nothing in you    
    Except the <span>Will</span> which says to them: "Hold on";
    If you can <span>talk</span> with crowds and keep your <span>virtue</span>,    
    Or <span>walk</span> with kings—nor lose the common <span>touch</span>; 
    If neither <span>foes</span> nor loving friends can hurt you;    
    If all men <span>count</span> with you, but none too much; 
    If you can fill the unforgiving <span>minute</span> 
    With sixty seconds' worth of distance <span>run</span>—    
    Yours is the <span>Earth</span> and everything that's in it, 
    And—which is more—you'll be a <span>Man</span>, my son!     -Rudyard Kipling</p>`;

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
    const [formData, setFormData] = useState({
        teamName: "",
        abstractLink: "",
        domain: "",
        member1Phone: "",
        teamLeaderName: "",
        teamLeaderPhone: "",
        teamLeaderEmail: "",
        member1Name: "",
        member1Email: "",
        member2Name: "",
        member2Email: "",
        member2Phone: "",
        member3Name: "",
        member3Email: "",
        member3Phone: "",
        member4Name: "",
        member4Email: "",
        member4Phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data:", formData);
        // Further actions like sending data to the server can be added here.
    };


    return (
        <div className="container">
            <div id="Container-input">
            <form className="form" onSubmit={handleSubmit}>
                    <div id="login-lable">Registration</div>
                    <input
                        className="form-content first-input"
                        type="text"
                        name="teamName"
                        placeholder="Team Name"
                        value={formData.teamName}
                        onChange={handleChange}
                    />
                    <textarea
                        className="form-content"
                        name="abstractLink"
                        placeholder="Provide the Abstract Drive link"
                        rows="4"
                        value={formData.abstractLink}
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
                        type="email"
                        name="teamLeaderEmail"
                        placeholder="Team Leader Email"
                        value={formData.teamLeaderEmail}
                        onChange={handleChange}
                    />
                    <input
                        className="form-content"
                        type="text"
                        name="teamLeaderPhone"
                        placeholder="Team Leader Phone Number"
                        value={formData.teamLeaderPhone}
                        onChange={handleChange}
                    />
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
                        type="email"
                        name="member1Email"
                        placeholder="Member 1 Email"
                        value={formData.member1Email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-content"
                        type="text"
                        name="member1Phone"
                        placeholder="Member 1 Phone Number"
                        value={formData.member1Phone}
                        onChange={handleChange}
                    />
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
                        type="email"
                        name="member2Email"
                        placeholder="Member 2 Email"
                        value={formData.member2Email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-content"
                        type="text"
                        name="member2Phone"
                        placeholder="Member 2 Phone Number"
                        value={formData.member2Phone}
                        onChange={handleChange}
                    />
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
                        type="email"
                        name="member3Email"
                        placeholder="Member 3 Email"
                        value={formData.member3Email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-content"
                        type="text"
                        name="member3Phone"
                        placeholder="Member 3 Phone Number"
                        value={formData.member3Phone}
                        onChange={handleChange}
                    />
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
                        type="email"
                        name="member4Email"
                        placeholder="Member 4 Email"
                        value={formData.member4Email}
                        onChange={handleChange}
                    />
                    <input
                        className="form-content"
                        type="text"
                        name="member4Phone"
                        placeholder="Member 4 Phone Number"
                        value={formData.member4Phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit Registration</button>
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
