export default function RoleCard({ title, description }) {
  return (
    <div className="role">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
