import React from "react";
import TiltedCard from "./Titlecard";
import "./Domains.css"; // Import CSS file
import Healthcare from '../../assets/DigitalHealthcare.jpg'
import Defense from '../../assets/Defense.jpg'
import blockchain from '../../assets/blockchain.webp'
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
                    altText="militaryr"
                    captionText="military"
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
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Kendrick Lamar - GNX"
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
                        <p className="overlay-text">Kendrick Lamar - GNX</p>
                    }
                />
                               <TiltedCard
                    imageSrc={blockchain}
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Kendrick Lamar - GNX"
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
                        <p className="overlay-text">Kendrick Lamar - GNX</p>
                    }
                />
                               <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Kendrick Lamar - GNX"
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
                        <p className="overlay-text">Kendrick Lamar - GNX</p>
                    }
                />
            </div>
        </>
    );
};

export default Domains;
