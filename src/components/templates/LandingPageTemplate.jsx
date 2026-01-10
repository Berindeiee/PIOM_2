import HeroSection from '../organisms/HeroSection.jsx';
import FeaturesSection from '../organisms/FeaturesSection.jsx';
import StepsSection from '../organisms/StepsSection.jsx';
import RolesSection from '../organisms/RolesSection.jsx';
import CalloutSection from '../organisms/CalloutSection.jsx';
import FooterSection from '../organisms/FooterSection.jsx';

export default function LandingPageTemplate({ features, steps, roles, documents }) {
  return (
    <div className="page">
      <HeroSection />
      <FeaturesSection features={features} />
      <StepsSection steps={steps} />
      <RolesSection roles={roles} documents={documents} />
      <CalloutSection />
      <FooterSection />
    </div>
  );
}
