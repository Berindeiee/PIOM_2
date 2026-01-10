import Button from '../atoms/Button.jsx';

export default function CalloutSection() {
  return (
    <section className="section callout">
      <div>
        <h2>Tot fluxul intr-un singur loc</h2>
        <p>
          De la ideatie pana la evaluare finala, MyThesis asigura claritate,
          responsabilitati si comunicare continua.
        </p>
      </div>
      <Button variant="secondary">Programeaza o prezentare</Button>
    </section>
  );
}
