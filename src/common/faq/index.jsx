import React, { useState } from "react";
import './FAQ.css'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleaccordion1 = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Who can participate in XYNTRA?",
            answer:
                "Any college student can participate, provided their team includes at least one female coder.",
        },
        {
            question: "Will network facilities be provided?",
            answer:
                "Don’t worry about connectivity—network facilities will be provided throughout the hackathon to ensure a seamless experience.",
        },
        {
            question: "What domains can we work on?",
            answer:
                "The five domains are Health, Defense, Fintech & Blockchain, Sustainability, and EdTech.",
        },
        {
            question: "Are there any registration fees?",
            answer:
            "Yes, ₹200 per participant is required for Round 2 registration.",
        },
        {
            question: "Can I participate in more than one team?",
            answer:
                "No, each participant can only join one team.",
        },
        {
            question: "What happens if technical issues arise during the hackathon?",
            answer:
                "Contact the organizers immediately for prompt resolution.",
        },
        {
            question: "Are pre-developed solutions allowed?",
            answer:
                "No, all projects must be developed during the hackathon timeframe.",
        },
        {
            question: "Is there any mentorship available?",
            answer: "Yes, multiple mentoring sessions are scheduled throughout the event.",
        },
        {
            question: "What facilities will be provided?",
            answer:
                "Participants will have access to a designated venue, meals, network facilities, and refreshment breaks to ensure a smooth experience.",
        },
        {
            question: "What is the judging criteria?",
            answer:
                "Judges will evaluate based on creativity, functionality, technical depth, and relevance to the domain.",
        },
        {
            question: "How do we keep our project updated?",
            answer: "Teams must maintain an updated GitHub repository throughout the hackathon.",
        },
        {
            question: "Do I need to be a student to participate?",
            answer: "Yes, this hackathon is open to high school and undergraduate students.",
        },
    ];

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="row">
                    <div className="faq-column">
                        <div className="accordion1">
                            {faqData.slice(0, 6).map((item, index) => (
                                <div className="accordion1-item" key={index}>
                                    <button className="accordion1-button" onClick={() => toggleaccordion1(index)}>
                                        {item.question}
                                        <span className="accordion1-icon">{activeIndex === index ? "-" : "+"}</span>
                                    </button>
                                    <div className={`accordion1-content ${activeIndex === index ? "show" : ""}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="faq-column">
                        <div className="accordion1">
                            {faqData.slice(6).map((item, index) => (
                                <div className="accordion1-item" key={index + 6}>
                                    <button className="accordion1-button" onClick={() => toggleaccordion1(index + 6)}>
                                        {item.question}
                                        <span className="accordion1-icon">{activeIndex === index + 6 ? "-" : "+"}</span>
                                    </button>
                                    <div className={`accordion1-content ${activeIndex === index + 6 ? "show" : ""}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
