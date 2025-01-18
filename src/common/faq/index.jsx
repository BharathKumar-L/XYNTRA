import React, { useState, useRef } from "react";
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
    const allFAQs = [
        ...data.leftColumnFAQs,
        ...data.rightColumnFAQs
    ];

    return (
        <div className="container">
            <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="accordion">
                {allFAQs.map((faq, index) => (
                    <AccordionItem
                        key={`faq-${index}`}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
