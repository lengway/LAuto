"use client";

import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
  contentClassName?: string;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  contentClassName,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-bg relative min-h-screen w-full bg-zinc-50 text-slate-950 dark:bg-zinc-900 dark:text-slate-50",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--blue-300": "#93c5fd",
              "--blue-400": "#60a5fa",
              "--blue-500": "#3b82f6",
              "--indigo-300": "#a5b4fc",
              "--violet-200": "#ddd6fe",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 mix-blend-screen">
          <div className="absolute inset-x-0 top-[-15%] h-[60%] bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.25),_transparent_70%)] blur-[120px]" />
          <div className="absolute bottom-[-15%] right-[-5%] h-[45%] w-[45%] bg-[radial-gradient(circle,_rgba(236,72,153,0.22),_transparent_65%)] blur-[110px]" />
          <div className="absolute left-[-10%] top-1/3 h-[40%] w-[40%] bg-[radial-gradient(circle,_rgba(14,165,233,0.2),_transparent_65%)] blur-[110px]" />
        </div>
      </div>
      <div className={cn("relative z-10 flex min-h-screen flex-col", contentClassName)}>
        {children}
      </div>
    </div>
  );
};
