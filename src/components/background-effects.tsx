'use client';

export function BackgroundEffects() {
  return (
    <div className="fixed left-0 top-0 -z-50 h-screen w-full">
      <div className="absolute inset-0 -z-20 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute -z-30 h-full w-full bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
    </div>
  );
}
