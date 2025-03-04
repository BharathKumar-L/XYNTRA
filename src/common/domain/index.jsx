import React from "react";
import TiltedCard from "./Titlecard";
import "./Domains.css"; // Import CSS file
import Healthcare from '../../assets/DigitalHealthcare.jpg'
import Defense from '../../assets/Defense.jpg'
import edTech from '../../assets/edtech.jpg'
import fintech from '../../assets/fintech.png'
import questonmark from '../../assets/questonmark.webp'
 
const Domains = () => {
    return (
        <>
            <h1 class="text_domain" >Domains</h1>
            <div className="container">
                <TiltedCard
                    imageSrc = {Healthcare}
                    altText="Health"
                    captionText="Health"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="overlay-text">Health</p>
                    }
                />
                               <TiltedCard
                    imageSrc={Defense}
                    altText="Defense"
                    captionText="Defense"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="overlay-text">Defense</p>
                    }
                />
                               <TiltedCard
                    imageSrc={edTech}
                    altText="EdTech"
                    captionText="EdTech"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="overlay-text">EdTech</p>
                    }
                />
                               <TiltedCard
                    imageSrc={fintech}
                    altText="Open Domain"
                    captionText="Open Domain"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="overlay-text">Fintech and Blockchain</p>
                    }
                />
                               <TiltedCard
                    imageSrc={questonmark}
                    altText="Open Domain"
                    captionText="Open Domain"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="overlay-text">Open Domain</p>
                    }
                />
            </div>
        </>
    );
};

export default Domains;
