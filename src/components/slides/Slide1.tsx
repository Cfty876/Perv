import React from 'react';
import { Timer, Folder, Paperclip } from 'lucide-react';
import { StudentWithFlagIllustration } from './SlideVisuals';

export const Slide1: React.FC = () => {
  return (
    <div className="relative w-full h-full slide-grid-bg text-neutral-900 select-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12">
      {/* Slide Top Headline */}
      <div className="z-10 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.05]">
          <span className="text-[#E5252A]">БЫСТРЕЕ,</span>{' '}
          <span className="text-neutral-900">ЧЕМ ВЫ</span>
          <br />
          <span className="text-neutral-900">УСПЕЕТЕ ПРЕДЛОЖИТЬ!</span>
        </h1>
      </div>

      {/* Main Central Scene: Laptop Mockup with Alexander & Floating Pills */}
      <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4">
        {/* Floating Callout 1: Left (100% effort) */}
        <div className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neutral-200/80 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E5252A] flex items-center justify-center text-white shrink-0 shadow-inner">
            <Timer className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-bold text-neutral-800 leading-snug">
            отработаю на все<br />
            <span className="text-[#E5252A] font-extrabold text-sm sm:text-base">100%</span>
          </div>
        </div>

        {/* Central Laptop Container */}
        <div className="relative w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[700px] flex flex-col items-center">
          {/* Laptop Screen Display */}
          <div className="relative w-full aspect-[16/10] bg-neutral-950 rounded-t-2xl sm:rounded-t-3xl border-4 sm:border-[6px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-end">
            {/* Screen Bezel Gloss */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700/80 z-20" />
            
            {/* Photo / Graphic Content Inside Display */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 via-neutral-900 to-red-950/60">
              <StudentWithFlagIllustration />
            </div>

            {/* Alexander Nameplate at bottom of screen */}
            <div className="relative z-20 mb-3 sm:mb-4 px-4 py-2 sm:py-2.5 mx-auto bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/60 shadow-lg text-center max-w-[280px] sm:max-w-[340px]">
              <div className="text-xs sm:text-sm font-extrabold text-neutral-900 tracking-tight">
                МАОУ Гимназия № 120
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-700">
                Ильин Александр 10 класс
              </div>
            </div>
          </div>

          {/* Laptop Bottom Chassis / Keyboard Deck */}
          <div className="w-[108%] h-3 sm:h-4 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-900 rounded-b-xl shadow-xl relative flex items-center justify-center">
            {/* Display notch / thumb opener */}
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-neutral-900 rounded-b-sm border-t border-neutral-600/40" />
          </div>
          {/* Laptop shadow on table */}
          <div className="w-[96%] h-2.5 sm:h-4 bg-black/20 blur-md rounded-full mt-0.5" />
        </div>

        {/* Floating Callout 2: Right Top (Concept) */}
        <div className="absolute right-2 sm:right-6 lg:right-10 top-1/4 sm:top-1/3 -translate-y-1/2 z-20 flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neutral-200/80 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E5252A] flex items-center justify-center text-white shrink-0 shadow-inner">
            <Folder className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-bold text-neutral-800 leading-snug">
            сразуже придумаю<br />концепцию мероприятия
          </div>
        </div>

        {/* Floating Callout 3: Right Bottom (Report) */}
        <div className="absolute right-2 sm:right-8 lg:right-14 bottom-1/4 sm:bottom-1/5 translate-y-1/2 z-20 flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-neutral-200/80 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E5252A] flex items-center justify-center text-white shrink-0 shadow-inner">
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-bold text-neutral-800 leading-snug">
            создам отчёт в<br />конце мероприятия
          </div>
        </div>
      </div>

      {/* Slide Bottom Indicator */}
      <div className="flex justify-end items-center z-10">
        <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-[#E5252A]">ВИЗИТКА</span>
          <span className="text-neutral-900">1</span>
        </div>
      </div>
    </div>
  );
};
