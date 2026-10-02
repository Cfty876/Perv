import React from 'react';
import { EventQrCode, VremyaPeremenLogo, CompassEmblemA } from './SlideVisuals';
import { Users, PartyPopper } from 'lucide-react';

export const Slide5: React.FC = () => {
  return (
    <div className="relative w-full h-full slide-grid-bg text-neutral-900 select-none overflow-hidden flex flex-col justify-between p-6 sm:p-8 lg:p-10">
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column (Festival Highlight, Logos, QR & Photos) */}
        <div className="md:col-span-6 flex flex-col justify-between h-full space-y-4">
          {/* Header block with QR Code */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base sm:text-lg lg:text-xl font-black uppercase text-neutral-900 leading-tight">
                ПРОВЁЛ ФЕСТИВАЛЬ
                <br />
                <span className="text-[#0047AB]">ВРЕМЯ ПЕРЕМЕН</span> В
                <br />
                МАОУ ГИМНАЗИИ №120
              </h2>
            </div>
            <EventQrCode size={70} />
          </div>

          {/* Logos Row */}
          <div className="flex items-center gap-6 py-1">
            <VremyaPeremenLogo />
            <CompassEmblemA />
          </div>

          {/* Event Stage Photos */}
          <div className="grid grid-cols-2 gap-3 flex-1 min-h-[140px] items-center">
            {/* Photo 1: Team on Stage with Balloons */}
            <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden shadow-md border-2 border-white bg-gradient-to-t from-neutral-900 via-neutral-800 to-amber-950 flex flex-col justify-end p-2.5 group">
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-amber-500/90 text-neutral-950 text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                <PartyPopper className="w-2.5 h-2.5" /> СЦЕНА
              </div>
              <div className="relative z-10 text-white">
                <div className="text-[10px] font-bold">Команда проекта</div>
                <div className="text-[8px] text-neutral-300">Актовый зал Гимназии 120</div>
              </div>
              {/* Balloon decoration silhouette */}
              <div className="absolute bottom-6 left-0 right-0 h-4 flex justify-around opacity-40">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-white" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>

            {/* Photo 2: Alexander Hosting */}
            <div className="relative h-full min-h-[140px] rounded-xl overflow-hidden shadow-md border-2 border-white bg-gradient-to-t from-slate-900 via-slate-800 to-blue-950 flex flex-col justify-end p-2.5 group">
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-blue-500/90 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                <Users className="w-2.5 h-2.5" /> ВЕДУЩИЕ
              </div>
              <div className="relative z-10 text-white">
                <div className="text-[10px] font-bold">Открытие фестиваля</div>
                <div className="text-[8px] text-neutral-300">Презентация и регламент</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Practice, Mission, Experience Statement) */}
        <div className="md:col-span-6 flex flex-col justify-center h-full pl-0 md:pl-6 space-y-4">
          {/* Top Red Capsule Badge */}
          <div className="self-start">
            <span className="px-5 py-1.5 bg-[#E5252A] text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-sm">
              ПРАКТИКА
            </span>
          </div>

          {/* Big Headline: ПРОВЕДЕНИЕ МЕРОПРИЯТИЙ */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              <span className="text-neutral-900">ПРОВЕДЕНИЕ</span>
              <br />
              <span className="text-[#E5252A]">МЕРОПРИЯТИЙ</span>
            </h1>
          </div>

          {/* Experience Statement Card */}
          <div className="bg-white/95 backdrop-blur-xs p-5 sm:p-7 rounded-2xl border border-neutral-200/90 shadow-md">
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 font-medium leading-relaxed">
              На основе своего опыта проведения мероприятий и опыта, полученного на смене,
              планирую проводить более масштабные, качественные мероприятия, лучше
              руководить командой и ресурсами мероприятий.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Bottom Indicator */}
      <div className="relative z-10 flex justify-end items-center mt-2">
        <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-[#E5252A]">ПРАКТИКА</span>
          <span className="text-neutral-900">5</span>
        </div>
      </div>
    </div>
  );
};
