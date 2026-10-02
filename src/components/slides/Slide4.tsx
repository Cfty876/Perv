import React from 'react';
import { Mic, Folder } from 'lucide-react';

export const Slide4: React.FC = () => {
  return (
    <div className="relative w-full h-full text-neutral-900 select-none overflow-hidden flex flex-col md:flex-row justify-between">
      {/* Left Column: Bold Orange Panel (#F97316) with Stage Photos */}
      <div className="w-full md:w-[38%] lg:w-[35%] bg-[#F97316] p-5 sm:p-7 flex flex-col justify-between text-white shrink-0 shadow-2xl relative overflow-hidden">
        {/* Stage Photos Container */}
        <div className="flex-1 flex flex-col gap-4 justify-center my-auto">
          
          {/* Photo Frame 1: Alexander on Stage with Mic & Red Folder */}
          <div className="relative rounded-2xl overflow-hidden border-3 border-white/80 shadow-xl bg-gradient-to-b from-neutral-800 to-neutral-950 p-3 flex flex-col items-center justify-between aspect-[4/3] group">
            <div className="w-full flex justify-between items-center text-[10px] font-bold text-amber-200">
              <span className="flex items-center gap-1">
                <Mic className="w-3.5 h-3.5 text-white" /> ВЕДУЩИЙ
              </span>
              <span className="bg-red-600/90 text-white px-2 py-0.5 rounded text-[8px]">
                ГЛАВНАЯ СЦЕНА
              </span>
            </div>

            {/* Stage Graphic Representation */}
            <div className="relative flex flex-col items-center my-auto">
              <div className="w-14 h-14 rounded-full bg-amber-100 border-2 border-white shadow-md relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 w-full h-7 bg-[#2d1a10] rounded-t-full" />
                <div className="w-10 h-10 bg-amber-200 rounded-full mt-2" />
              </div>
              {/* Dark Blazer / Suit */}
              <div className="w-24 h-14 bg-neutral-900 rounded-t-xl mt-1 flex flex-col items-center justify-center relative">
                <div className="w-4 h-6 border-l-2 border-r-2 border-white/40 mt-1" />
                {/* Red Folder */}
                <div className="absolute -bottom-1 -left-2 bg-red-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase text-white shadow-md flex items-center gap-0.5">
                  <Folder className="w-2.5 h-2.5" /> СЦЕНАРИЙ
                </div>
              </div>
            </div>

            <div className="w-full text-center bg-black/40 py-1 rounded text-white text-[10px] font-bold">
              Ильин Александр
            </div>
          </div>

          {/* Photo Frame 2: Alexander and Co-host on Stage */}
          <div className="relative rounded-2xl overflow-hidden border-3 border-white/80 shadow-xl bg-gradient-to-b from-neutral-900 to-slate-950 p-3 flex flex-col items-center justify-between aspect-[4/3] group">
            <div className="w-full flex justify-between items-center text-[10px] font-bold text-sky-200">
              <span>ПАРНОЕ ВЕДЕНИЕ</span>
              <span className="bg-blue-600/90 text-white px-2 py-0.5 rounded text-[8px]">ДУЭТ</span>
            </div>

            <div className="flex items-center justify-center gap-4 my-auto">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-white" />
                <div className="w-14 h-10 bg-neutral-900 rounded-t-lg mt-0.5" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-white" />
                <div className="w-14 h-10 bg-neutral-800 rounded-t-lg mt-0.5" />
              </div>
            </div>

            <div className="w-full text-center bg-black/40 py-1 rounded text-white text-[10px] font-bold">
              Ведущие мероприятия гимназии
            </div>
          </div>

        </div>
      </div>

      {/* Right Column: Grid Background & Blue Competency Text */}
      <div className="flex-1 slide-grid-bg p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
        <div>
          {/* Blue Capsule: "НАВЫКИ" */}
          <div className="inline-flex items-center px-6 py-2 bg-[#0047AB] text-white font-black text-sm sm:text-base rounded-full uppercase tracking-wider shadow-md mb-8 sm:mb-12">
            НАВЫКИ
          </div>

          {/* Text Points in Authentic Deep Blue Bold Uppercase */}
          <div className="space-y-8 sm:space-y-12 max-w-2xl">
            {/* Point 1: Коммуникабельность */}
            <h2 className="text-xl sm:text-2xl lg:text-[29px] font-black tracking-tight text-[#0047AB] uppercase leading-tight sm:leading-snug">
              КОММУНИКАБЕЛЬНОСТЬ – УМЕЮ НАХОДИТЬ ПОДХОД К РАЗНЫМ ЛЮДЯМ, СПЛОТИТЬ ИХ И ВЕСТИ К РЕЗУЛЬТАТУ.
            </h2>

            {/* Point 2: Работа в команде */}
            <h2 className="text-xl sm:text-2xl lg:text-[29px] font-black tracking-tight text-[#0047AB] uppercase leading-tight sm:leading-snug">
              УМЕНИЕ РАБОТАТЬ В КОМАНДЕ – УЧАСТВУЮ В КЕЙС-ЧЕМПИОНАТАХ, ПРОВОЖУ МЕРОПРИЯТИЯ С КОМАНДОЙ, ЭТОТ НАВЫК ОЧЕНЬ ЧАСТО ПРИГОЖДАЕТСЯ.
            </h2>
          </div>
        </div>

        {/* Slide Bottom Right Indicator */}
        <div className="flex justify-end items-center mt-6">
          <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
            <span className="text-[#0047AB]">НАВЫКИ</span>
            <span className="text-neutral-900">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};
