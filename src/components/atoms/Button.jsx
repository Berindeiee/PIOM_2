export default function Button({ variant = 'primary', children, ...props }) {
  return (
    <button className={variant} {...props}>
      {children}
    </button>
  );
}
