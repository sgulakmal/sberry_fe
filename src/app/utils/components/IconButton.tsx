// Icon.tsx
type IconProps = {
  icon: string; // file name without .svg
  alt?: string;
  size?: number;
  onClick?: () => void;
};

export function IconButton({ icon, alt = '', size = 24, onClick }: IconProps) {
  return (
    <button onClick={onClick} className="hover:bg-green-500 p-2 rounded-full">
      <img
        src={`/icons/${icon}.svg`} // stored in public/icons/
        alt={alt}
        width={size}
        height={size}
      />
    </button>
  );
}
