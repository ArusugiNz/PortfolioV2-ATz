import myistri from "../assets/Myistri.jpg";
import test from "../assets/Test.jpg";

export default function Portfolio() {
  return (
    <section className="Portofolio">
      <div className="Aboutme">
        <h1>About Me</h1>
        <p>Age : 17</p>
        <p>Height : 180cm</p>
        <p>Nationality : Indonesian</p>
        <p>Languages : Indonesian, English, Javanese</p>

        <h1>Contact</h1>
        <p>
          Email:{" "}
          <a
            href="mailto:bsnmraincarnated@gmail.com"
            style={{ color: "#653780" }}
          >
            bsnmraincarnated@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+6281330099087" style={{ color: "#653780" }}>
            +62 813-3009-9087
          </a>
        </p>

        <h1>Skills & Interests</h1>
        <ul>
          <li>Web Development</li>
          <li>App Development</li>
          <li>UI/UX Design</li>
          <li>Digital Drawing</li>
        </ul>

        <img src={myistri} alt="me" />
      </div>

      <div className="porto2">
        <div className="porto2img">
          <img src={test} alt="porto2" />
        </div>
      </div>
    </section>
  );
}
