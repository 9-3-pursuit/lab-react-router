import Highlights from "./Highlights";
import NewsletterForm from "./NewsletterForm";
import splashImage from "./andrew-s-unsplash.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = ({ employees, owners, pets }) => {
  return (
    <main>
      <Link to="/">
      <section className="splash-image">
        <img src={splashImage} alt="Splash." />
        <Highlights employees={employees} owners={owners} pets={pets} />
        <NewsletterForm />
      </section>
      </Link>
    </main>
  );
};

export default Home;
      
