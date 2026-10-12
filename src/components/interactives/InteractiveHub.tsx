import React, { useState } from 'react';
import { CityQuiz } from './CityQuiz';
import { SashaChatBot } from './SashaChatBot';
import { CareerGame } from './CareerGame';
import { 
  Compass, 
  MessageCircle, 
  Gamepad2
} from 'lucide-react';

interface InteractiveHubProps {
  onOpenContacts: () => void;
}

export const InteractiveHub: React.FC<InteractiveHubProps> = ({ onOpenContacts }) => {
  const [activeTab, setActiveTab] = useState<'city' | 'bot' | 'game'>('city');

  return (
    <div className="w-full flex flex-col items-center gap-4 sm:gap-6 pb-20">
      
      {/* Interactive Tabs Navigation with Liquid Gliding Pill */}
      <div className="w-full max-w-2xl px-2">
        <div className="relative p-1.5 rounded-2xl bg-[#18181b] border border-neutral-800 grid grid-cols-3 shadow-lg overflow-hidden">
          
          {/* Animated Gliding Indicator Pill */}
          <div 
            className="absolute top-1.5 bottom-1.5 w-[calc(33.333%-4px)] rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 shadow-[0_2px_16px_rgba(234,88,12,0.45)] transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
            style={{
              transform: activeTab === 'city' 
                ? 'translateX(3px)' 
                : activeTab === 'bot' 
                ? 'translateX(calc(100% + 3px))' 
                : 'translateX(calc(200% + 3px))'
            }}
          >
            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-60" />
          </div>

          {/* Tab 1: City Quiz */}
          <button
            type="button"
            onClick={() => setActiveTab('city')}
            className={`relative z-10 py-2.5 px-2 rounded-xl text-xs font-bold transition-colors duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'city' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span className="truncate">Тест городов</span>
          </button>

          {/* Tab 2: Chavoshka */}
          <button
            type="button"
            onClick={() => setActiveTab('bot')}
            className={`relative z-10 py-2.5 px-2 rounded-xl text-xs font-bold transition-colors duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'bot' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="truncate">ЧаВошка</span>
          </button>

          {/* Tab 3: Career Game */}
          <button
            type="button"
            onClick={() => setActiveTab('game')}
            className={`relative z-10 py-2.5 px-2 rounded-xl text-xs font-bold transition-colors duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'game' ? 'text-white' : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-4 h-4 shrink-0" />
            <span className="truncate">Время Перемен</span>
          </button>

        </div>
      </div>

      {/* Active Tab View with smooth entry animation */}
      <div key={activeTab} className="w-full px-2 sm:px-4 animate-fade-in">
        {activeTab === 'city' && (
          <CityQuiz onOpenChat={() => setActiveTab('bot')} />
        )}

        {activeTab === 'bot' && (
          <SashaChatBot />
        )}

        {activeTab === 'game' && (
          <CareerGame onOpenContacts={onOpenContacts} />
        )}
      </div>

    </div>
  );
};
