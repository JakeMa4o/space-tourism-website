import HomeCSS from "./Home.module.scss";
import Header from "../../components/header/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={HomeCSS.home}>
            <Header />
            <div className={HomeCSS.content}>
                <div className={HomeCSS.text}>
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className={HomeCSS.cta}>
                    <button className={HomeCSS.explore} onClick={() => {navigate("/destination")}}>Explore</button>
                </div>
            </div>
        </div>
    )
}

export default Home