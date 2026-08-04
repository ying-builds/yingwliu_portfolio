import type { ReactNode } from "react";

export default function Quote({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="caption-block">
      <p className="label">{label}</p>
      <div className="quote">{children}</div>
    </div>
  );
}
