import Hero from "../components/Hero";
interface HeroParams {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClassName: string;
  buttonText: string;
}

function About() {
  const objects: HeroParams = {
    cName: ".hero-mid",
    heroImg:
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "About",
    text: "Choose Your Favourite Destination",
    url: "/",
    btnClassName: "hide",
    buttonText: "Travel Plan",
  };
  return (
    <>
      <div>
        <Hero {...objects} />
      </div>
    </>
  );
}

export default About;
