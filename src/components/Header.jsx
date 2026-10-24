import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeSelector from './ThemeSelector';

export default function Header() {
  return (
    <header className="h-[52px] bg-surface-sidebar border-b border-surface-border flex items-center justify-between px-4 select-none shrink-0" style={{ WebkitAppRegion: 'drag' }}>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand/20 flex items-center justify-center text-brand border border-brand/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm tracking-tight text-white">BABY Live Studio</span>
        </div>
        <span className="text-[11px] font-medium text-gray-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
          Desktop v1.0.0
        </span>
      </div>

      <div className="flex items-center gap-3" style={{ WebkitAppRegion: 'no-drag' }}>
        <ThemeSelector />

        <div className="flex items-center gap-2 text-xs text-gray-400 bg-surface-card border border-surface-border px-2.5 py-1.5 rounded-lg">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-medium text-gray-300">Port 8765</span>
        </div>
      </div>
    </header>
  );
}
