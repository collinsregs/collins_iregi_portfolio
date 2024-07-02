export default function nav() {
  return (
    <div className="margin navbar ">
      <ul>
        <li className="margin">
          <a className="nav-a" href="/">
            about me
          </a>
        </li>
        <li>
          <a className="nav-a" href="/about">
            education
          </a>
        </li>
        <li className="margin">
          <a className="nav-a" href="/contact">
            projects
          </a>
        </li>
        <li>
          <a className="nav-a" href="/contact">
            experience
          </a>
        </li>
      </ul>
    </div>
  );
}
