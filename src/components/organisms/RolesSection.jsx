import Button from '../atoms/Button.jsx';
import DocumentList from '../molecules/DocumentList.jsx';
import RoleCard from '../molecules/RoleCard.jsx';

export default function RolesSection({ roles, documents }) {
  return (
    <section className="section">
      <div className="split">
        <div>
          <h2>Participantii platformei</h2>
          <p>
            MyThesis sustine colaborarea intre mai multe tipuri de utilizatori,
            cu fluxuri de lucru adaptate.
          </p>
          <div className="roles">
            {roles.map((role) => (
              <RoleCard key={role.role} title={role.role} description={role.description} />
            ))}
          </div>
        </div>
        <div className="document-panel">
          <h3>Documente gestionate</h3>
          <DocumentList documents={documents} />
          <Button variant="primary">Descarca sabloane</Button>
        </div>
      </div>
    </section>
  );
}
