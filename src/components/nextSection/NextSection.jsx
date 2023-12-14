import NextSectionCss from "./NextSection.module.scss";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NextSection = ({section, direction }) => {
  const navigate = useNavigate();

  const redirect = (direction) => {
    navigate(direction);
  }

  return (
    <div className={NextSectionCss.nextSection} onClick={() => redirect(direction)}>
      <h3>
        {section}...
      </h3>
    </div>
  )
}

export default NextSection