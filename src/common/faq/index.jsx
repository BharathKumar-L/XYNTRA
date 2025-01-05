import React, { useState,useRef  } from "react";
import "./FAQ.css"; // Import CSS for styling
import data from '../../assets/data/data.json';

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null); // Reference to the content div

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <div className="accordion-item">
            <button className="accordion-button" onClick={toggleAccordion}>
                {question}
                <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
            </button>
            <div
                className="accordion-content"
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-out",
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const leftColumnFAQs = [
        {
            question: "What is the purpose of the Club?",
            answer:
                "The Tech Club aims to foster a community of technology enthusiasts, providing resources and opportunities to learn, collaborate, and innovate in various tech domains.",
        },
        {
            question: "Do I need prior knowledge to join the Club?",
            answer:
                "No prior knowledge is required! We welcome members at all skill levels, from beginners to advanced tech enthusiasts.",
        },
        {
            question: "What activities does the Club organize?",
            answer:
                "We organize workshops, hackathons, coding challenges, guest lectures, and collaborative projects in various areas like AI, web development, cybersecurity, and more.",
        },
        {
            question: "Are there any membership fees for joining?",
            answer:
                "Membership is free! You can participate in most events without any cost. However, some special events may have minimal fees.",
        },
        {
            question: "Will there be opportunities for hands-on learning?",
            answer:
                "Yes, we emphasize practical, hands-on learning experiences, from coding sessions to real-world project collaborations and hackathons.",
        },
        {
            question: "Can I get guidance or mentorship in the club?",
            answer:
                "Absolutely! Our club members and mentors are always ready to help. You'll also have access to industry experts during special events and workshops.",
        },
    ];

    const rightColumnFAQs = [
        {
            question: "What should I bring for the hackathon?",
            answer:
                "Bring your student ID, laptops, gadgets, or anything else you want to work on.",
        },
        {
            question: "Will the hackathon have Wi-Fi facilities?",
            answer: "Yes, we will provide Wi-Fi throughout the event.",
        },
        {
            question: "Can I participate without a team?",
            answer:
                "No, this hackathon is a team event. You can team up with others in our community group.",
        },
        {
            question: "Will you sponsor our travel costs?",
            answer:
                "No, we do not reimburse travel costs, but accommodation is provided for those traveling from outside the city.",
        },
        {
            question: "Will there be any mentoring sessions?",
            answer: "Yes, mentors will guide you throughout the hackathon.",
        },
        {
            question: "Do I need to be a student to participate?",
            answer: "Yes, this hackathon is open to high school and undergraduate students.",
        },
    ];

    return (
        <div className="flex justify-start">
            <div className="container">
                <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
                <div className="row">
                    <div className="faq-column">
                        <div className="accordion">
                            {data.leftColumnFAQs.map((faq, index) => (
                                <AccordionItem
                                    key={`left-faq-${index}`}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="faq-column">
                        <div className="accordion">
                            {data.rightColumnFAQs.map((faq, index) => (
                                <AccordionItem
                                    key={`right-faq-${index}`}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
