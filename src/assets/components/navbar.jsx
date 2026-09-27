export default function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-logo">
            <span class="logo-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="logo-text">AetherAI</span>
          </div>

          <ul class="navbar-links">
            <li class="nav-item dropdown">
              <a href="#" class="nav-link">
                Platform <span class="arrow">⌄</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link">
                Solutions <span class="arrow">⌄</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Docs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
          </ul>

          <div class="navbar-actions">
            <div class="dark-mode-toggle">
              <span class="toggle-icon">🌙</span>
              <span class="toggle-text">Dark Mode</span>
              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
            </div>
            <a href="#" class="nav-link login-link">
              Login
            </a>
            <a href="#" class="btn-get-started">
              Get Started
            </a>
          </div>

          <div class="hamburger" id="hamburger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div class="mobile-drawer-overlay" id="drawer-overlay"></div>
      <div class="mobile-drawer" id="mobile-drawer">
        <div class="drawer-header">
          <div class="navbar-logo">
            <span class="logo-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span class="logo-text">AetherAI</span>
          </div>
          <button class="drawer-close" id="drawer-close">
            &times;
          </button>
        </div>

        <ul class="mobile-nav-links">
          <li>
            <a href="#" class="mobile-link">
              Platform <span>⌄</span>
            </a>
          </li>
          <li>
            <a href="#" class="mobile-link">
              Solutions <span>⌄</span>
            </a>
          </li>
          <li>
            <a href="#" class="mobile-link">
              Docs
            </a>
          </li>
          <li>
            <a href="#" class="mobile-link">
              Pricing
            </a>
          </li>
        </ul>

        <div class="mobile-drawer-actions">
          <div class="dark-mode-toggle">
            <span class="toggle-icon">🌙</span>
            <span class="toggle-text">Dark Mode</span>
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="mobile-auth-buttons">
            <a href="#" class="nav-link login-link mobile-login">
              Login
            </a>
            <a href="#" class="btn-get-started mobile-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
