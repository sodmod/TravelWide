import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

interface HeroParams {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClassName: string;
  buttonText: string;
}
function Home() {
  const objects: HeroParams = {
    cName: "hero",
    heroImg:
      "https://images.unsplash.com/photo-1516685304081-de7947d419d5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Your Journey Your Story",
    text: "Choose Your Favourite Destination",
    url: "/",
    btnClassName: "show",
    buttonText: "Travel Plan",
  };

  return (
    <>
      <div>
        <Hero {...objects} />
        <Destination />
        <Trip />
      </div>
    </>
  );
}

export default Home;
