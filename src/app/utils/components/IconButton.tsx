import { useState } from "react";

// Icon.tsx
type IconProps = {
  icon: string; // file name without .svg
  alt?: string;
  size?: number;
  text?: string;
  hoverComponent?: React.ReactNode; // Component to show on hover
  onClick?: () => void;
  className?: string;

};

export function IconButton({ icon, alt = '', size = 24, text, hoverComponent, onClick, className }: IconProps) {


  const [hovered, setHovered] = useState(false);

  return (
    <div
       className={`relative inline-block ${className}`}
      onMouseEnter={() => setHovered(true)}
    >
      {hovered && hoverComponent && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10" >
          {hoverComponent}
        </div>
      )}
      <button onClick={onClick} className="flex flex-row items-center gap-2 hover:bg-[rgba(18,147,110,1)] p-2 rounded-full">
        <img
          src={`/icons/${icon}.svg`} // stored in public/icons/
          alt={alt}
          width={size}
          height={size}
        />
        {text && <span>{text}</span>}
      </button>

    </div >
  );
}
