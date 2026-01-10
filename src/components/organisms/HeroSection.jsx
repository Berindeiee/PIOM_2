import Button from '../atoms/Button.jsx';
import NavBar from './NavBar.jsx';

export default function HeroSection() {
  return (
    <header className="hero">
      <NavBar />
      <div className="hero-content">
        <div>
          <p className="eyebrow">Platforma digitala pentru ideatie academica</p>
          <h1>
            Conecteaza studentii si coordonatorii pentru lucrari de licenta,
            disertatie si doctorat.
          </h1>
          <p className="subtitle">
            MyThesis simplifica tot fluxul: de la propunere si match-making,
            pana la documente, evaluari si colaborare continua.
          </p>
          <div className="hero-actions">
            <Button variant="primary">Creeaza cont</Button>
            <Button variant="secondary">Vezi cum functioneaza</Button>
          </div>
        </div>
        <div className="hero-card">
          <h2>Indicatori cheie</h2>
          <ul>
            <li>
              <strong>+120</strong> teme active in platforma
            </li>
            <li>
              <strong>3 roluri</strong> cu fluxuri dedicate si permisiuni clare
            </li>
            <li>
              <strong>100%</strong> trasabilitate pentru documente si evaluari
            </li>
          </ul>
          <div className="status">
            <span className="dot" />
            <span>Fluxuri personalizate pentru fiecare departament</span>
          </div>
        </div>
      </div>
    </header>
  );
}
