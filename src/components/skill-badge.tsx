import React from 'react';
import { Badge } from './ui/badge';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="group relative shake-on-hover">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
      <Badge variant="secondary" className="relative flex items-center gap-2 py-1.5 px-3 text-sm">
        {icon && <div className="h-4 w-4 flex items-center justify-center">{icon}</div>}
        <span>{name}</span>
      </Badge>
    </div>
  );
}
