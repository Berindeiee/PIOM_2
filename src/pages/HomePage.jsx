import LandingPageTemplate from '../components/templates/LandingPageTemplate.jsx';

const features = [
  {
    title: 'Inregistrare cu cont institutional',
    description:
      'Acces rapid pentru studenti, cadre didactice si cercetatori, cu roluri clare si verificare automata.',
  },
  {
    title: 'Propunere si acceptare de teme',
    description:
      'Oricine poate propune idei, iar potrivirile se fac in functie de interes si disponibilitate.',
  },
  {
    title: 'Comunicare pe durata implementarii',
    description:
      'Canale dedicate pentru coordonator si student, cu istoric al mesajelor si task-uri asociate.',
  },
  {
    title: 'Gestionare documente',
    description:
      'Generare cereri, incarcare rapoarte si partajare documente publice sau private in siguranta.',
  },
  {
    title: 'Evaluare si feedback',
    description:
      'Evaluari structurate, rubrici si recomandari pentru imbunatatirea lucrarii.',
  },
];

const steps = [
  {
    title: '1. Intra in platforma',
    detail: 'Autentifica-te cu emailul institutional si completeaza profilul.',
  },
  {
    title: '2. Propune sau alege o tema',
    detail: 'Publica idei noi sau raspunde unei propuneri relevante.',
  },
  {
    title: '3. Stabileste un parteneriat',
    detail: 'Confirma potrivirea si seteaza obiectivele initiale ale lucrarii.',
  },
  {
    title: '4. Colaboreaza si livreaza',
    detail: 'Foloseste spatiul comun pentru documente, feedback si evaluari.',
  },
];

const roles = [
  {
    role: 'Cadre didactice si cercetatori',
    description: 'Propun teme, coordoneaza proiecte si ofera evaluari.',
  },
  {
    role: 'Studenti si candidati',
    description: 'Selecteaza idei, dezvolta lucrari si primesc feedback in timp real.',
  },
  {
    role: 'Alti utilizatori',
    description: 'Absolventi sau experti care pot contribui cu idei si mentorat.',
  },
];

const documents = [
  'Cerere de tema sau schimbare coordonator',
  'Plan de lucru si calendar estimativ',
  'Rapoarte de similaritate',
  'Referate intermediare si finale',
  'Evaluari si feedback oficial',
];

export default function HomePage() {
  return (
    <LandingPageTemplate
      features={features}
      steps={steps}
      roles={roles}
      documents={documents}
    />
  );
}
