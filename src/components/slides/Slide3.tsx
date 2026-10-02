import React from 'react';

export const Slide3: React.FC = () => {
  return (
    <div className="relative w-full h-full slide-grid-bg text-neutral-900 select-none overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
      {/* Decorative Ribbon: Top Right Orange Diagonal Angle */}
      <div 
        className="absolute top-0 right-0 w-44 sm:w-64 h-32 sm:h-44 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
          clipPath: 'polygon(100% 0, 30% 0, 100% 65%)',
        }}
      />

      {/* Decorative Ribbon: Bottom Left Blue Curved Ribbon */}
      <svg
        className="absolute -bottom-4 -left-4 w-60 sm:w-80 h-36 sm:h-48 pointer-events-none"
        viewBox="0 0 320 200"
        fill="none"
      >
        <path
          d="M-20 180 Q 60 40 140 120 T 320 60"
          stroke="#0039A6"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-10 195 Q 70 55 150 135 T 330 75"
          stroke="#0284c7"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-between my-auto py-2">
        {/* Photos Grid Matching the Original Screenshot */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
          
          {/* Photo 1 (Left): Alexander in Orange Sweatshirt with Microphone */}
          <div className="col-span-4 flex flex-col items-center">
            <div className="relative w-36 sm:w-48 lg:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gradient-to-b from-[#EA580C] to-[#C2410C] flex flex-col items-center justify-between p-3.5 group">
              {/* Speaker Header */}
              <div className="w-full flex justify-between items-center text-white text-[10px] font-bold">
                <span className="bg-black/25 px-2 py-0.5 rounded-full">СПИКЕР</span>
                <span className="text-[9px] opacity-80">ФОРУМ</span>
              </div>

              {/* Alexander Representation */}
              <div className="relative flex flex-col items-center my-auto">
                {/* Head */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-100 border-2 border-white shadow-md relative overflow-hidden flex items-center justify-center">
                  <div className="absolute top-0 w-full h-8 bg-[#2d1a10] rounded-t-full" />
                  <div className="w-12 h-14 bg-amber-200 rounded-full mt-3 flex flex-col items-center justify-center">
                    <div className="flex gap-2 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    </div>
                    {/* Glasses */}
                    <div className="w-10 h-3 border-2 border-neutral-800 rounded-sm -mt-2.5 mb-1 opacity-80" />
                    <div className="w-4 h-1 border-b-2 border-red-500 rounded-full" />
                  </div>
                </div>

                {/* Orange Sweatshirt with "ШАГ В БУДУЩЕЕ / ШКОЛА TEAM" */}
                <div className="w-24 sm:w-32 h-16 sm:h-20 bg-[#F97316] rounded-t-2xl shadow-inner mt-1 flex flex-col items-center justify-center text-white px-2 text-center">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-wider uppercase leading-none">
                    ШКОЛА TEAM
                  </span>
                  <span className="text-[7px] text-orange-100 mt-0.5 leading-none">
                    Шаг в будущее
                  </span>
                </div>

                {/* Handheld Microphone */}
                <div className="absolute bottom-2 right-2 w-6 h-10 flex flex-col items-center">
                  <div className="w-3.5 h-4 bg-neutral-700 rounded-t-full border border-neutral-500 shadow-xs" />
                  <div className="w-1.5 h-6 bg-neutral-900 rounded-b-sm" />
                </div>
              </div>

              {/* Nameplate */}
              <div className="w-full text-center bg-black/40 backdrop-blur-xs py-1 rounded-lg text-white text-[10px] sm:text-xs font-extrabold tracking-tight">
                Ильин Александр
              </div>
            </div>
          </div>

          {/* Right Photos (Top: Team cheer pose; Bottom: Award ceremony) */}
          <div className="col-span-8 flex flex-col gap-3 sm:gap-4">
            
            {/* Photo 2: Team of 5 in Orange Hoodies cheering ("Х УРАЛЬСКАЯ...") */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-3 border-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-4 sm:p-5 text-white flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-100">
                  Х Уральская проектная смена
                </div>
                <div className="text-sm sm:text-lg font-black leading-tight uppercase">
                  Командная победа и проектная защита
                </div>
                <div className="text-[10px] sm:text-xs text-orange-50 font-medium">
                  5 участников в фирменных оранжевых худи «Школа Team»
                </div>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-2xl font-black shrink-0">
                10×
              </div>
            </div>

            {/* Photo 3: Official Stage / Ceremony with Officials */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-3 border-white bg-gradient-to-br from-slate-900 via-neutral-900 to-blue-950 p-4 sm:p-5 text-white flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-black uppercase text-amber-400 tracking-wider">
                    СВЕРДЛОВСКАЯ ОБЛАСТЬ
                  </span>
                  <span className="text-[9px] text-neutral-400">• Золотое сечение</span>
                </div>
                <div className="text-sm sm:text-lg font-black leading-tight uppercase">
                  Министерство образования и молодежной политики
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-300 font-medium">
                  Торжественная церемония награждения победителей конкурсов
                </div>
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold text-xs uppercase text-center p-1 shrink-0">
                ГЕРБ СО
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner & Hashtags */}
        <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-200/80">
          {/* Badge: "Участник научно-технических конкурсов" */}
          <div className="px-5 py-2.5 bg-[#FFF7ED] border border-[#FDBA74] rounded-2xl shadow-xs text-neutral-900 font-black text-xs sm:text-sm lg:text-base">
            Участник научно-технических конкурсов
          </div>

          {/* Hashtags: #ЧАВОШКА #СИРИУС #ИННОПРОМ */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {['#ЧАВОШКА', '#СИРИУС', '#ИННОПРОМ'].map((tag) => (
              <div
                key={tag}
                className="px-4 py-1.5 bg-white rounded-full border-2 border-[#EA580C] text-[#EA580C] font-black text-xs sm:text-sm tracking-wide shadow-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Bottom Right Indicator */}
      <div className="relative z-10 flex justify-end items-center mt-2">
        <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-[#F97316]">НАУКА</span>
          <span className="text-neutral-900">3</span>
        </div>
      </div>
    </div>
  );
};
