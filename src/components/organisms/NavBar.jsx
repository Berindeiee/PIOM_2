import Button from '../atoms/Button.jsx';
import Logo from '../atoms/Logo.jsx';

export default function NavBar() {
  return (
    <nav className="nav">
      <Logo />
      <div className="nav-actions">
        <Button variant="ghost">Solicita demo</Button>
        <Button variant="primary">Autentifica-te</Button>
      </div>
    </nav>
  );
}
