import React, { useState } from 'react';
import { CityQuiz } from './CityQuiz';
import { SashaChatBot } from './SashaChatBot';
import { CareerGame } from './CareerGame';
import { 
  Compass, 
  MessageSquareCode, 
  Gamepad2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface InteractiveHubProps {
  onOpenContacts: () => void;
}

export const InteractiveHub: React.FC<InteractiveHubProps> = ({ onOpenContacts }) => {
  const [activeTab, setActiveTab] = useState<'city' | 'bot' | 'game'>('city');

  return (
    <div className="w-full flex flex-col items-center gap-4 sm:gap-6 pb-20">
      
      {/* Interactive Tabs Navigation (Designed for mobile thumbs and desktop) */}
      <div className="w-full max-w-2xl px-2">
        <div className="p-1.5 rounded-2xl bg-[#18181b] border border-neutral-800 grid grid-cols-3 gap-1 shadow-lg">
          
          {/* Tab 1: City Quiz */}
          <button
            type="button"
            onClick={() => setActiveTab('city')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'city'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
            }`}
          >
            <Compass className="w-4 h-4 shrink-0" />
            <span className="truncate">Тест городов</span>
          </button>

          {/* Tab 2: Chatbot */}
          <button
            type="button"
            onClick={() => setActiveTab('bot')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'bot'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
            }`}
          >
            <MessageSquareCode className="w-4 h-4 shrink-0" />
            <span className="truncate">Чат-бот Саши</span>
          </button>

          {/* Tab 3: Career Game */}
          <button
            type="button"
            onClick={() => setActiveTab('game')}
            className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 min-h-[48px] active:scale-[0.98] ${
              activeTab === 'game'
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-950/40'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-850'
            }`}
          >
            <Gamepad2 className="w-4 h-4 shrink-0" />
            <span className="truncate">Время Перемен</span>
          </button>

        </div>
      </div>

      {/* Active Tab View */}
      <div className="w-full px-2 sm:px-4">
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
