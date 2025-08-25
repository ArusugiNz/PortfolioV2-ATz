import tsumiki from "../assets/TsumikiSummer.jpg";
import tidur from "../assets/Tidur.jpg";
import game from "../assets/game.jpg";
import tank from "../assets/Tank.gif";
import musicFile from "../assets/music.mp3";
import { useState, useRef } from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import ts from "../assets/dart.svg";
import tailwind from "../assets/tailwind.svg";
import flutter from "../assets/flutter.svg";


export default function About() {
  const techs = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "Dart", img: ts },
    { name: "Flutter", img: flutter },
    { name: "Tailwind CSS", img: tailwind },  
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="About">
      <h1>What I Like</h1>
      <div className="icard-container">
        <div className="icard">
          <img src={tsumiki} alt="Tsumiki Image 1" />
          <h3>Tsumiki Miniwa</h3>
          <p>My Beloved Wife</p>
        </div>

        <div className="icard">
          <img src={tidur} alt="Sleep" />
          <h3>Sleep</h3>
          <p>I Can Rest In Peace</p>
        </div>

        <div className="icard">
          <img src={game} alt="Play" />
          <h3>Playing Game</h3>
          <p>Make My Day Better</p>
        </div>

        <div className="icard">
          <img src={tank} alt="Music" />
          <h3>Music</h3>
          <p>Make Me Relax</p>
          <button onClick={playMusic} className="play-music">
            {isPlaying ? "Pause ⏸" : "Play ▶"}
          </button>
          <audio
            ref={audioRef}
            src={musicFile}
            onEnded={() => setIsPlaying(false)}
          ></audio>
        </div>
      </div>
      <section className="tech-stack">
      <h1>My Skill</h1>
      <div className="marquee">
        <div className="marquee-content">
          {techs.map((t, i) => (
            <div key={i} className="tech-card">
              <img src={t.img} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}

          {techs.map((t, i) => (
            <div key={`dup-${i}`} className="tech-card">
              <img src={t.img} alt={t.name} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
}
