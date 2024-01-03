import "./spinner.css";
import gif from "../../asset/preloader.gif";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
      }}
    >
      <img width="300" height="300" src={gif} alt="spinner" loading="lazy" />
    </div>
  );
};

export default Spinner;
