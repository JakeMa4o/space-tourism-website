import CrewCSS from "./Crew.module.scss";
import Header from "../../components/header/Header";

const Crew = () => {
  return (
    <div className={CrewCSS.crew}>
        <Header />
        <h1>Crew</h1>
        <p>Upcoming...</p>
    </div>
  )
}

export default Crew