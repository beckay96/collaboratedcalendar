
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
  children?: React.ReactNode;
}

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  colors = [
    "rgba(176, 38, 255, 0.2)", // neon-purple
    "rgba(0, 255, 255, 0.2)",  // neon-aqua
    "rgba(255, 0, 255, 0.2)",  // neon-fuschia
    "rgba(0, 191, 255, 0.2)",  // neon-blue
  ],
  children,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-30 pointer-events-none overflow-hidden rounded-xl",
        className
      )}
    >
      <div
        className="absolute -inset-[100%] animate-[spin_20s_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        }}
      />
      {children}
    </div>
  );
};
