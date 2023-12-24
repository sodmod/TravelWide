import ContactForm from "../components/ContactForm";
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

function Contact() {
  const objects: HeroParams = {
    cName: "hero-mid",
    heroImg:
      "https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Contact Us",
    text: "",
    url: "/",
    btnClassName: "hide",
    buttonText: "Travel Plan",
  };
  return (
    <>
      <Hero {...objects} />
      <ContactForm />
    </>
  );
}

export default Contact;
