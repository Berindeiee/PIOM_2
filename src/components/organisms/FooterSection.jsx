import Logo from '../atoms/Logo.jsx';

export default function FooterSection() {
  return (
    <footer className="footer">
      <div>
        <Logo />
        <p>
          Platforma digitala pentru gestionarea lucrarilor de licenta,
          disertatie si doctorat.
        </p>
      </div>
      <div className="footer-links">
        <span>Contact: mythesis@universitate.ro</span>
        <span>Suport: +40 21 123 456</span>
        <span>Confidentialitate &middot; Termeni</span>
      </div>
    </footer>
  );
}
