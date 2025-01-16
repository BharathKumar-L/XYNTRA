import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import './Timeline.css';

const Timeline = () => {
    useEffect(() => {
        const $timelineBlock = $('.cd-timeline-block');

        // Hide timeline blocks that are outside the viewport on initial load
        $timelineBlock.each(function () {
            if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            }
        });

        // On scrolling, show/animate timeline blocks when they enter the viewport
        const handleScroll = () => {
            $timelineBlock.each(function () {
                if (
                    $(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 &&
                    $(this).find('.cd-timeline-img').hasClass('is-hidden')
                ) {
                    $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
                }
            });
        };

        $(window).on('scroll', handleScroll);

        handleScroll();

        // Cleanup the scroll event listener on component unmount
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

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
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-movie">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg"
                            alt="Movie"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Title of section 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                            dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa
                            ad debitis unde?
                        </p>
                        <a href="#0" className="cd-read-more">
                            Read more
                        </a>
                        <span className="cd-date">Jan 18</span>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"
                            alt="Picture"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Title of section 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati,
                            quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda
                            delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum
                            quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam
                            provident pariatur temporibus quia eos repellat consequuntur perferendis enim
                            amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum
                            eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.
                        </p>
                        <a href="#0" className="cd-read-more">
                            Read more
                        </a>
                        <span className="cd-date">Jan 24</span>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg"
                            alt="Location"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Title of section 4</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                            dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa
                            ad debitis unde? Iste voluptatibus minus veritatis qui ut.
                        </p>
                        <a href="#0" className="cd-read-more">
                            Read more
                        </a>
                        <span className="cd-date">Feb 14</span>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-location">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg"
                            alt="Location"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Title of section 5</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                            dolorum provident rerum.
                        </p>
                        <a href="#0" className="cd-read-more">
                            Read more
                        </a>
                        <span className="cd-date">Feb 18</span>
                    </div>
                </div>

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-movie">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg"
                            alt="Movie"
                        />
                    </div>

                    <div className="cd-timeline-content">
                        <h2>Final Section</h2>
                        <p>This is the content of the last section</p>
                        <span className="cd-date">Feb 26</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Timeline;
