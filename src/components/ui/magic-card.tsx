import React from "react";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  gradientColor,
}) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md ${className}`}
      style={{ background: gradientColor }}
    >
      {children}
    </div>
  );
};
