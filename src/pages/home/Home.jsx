/* eslint-disable react/prop-types */
import HomeCSS from "./Home.module.scss";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import video from "./space.mp4";

const Home = ({ pathNote, setPathNote }) => {

    useEffect(() => {
        setPathNote(0);
    }, [])

    const navigate = useNavigate();

    const navigateFromHome = () => {
        setPathNote(1);
        navigate("/destination");
    }

    return (
        <div className={HomeCSS.home}>
            <video autoPlay muted loop playsInline className={HomeCSS.myVideo}>
                <source src={video} type="video/mp4" />
            </video>
            <Header pathNote={pathNote} setPathNote={setPathNote} />
            <div className={HomeCSS.content}>
                <div className={HomeCSS.text}>
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className={HomeCSS.cta}>
                    <button className={HomeCSS.explore} onClick={() => navigateFromHome()}>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Home