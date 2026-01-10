import StepCard from '../molecules/StepCard.jsx';

export default function StepsSection({ steps }) {
  return (
    <section className="section highlight">
      <div>
        <h2>Cum functioneaza MyThesis</h2>
        <p>
          Platforma este construita pentru a sustine intregul parcurs al lucrarii,
          cu pasi simpli si vizibilitate pentru toate partile.
        </p>
      </div>
      <div className="steps">
        {steps.map((step) => (
          <StepCard key={step.title} {...step} />
        ))}
      </div>
    </section>
  );
}
