export default function StepCard({ title, detail }) {
  return (
    <div className="step">
      <h3>{title}</h3>
      <p>{detail}</p>
    </div>
  );
}
