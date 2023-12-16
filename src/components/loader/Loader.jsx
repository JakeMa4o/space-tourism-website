import LoaderCss from "./Loader.module.scss";

// eslint-disable-next-line react/prop-types
const Loader = ({imagesLoad }) => {
  return (
    // <div className={LoaderCss.loaderWrapper}>
    //   <div className={LoaderCss.loader}></div>
    // </div>
    <div className={!imagesLoad ? LoaderCss.loaderWrapper : `${LoaderCss.loaderWrapper} ${LoaderCss.loaded}`}>
      <div className={LoaderCss.loader}></div>
    </div>
  )
}

export default Loader