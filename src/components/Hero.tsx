import { Link } from "react-router-dom";
import "./HeroStyle.css";

interface HeroParams {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClassName: string;
  buttonText: string;
}

function Hero(props: HeroParams) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="my image" />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClassName}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
