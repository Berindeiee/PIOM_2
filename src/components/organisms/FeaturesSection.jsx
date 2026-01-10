import SectionTitle from '../atoms/SectionTitle.jsx';
import FeatureCard from '../molecules/FeatureCard.jsx';

export default function FeaturesSection({ features }) {
  return (
    <section className="section">
      <SectionTitle
        title="Functionalitati de baza"
        subtitle="O experienta unificata pentru participantii din universitate, indiferent de rol."
      />
      <div className="grid">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
