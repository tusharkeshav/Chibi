import React, { useState, useEffect, useRef } from 'react';
import { Palette, Check, ChevronDown } from 'lucide-react';

export const THEMES = [
  { id: 'valorant', name: 'Valorant Protocol', dot: '#FF4655' },
  { id: 'nfs', name: 'NFS Heat / Nitro', dot: '#D9F800' },
  { id: 'gta', name: 'GTA Vice / VI Sunset', dot: '#FF2A85' },
  { id: 'cyberpunk', name: 'Cyberpunk 2077', dot: '#00F0FF' },
  { id: 'discord', name: 'Discord Studio', dot: '#5865F2' },
  { id: 'linear', name: 'Linear Dark', dot: '#6366F1' },
];

function applyTheme(themeId) {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = themeId;
    document.documentElement.style.setProperty('--theme-bg-url', `url(/backgrounds/${themeId}.jpg)`);
  }
}

// Synchronous application on script execution
if (typeof window !== 'undefined') {
  const initTheme = new URLSearchParams(window.location.search).get('theme') || localStorage.getItem('baby_theme') || 'discord';
  applyTheme(initTheme);
}

export default function ThemeSelector() {
  const [current, setCurrent] = useState(() => {
    const p = new URLSearchParams(window.location.search).get('theme');
    const chosen = p || localStorage.getItem('baby_theme') || 'discord';
    applyTheme(chosen);
    return chosen;
  });
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    applyTheme(current);
    localStorage.setItem('baby_theme', current);
  }, [current]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeObj = THEMES.find((t) => t.id === current) || THEMES[0];

  return (
    <div className="relative select-none" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs font-medium text-gray-300 bg-surface-card hover:bg-surface-hover border border-surface-border px-2.5 py-1.5 rounded-lg transition"
      >
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm"
          style={{ backgroundColor: activeObj.dot }}
        />
        <span>{activeObj.name}</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-52 bg-surface-sidebar border border-surface-border rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden">
          <div className="px-3 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
            Select Gamer Theme
          </div>
          {THEMES.map((t) => {
            const isSelected = t.id === current;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setCurrent(t.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition ${
                  isSelected
                    ? 'bg-surface-active text-white'
                    : 'text-gray-300 hover:bg-surface-hover hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shadow-sm"
                    style={{ backgroundColor: t.dot }}
                  />
                  <span>{t.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
