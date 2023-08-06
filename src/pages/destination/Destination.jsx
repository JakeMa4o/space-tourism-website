import DestinationCSS from "./Destination.module.scss";
import Header from "../../components/header/Header";
// import Tabs from "../../components/tabs/Tabs";
import moon from "./assets/destination/image-moon.png";
import mars from "./assets/destination/image-mars.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";
import { useState } from "react";

const Destination = () => {

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div className={DestinationCSS.destination}>
      <Header />
      <div className={DestinationCSS.content}>
        <h2><span>01</span>Pick your destination</h2>

        <div className={DestinationCSS.body}>


          <div className={DestinationCSS.imagesTab}>
            <div className={toggleState === 0 ? `${DestinationCSS.image} ${DestinationCSS.active}` : DestinationCSS.image}>
              <img src={moon} alt="moon" />
            </div>
            <div className={toggleState === 1 ? `${DestinationCSS.image} ${DestinationCSS.active}` : DestinationCSS.image}>
              <img src={mars} alt="mars" />
            </div>
            <div className={toggleState === 2 ? `${DestinationCSS.image} ${DestinationCSS.active}` : DestinationCSS.image}>
              <img src={europa} alt="europa" />
            </div>
            <div className={toggleState === 3 ? `${DestinationCSS.image} ${DestinationCSS.active}` : DestinationCSS.image}>
              <img src={titan} alt="titan" />
            </div>
          </div>

          <div className={DestinationCSS.info}>
            <div className={DestinationCSS.tabs}>
              <div className={toggleState === 0 ? `${DestinationCSS.tab} ${DestinationCSS.active}` : DestinationCSS.tab} onClick={() => toggleTab(0)}>Moon</div>
              <div className={toggleState === 1 ? `${DestinationCSS.tab} ${DestinationCSS.active}` : DestinationCSS.tab} onClick={() => toggleTab(1)}>Mars</div>
              <div className={toggleState === 2 ? `${DestinationCSS.tab} ${DestinationCSS.active}` : DestinationCSS.tab} onClick={() => toggleTab(2)}>Europa</div>
              <div className={toggleState === 3 ? `${DestinationCSS.tab} ${DestinationCSS.active}` : DestinationCSS.tab} onClick={() => toggleTab(3)}>Titan</div>
            </div>



            <div className={DestinationCSS.contentTab}>
              <div className={toggleState === 0 ? `${DestinationCSS.description} ${DestinationCSS.active}` : DestinationCSS.description}>
                <div className={DestinationCSS.text}>
                  <h1>Moon</h1>
                  <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                </div>
                <div className={DestinationCSS.numbers}>
                  <p>avg. distance <span>384,400 km</span></p>
                  <p>est travel days <span>3 days</span></p>
                </div>
              </div>

              <div className={toggleState === 1 ? `${DestinationCSS.description} ${DestinationCSS.active}` : DestinationCSS.description}>
                <div className={DestinationCSS.text}>
                  <h1>Mars</h1>
                  <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                </div>
                <div className={DestinationCSS.numbers}>
                  <p>avg. distance <span>225 MIL. km</span></p>
                  <p>est travel days <span>9 months</span></p>
                </div>
              </div>

              <div className={toggleState === 2 ? `${DestinationCSS.description} ${DestinationCSS.active}` : DestinationCSS.description}>
                <div className={DestinationCSS.text}>
                  <h1>Europa</h1>
                  <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                </div>
                <div className={DestinationCSS.numbers}>
                  <p>avg. distance <span>628 MIL. km</span></p>
                  <p>est travel days <span>3 years</span></p>
                </div>
              </div>

              <div className={toggleState === 3 ? `${DestinationCSS.description} ${DestinationCSS.active}` : DestinationCSS.description}>
                <div className={DestinationCSS.text}>
                  <h1>Titan</h1>
                  <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                </div>
                <div className={DestinationCSS.numbers}>
                  <p>avg. distance <span>1.6 BIL. km</span></p>
                  <p>est travel days <span>7 years</span></p>
                </div>
              </div>

              
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Destination