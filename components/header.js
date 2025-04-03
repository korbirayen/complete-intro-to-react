import { useContext } from "react";
import Link from "next/link";
import { Context as HeaderContext } from "../context/headerContext";
import { Context as CourseContext } from "../context/courseInfoContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(HeaderContext);
  return (
    <header className="navbar">
      <h1 className="navbar-brand">
        <Link href="/">{props.title}</Link>
      </h1>
      <div className="navbar-nav">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/#lessons" className="nav-link">Lessons</Link>
        <Link href="/#resources" className="nav-link">Resources</Link>
        <Link href="https://github.com/korbirayen" target="_blank" className="nav-link">GitHub</Link>
      </div>
      <div className="navbar-info">
        {section ? (
          <h2>
            {section} <i className={`fas fa-${icon}`} /> {title}
          </h2>
        ) : null}
      </div>
    </header>
  );
}
