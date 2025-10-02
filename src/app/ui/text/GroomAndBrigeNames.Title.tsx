interface GroomAndBrideNamesProps {
  groomName: string;
  brideName: string;
  separator?: string;
  className?: string;
}

export default function GroomAndBrideNames({
  groomName,
  brideName,
  separator = ' & ',
  className = ''
}: GroomAndBrideNamesProps) {
  return (
    <h1 
      className={`m-0 leading-[1.4em] font-[var(--font-family)] text-[var(--text-color)] ${className}`}
    >
      {groomName}{separator}{brideName}
    </h1>
  );
}
