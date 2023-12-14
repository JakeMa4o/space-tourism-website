/* eslint-disable react/prop-types */
import CrewCSS from "./Crew.module.scss";
import Header from "../../components/header/Header";
import NextSection from "../../components/nextSection/NextSection";

import anousheh from "./assets/crew/image-anousheh-ansari.webp";
import douglas from "./assets/crew/image-douglas-hurley.webp";
import mark from "./assets/crew/image-mark-shuttleworth.webp";
import victor from "./assets/crew/image-victor-glover.webp";

import { useEffect, useState } from "react";


const Crew = ({ pathNote, setPathNote }) => {
  useEffect(() => {
    setPathNote(2);
  }, [])

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <div className={CrewCSS.crew}>
      <Header pathNote={pathNote} setPathNote={setPathNote} />
      <div className={CrewCSS.content}>
        <h2><span>02</span>Meet your crew</h2>

        <div className={CrewCSS.body}>
          <div className={CrewCSS.imagesTab}>
            <div className={toggleState === 0 ? `${CrewCSS.image} ${CrewCSS.active}` : CrewCSS.image}>
              <img src={douglas} alt="douglas" />
            </div>
            <div className={toggleState === 1 ? `${CrewCSS.image} ${CrewCSS.active}` : CrewCSS.image}>
              <img src={mark} alt="mark" />
            </div>
            <div className={toggleState === 2 ? `${CrewCSS.image} ${CrewCSS.active}` : CrewCSS.image}>
              <img src={victor} alt="victor" />
            </div>
            <div className={toggleState === 3 ? `${CrewCSS.image} ${CrewCSS.active}` : CrewCSS.image}>
              <img src={anousheh} alt="anousheh" />
            </div>
          </div>

          <div className={CrewCSS.info}>
            <div className={CrewCSS.tabs}>
              <div className={toggleState === 0 ? `${CrewCSS.tab} ${CrewCSS.active}` : CrewCSS.tab} onClick={() => toggleTab(0)}></div>
              <div className={toggleState === 1 ? `${CrewCSS.tab} ${CrewCSS.active}` : CrewCSS.tab} onClick={() => toggleTab(1)}></div>
              <div className={toggleState === 2 ? `${CrewCSS.tab} ${CrewCSS.active}` : CrewCSS.tab} onClick={() => toggleTab(2)}></div>
              <div className={toggleState === 3 ? `${CrewCSS.tab} ${CrewCSS.active}` : CrewCSS.tab} onClick={() => toggleTab(3)}></div>
            </div>

            <div className={CrewCSS.contentTab}>

              <div className={toggleState === 0 ? `${CrewCSS.description} ${CrewCSS.active}` : CrewCSS.description}>
                <div className={CrewCSS.text}>
                  <span className={CrewCSS.role}>commander</span>
                  <h1>Douglas Hurley</h1>
                  <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
              </div>

              <div className={toggleState === 1 ? `${CrewCSS.description} ${CrewCSS.active}` : CrewCSS.description}>
                <div className={CrewCSS.text}>
                  <span className={CrewCSS.role}>Mission Specialist </span>
                  <h1>MARK SHUTTLEWORTH</h1>
                  <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>
              </div>

              <div className={toggleState === 2 ? `${CrewCSS.description} ${CrewCSS.active}` : CrewCSS.description}>
                <div className={CrewCSS.text}>
                  <span className={CrewCSS.role}>PILOT</span>
                  <h1>Victor Glover</h1>
                  <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                </div>
              </div>

              <div className={toggleState === 3 ? `${CrewCSS.description} ${CrewCSS.active}` : CrewCSS.description}>
                <div className={CrewCSS.text}>
                  <span className={CrewCSS.role}>Flight Engineer</span>
                  <h1>Anousheh Ansari</h1>
                  <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {toggleState === 3 && <NextSection section="Technology" direction="/technology" setPathNote={setPathNote} />}
      </div>
    </div>
  )
}

export default Crew