import React from 'react';
import { User, LayoutTemplate, MessageSquare, Mic, Radio, Sliders } from 'lucide-react';

export default function ActivityRail({ activeTab, setActiveTab }) {
  const items = [
    { id: 'stage', label: '3D Stage', icon: User },
    { id: 'widgets', label: 'Overlay & Widgets', icon: LayoutTemplate },
    { id: 'persona', label: 'AI Persona', icon: MessageSquare },
    { id: 'voice', label: 'Voice Synthesis', icon: Mic },
    { id: 'stream', label: 'Stream Bridge', icon: Radio },
    { id: 'settings', label: 'Settings', icon: Sliders },
  ];

  return (
    <nav className="w-14 bg-surface-base border-r border-surface-border flex flex-col items-center py-3 gap-2 shrink-0 select-none">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            title={item.label}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isActive
                ? 'bg-brand text-brand-text shadow-sm shadow-brand/40 font-bold'
                : 'text-gray-400 hover:text-white hover:bg-surface-hover'
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        );
      })}
    </nav>
  );
}
