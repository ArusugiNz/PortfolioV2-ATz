import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import port1 from "../assets/Portofolio1.jpg";

export default function Home() {
  return (
      <main>
        <section className="Home">
          <h2 className="welcome">Hello!</h2>
          <h1 className="title">I'am Naufal Zaidan <span className="cursor"></span></h1>
          <p className="description">
            I'm a Student At SMKN 8 Malang i'm Learning About Web Development, App Development And Etc.‎ ‎ ‎
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/naufal.zaidan.583" aria-label="Facebook"><img src={fb} alt="fb"/></a>
            <a href="https://www.instagram.com/arusuginz?igsh=MTZ0ZDIxNDA4b2Zncw==" aria-label="Instagram"><img src={ig} alt="ig"/></a>
          </div>
        </section>

        <section className="image-portofolio">
          <img src={port1} alt=""/>
        </section>
      </main>
  );
}
