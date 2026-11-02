export default function Divider({
  vertical = false,
  className = '',
}: {
  vertical?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`bg-[#b0aeae] ${vertical ? 'w-px self-stretch' : 'h-px w-full'} ${className}`}
    />
  );
}
