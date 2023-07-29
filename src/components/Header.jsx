import heroImage from "./hero.jpg";
function Header() {
  return (
    <header>
      <div className="header-text-box">
        <h1>We design and build better chairs, for a better life</h1>
        <p className="header-text">
          In a small shop in the heart of Lisbon, we spend our days relentlessly
          perfecting the chair. The result is a perfect blend of beauty and
          comfort, that will have a lasting impact on your health.
        </p>
        <a className="btn btn--big" href="#">
          Shop chairs
        </a>
      </div>
      <img src={heroImage} alt="Photo" />
    </header>
  );
}

export default Header;
