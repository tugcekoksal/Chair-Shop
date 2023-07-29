function Features(props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="features-icon"
      >
        {props.icon}
      </svg>
      <p className="features-title">
        <strong>{props.title}</strong>
      </p>
      <p className="features-text">{props.text}</p>
    </div>
  );
}

export default Features;
