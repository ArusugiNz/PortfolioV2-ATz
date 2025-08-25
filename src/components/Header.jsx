import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
    <div class="logo">ArusugiNz</div>
    <nav>
      <ul>
        <li><a href="/" >Home</a></li>
        <li><a href="/portfolio">Portofolio</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  );
}