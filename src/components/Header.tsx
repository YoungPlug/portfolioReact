import { navLinks } from '../data/content'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <span className="dot" />
          M.OREKHOV
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="cta-item">
            <a className="cta" href="#contact">
              Say hello
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
