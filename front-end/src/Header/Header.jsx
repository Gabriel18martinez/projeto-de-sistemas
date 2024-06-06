import { Outlet } from "react-router-dom";
import "./Header.css";
import './Footer.css';

export default function Header() {
  return (
    <>
    <header className="header">
      <button className="home-button"><a href="/">Home</a></button>
      <img
        className="logo"
        src="favicon.ico"
        alt="Logo"
      />
    </header>
    <Outlet></Outlet>
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
    </>
  );
}

