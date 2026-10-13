import { useEffect, useState } from "react";

const links = [
  ["Features", "#features"],
  ["Stories", "#stories"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

function ThemeToggle({ darkMode, onChange }) {
  return (
    <label className="dark-mode-toggle">
      <span aria-hidden="true">{darkMode ? "☾" : "☀"}</span>
      <span>Dark mode</span>
      <span className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={(event) => onChange(event.target.checked)}
          aria-label="Enable dark mode"
        />
        <span className="slider" />
      </span>
    </label>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return window.localStorage.getItem("aether-theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    window.localStorage.setItem("aether-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo" href="#home" onClick={closeMenu}>
            <span className="logo-icon" aria-hidden="true">✳</span>
            <span className="logo-text">Aether<span>AI</span></span>
          </a>

          <nav aria-label="Main navigation">
            <ul className="navbar-links">
              {links.map(([label, href]) => (
                <li key={href}><a className="nav-link" href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <ThemeToggle darkMode={darkMode} onChange={setDarkMode} />
            <a className="btn-get-started" href="#pricing">Start building <span aria-hidden="true">↗</span></a>
          </div>

          <button
            className="hamburger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-drawer-overlay${menuOpen ? " active" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <aside
        id="mobile-navigation"
        className={`mobile-drawer${menuOpen ? " active" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-header">
          <a className="navbar-logo" href="#home" onClick={closeMenu}>
            <span className="logo-icon" aria-hidden="true">✳</span>
            <span className="logo-text">Aether<span>AI</span></span>
          </a>
          <button className="drawer-close" type="button" aria-label="Close menu" onClick={closeMenu}>×</button>
        </div>
        <ul className="mobile-nav-links">
          {links.map(([label, href]) => (
            <li key={href}><a className="mobile-link" href={href} onClick={closeMenu}>{label}<span aria-hidden="true">↗</span></a></li>
          ))}
        </ul>
        <div className="mobile-drawer-actions">
          <ThemeToggle darkMode={darkMode} onChange={setDarkMode} />
          <a className="btn-get-started mobile-btn" href="#pricing" onClick={closeMenu}>Start building ↗</a>
        </div>
      </aside>
    </>
  );
}
