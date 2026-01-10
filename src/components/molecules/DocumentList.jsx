export default function DocumentList({ documents }) {
  return (
    <ul>
      {documents.map((document) => (
        <li key={document}>{document}</li>
      ))}
    </ul>
  );
}
