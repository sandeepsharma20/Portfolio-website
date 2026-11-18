function Navbar() {
  return (
    <header className="navbar container">
      <a href="#top" className="logo">
        SS<span>.</span>
      </a>

      <nav className="nav-links">
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
        <a href="#quiz">Quiz</a>

        <a href="#chat" className="btn btn-primary nav-button">
          Ask my AI
        </a>
      </nav>
    </header>
  );
}

export default Navbar;