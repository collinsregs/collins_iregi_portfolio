
export default function nav({ activeSection }) {
  const navItems = [
    { id: 'about', label: 'about me', href: '#about' },
    { id: 'projects', label: 'projects', href: '#projects' },
    { id: 'experience', label: 'experience', href: '#experience' },
    // { id: 'experience', label: 'experience', href: '/contact' }
  ];
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar">
      <ul>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`margin nav-item ${activeSection === item.id ? 'active-nav-item' : ''}`}
          >
            <a
              className={`nav-a ${activeSection === item.id ? 'active-nav-link' : ''}`}
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}