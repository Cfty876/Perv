import React from 'react';
import { User, Zap, Target, FileText, Smile, ArrowRight, ArrowUp } from 'lucide-react';

export const Slide6: React.FC = () => {
  return (
    <div className="relative w-full h-full slide-grid-bg text-neutral-900 select-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12">
      {/* Top Bar: Headline Left & Emotion Label Right */}
      <div className="relative z-10 flex items-center justify-between">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-900">
          БУДУЩЕЕ
        </h1>
        <div className="text-sm sm:text-base font-bold text-neutral-800 tracking-tight">
          Положительные эмоции
        </div>
      </div>

      {/* Main Flowchart / Strategy Schema (1:1 with Original Design) */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-auto py-4">
        <div className="w-full max-w-4xl grid grid-cols-12 items-center gap-2 sm:gap-4">
          
          {/* Node 1: "Саня" */}
          <div className="col-span-2 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center text-red-500 shadow-sm hover:scale-105 transition-transform">
              <User className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
            </div>
            <div className="mt-2 text-sm sm:text-base font-extrabold text-neutral-900">
              Саня
            </div>
          </div>

          {/* Arrow 1: To Experience */}
          <div className="col-span-1 flex items-center justify-center text-neutral-900">
            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2.5]" />
          </div>

          {/* Node 2: "Многолетний опыт участия в проектах" */}
          <div className="col-span-3 flex flex-col items-center text-center">
            {/* Double Rounded Orange Box Icon */}
            <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl border-3 border-orange-500 bg-orange-50/80 flex items-center justify-center gap-1 shadow-sm hover:scale-105 transition-transform">
              <div className="w-2.5 h-6 bg-orange-500 rounded-full" />
              <div className="w-2.5 h-6 bg-orange-500 rounded-full" />
            </div>
            <div className="mt-2 text-xs sm:text-sm font-extrabold text-neutral-800 leading-tight">
              Многолетний опыт<br />участия в проектах
            </div>
          </div>

          {/* Diverging Paths: 3 branches (Up, Center, Down) */}
          <div className="col-span-3 flex flex-col justify-between h-48 sm:h-56 py-1">
            {/* Branch 1: "Новые идеи" */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shrink-0">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-neutral-900 whitespace-nowrap">
                Новые идеи
              </span>
            </div>

            {/* Branch 2: Center Target Checkmark */}
            <div className="flex items-center justify-start pl-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600 bg-blue-50/50 shadow-sm shrink-0">
                <Target className="w-5 h-5 stroke-[2.5]" />
              </div>
            </div>

            {/* Branch 3: "Больше инициатив" */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border-2 border-blue-600 flex items-center justify-center text-blue-600 bg-blue-50/50 shadow-sm shrink-0">
                <FileText className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-neutral-900 whitespace-nowrap">
                Больше инициатив
              </span>
            </div>
          </div>

          {/* Node 3 & Node 4: Quality Events & Smiling Face */}
          <div className="col-span-3 flex flex-col items-center text-center">
            {/* Node 4: Red Smiling Face ("Положительные эмоции") */}
            <div className="flex flex-col items-center mb-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-500 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform">
                <Smile className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.5]" />
              </div>
              {/* Arrow Up from Events to Emotions */}
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 stroke-[3] my-1" />
            </div>

            {/* Node 3: "Огромное количество качественных мероприятий" */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl border-3 border-orange-500 bg-orange-50/80 flex items-center justify-center gap-1 shadow-sm hover:scale-105 transition-transform">
                <div className="w-2.5 h-6 bg-orange-500 rounded-full" />
                <div className="w-2.5 h-6 bg-orange-500 rounded-full" />
              </div>
              <div className="mt-2 text-xs sm:text-sm font-extrabold text-neutral-800 leading-tight">
                Огромное количество<br />качественных<br />мероприятий
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Bottom Indicator */}
      <div className="relative z-10 flex justify-end items-center">
        <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-[#E5252A]">БУДУЩЕЕ</span>
          <span className="text-neutral-900">6</span>
        </div>
      </div>
    </div>
  );
};
