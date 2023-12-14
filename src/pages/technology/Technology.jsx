/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Media from 'react-media';

import TechnologyCSS from "./Technology.module.scss";
import Header from "../../components/header/Header";

import launchVehicle from "./assets/technology/image-launch-vehicle-landscape.webp";
import launchVehiclePortrait from "./assets/technology/image-launch-vehicle-portrait.webp"
import spaceCapsule from "./assets/technology/image-space-capsule-landscape.webp";
import spaceCapsulePortrait from "./assets/technology/image-space-capsule-portrait.webp";
import spaceport from "./assets/technology/image-spaceport-landscape.webp";
import spaceportProtrait from "./assets/technology/image-spaceport-portrait.webp";

import { useEffect, useState } from "react";

const Technology = ({ pathNote, setPathNote }) => {

  useEffect(() => {
    setPathNote(3);
  }, [])

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className={TechnologyCSS.technology}>
      <Header pathNote={pathNote} setPathNote={setPathNote} />
      <div className={TechnologyCSS.content}>
        <h2><span>03</span>Space launch 101</h2>

        <div className={TechnologyCSS.body}>
          <div className={TechnologyCSS.imagesTab}>
            <div className={toggleState === 0 ? `${TechnologyCSS.image} ${TechnologyCSS.active}` : TechnologyCSS.image}>
              <Media query="(min-width: 1440px)">
                {matches => {
                  return matches ? <img src={launchVehiclePortrait} alt="launchVehicle" /> : <img src={launchVehicle} alt="launchVehicle" />
                }}
              </Media>
            </div>
            <div className={toggleState === 1 ? `${TechnologyCSS.image} ${TechnologyCSS.active}` : TechnologyCSS.image}>
              <Media query="(min-width: 1440px)">
                {matches => {
                  return matches ? <img src={spaceCapsulePortrait} alt="spaceCapsule" /> : <img src={spaceCapsule} alt="spaceCapsule" />
                }}
              </Media>
            </div>
            <div className={toggleState === 2 ? `${TechnologyCSS.image} ${TechnologyCSS.active}` : TechnologyCSS.image}>
              <Media query="(min-width: 1440px)">
                {matches => {
                  return matches ? <img src={spaceportProtrait} alt="spaceport" /> : <img src={spaceport} alt="spaceport" />
                }}
              </Media>
            </div>
          </div>

          <div className={TechnologyCSS.info}>

            <div className={TechnologyCSS.tabs}>
              <div className={toggleState === 0 ? `${TechnologyCSS.tab} ${TechnologyCSS.active}` : TechnologyCSS.tab} onClick={() => toggleTab(0)}>1</div>
              <div className={toggleState === 1 ? `${TechnologyCSS.tab} ${TechnologyCSS.active}` : TechnologyCSS.tab} onClick={() => toggleTab(1)}>2</div>
              <div className={toggleState === 2 ? `${TechnologyCSS.tab} ${TechnologyCSS.active}` : TechnologyCSS.tab} onClick={() => toggleTab(2)}>3</div>
            </div>

            <div className={TechnologyCSS.contentTab}>
              <p className={TechnologyCSS.terminology}>THE TERMINOLOGY…</p>
              <div className={toggleState === 0 ? `${TechnologyCSS.description} ${TechnologyCSS.active}` : TechnologyCSS.description}>
                <div className={TechnologyCSS.text}>
                  <h1>LAUNCH VEHICLE</h1>
                  <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch </p>
                </div>
              </div>
              <div className={toggleState === 1 ? `${TechnologyCSS.description} ${TechnologyCSS.active}` : TechnologyCSS.description}>
                <div className={TechnologyCSS.text}>
                  <h1>SPACEPORT</h1>
                  <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
              </div>
              <div className={toggleState === 2 ? `${TechnologyCSS.description} ${TechnologyCSS.active}` : TechnologyCSS.description}>
                <div className={TechnologyCSS.text}>
                  <h1>SPACE CAPSULE</h1>
                  <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
              </div>

            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Technology