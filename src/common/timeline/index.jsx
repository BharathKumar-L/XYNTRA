import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import './Timeline.css';

const Timeline = ({ setObserver, callback }) => {
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");

    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const circle1 = useRef(null);
    const circle2 = useRef(null);
    const circle3 = useRef(null);

    const someCallback = () => {
        setMessage1("Step one");
        callback();
    };

    $(window).on('scroll', handleScroll);

    handleScroll();

    return () => {
        $(window).off('scroll', handleScroll);
    };

    return (
        <div>
            <section id="cd-timeline" className="cd-container">
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"
                            alt="Picture"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Title of section 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                            dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa
                            ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                        </p>
                        <a href="#0" className="cd-read-more">
                            Read more
                        </a>
                        <span className="cd-date">Jan 14</span>
                    </div>
                    <div className="message">{message1}</div>
                </div>
                <div id="timeline2" ref={timeline2} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle2" ref={circle2} className="circle">
                        2
                    </div>
                    <div className="message">{message2}</div>
                </div>
                <div id="timeline3" ref={timeline3} className="timeline" />
                <div className="circleWrapper">
                    <div id="circle3" ref={circle3} className="circle">
                        3
                    </div>
                    <div className="message">{message3}</div>
                </div>
            </section>
        </div>
    );
};

export default Timeline;
