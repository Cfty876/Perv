import React from 'react';

export const Slide2: React.FC = () => {
  return (
    <div className="relative w-full h-full slide-grid-bg text-neutral-900 select-none overflow-hidden p-3 sm:p-6 lg:p-8 flex flex-col justify-between">
      {/* Background Graphic: Giant "ЗНАНИЯ" wordmark & Blue blocks */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 overflow-hidden">
        <span className="text-[130px] sm:text-[190px] lg:text-[260px] font-black tracking-widest text-[#0047AB] uppercase">
          ЗНАНИЯ
        </span>
      </div>

      {/* Decorative Blue Block Top-Right from original slide */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-36 sm:h-48 bg-[#0047AB] rounded-bl-3xl opacity-20 pointer-events-none flex items-end justify-start p-3 text-white font-black text-2xl tracking-tighter">
        <span>E B E</span>
      </div>

      {/* Center Blue Stripe "Первые Свердловская область" */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-8 sm:h-10 bg-gradient-to-r from-transparent via-[#0047AB]/15 to-transparent pointer-events-none flex items-center justify-center">
        <span className="text-xs sm:text-sm font-bold text-[#0047AB] tracking-widest uppercase">
          Первые • Свердловская область
        </span>
      </div>

      {/* Authentic Diplomas & Certificates Collage (Exact arrangement from the PDF) */}
      <div className="relative z-10 grid grid-cols-12 gap-2 sm:gap-3.5 my-auto max-h-[88%] py-1">
        
        {/* Certificate 1: Top-Left - Диплом «Большая Перемена» */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <span className="text-[10px] sm:text-xs font-black uppercase text-[#0047AB] tracking-wider">
              ДИПЛОМ
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400 opacity-80" />
          </div>
          <div className="my-1 text-center">
            <div className="text-[8px] sm:text-[9px] text-neutral-500">награждается</div>
            <div className="text-[11px] sm:text-xs font-black text-neutral-900 font-serif">
              Ильин Александр
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-3">
              за успешное освоение дополнительной общеразвивающей программы «Время больших перемен» в объеме 24 академических часа
            </p>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>АНО «Большая Перемена»</span>
            <span>2022 г.</span>
          </div>
        </div>

        {/* Certificate 2: Top-Center - Сертификат «Академия Первых» */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <span className="text-[10px] sm:text-xs font-black uppercase text-[#E5252A] tracking-wider">
              СЕРТИФИКАТ
            </span>
            <div className="text-[8px] font-bold text-red-600">Движение Первых</div>
          </div>
          <div className="my-1 text-center">
            <div className="text-[8px] sm:text-[9px] text-neutral-500">вручается</div>
            <div className="text-[11px] sm:text-xs font-black text-neutral-900">
              Ильину Александру Павловичу
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-3">
              за активное участие в программе Фестиваля «Академия Первых: успех начинается с тебя», инициативность, ответственность и целеустремленность
            </p>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>г. Екатеринбург</span>
            <span>2025 год</span>
          </div>
        </div>

        {/* Certificate 3: Top-Right - Благодарственное письмо «Карусель единства» */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <span className="text-[9px] sm:text-[11px] font-black uppercase text-[#0047AB] tracking-tight">
              БЛАГОДАРСТВЕННОЕ ПИСЬМО
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
          </div>
          <div className="my-1 text-center">
            <div className="text-[8px] sm:text-[9px] text-neutral-500">вручается</div>
            <div className="text-[11px] sm:text-xs font-black text-neutral-900">
              Ильину Александру
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-3">
              За помощь в реализации профильной смены Движения Первых «Карусель единства: соединяем традиции, сохраняем ценности»
            </p>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>Ленинский район Екатеринбурга</span>
            <span>Шохина Т.В.</span>
          </div>
        </div>

        {/* Certificate 4: Bottom-Left - МДЦ «АРТЕК» 2 место */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold text-red-500 uppercase">АРТЕК</span>
              <span className="text-[10px] sm:text-xs font-black uppercase text-[#0047AB]">ДИПЛОМ</span>
            </div>
            <span className="text-[8px] font-black text-amber-500">2 МЕСТО</span>
          </div>
          <div className="my-1 text-center">
            <div className="text-[8px] text-neutral-500">награждается</div>
            <div className="text-[11px] sm:text-xs font-black text-neutral-900 font-serif">
              Ильин Александр (4 отряд)
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-3">
              За занятое 2 место в конкурсе актерского мастерства на творческих конкурсах (15 смена «Новогодняя сказка «Артек»»)
            </p>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>МДЦ «Артек»</span>
            <span>2022–2023 г.</span>
          </div>
        </div>

        {/* Certificate 5: Bottom-Center - Международный фестиваль молодёжи 2026 */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <span className="text-[9px] sm:text-[11px] font-black uppercase text-emerald-600">
              СЕРТИФИКАТ УЧАСТНИКА
            </span>
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
          </div>
          <div className="my-1 text-center">
            <div className="text-[11px] sm:text-xs font-black text-neutral-900">
              Ильин Александр Павлович
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-2">
              вошёл в число 10 000 молодых лидеров из 191 страны, принявших участие в Международном фестивале молодёжи
            </p>
            <div className="mt-1 px-1.5 py-0.5 bg-emerald-600 text-white rounded text-[7px] font-extrabold uppercase">
              ВЕРЬ В СЕБЯ И СЛЕДУЙ ЗА МЕЧТОЙ!
            </div>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>Екатеринбург</span>
            <span>11–17 сентября 2026 г.</span>
          </div>
        </div>

        {/* Certificate 6 & 7: Bottom-Right - «Благо твори» & «ПЕРВЫЕ в профессиях будущего» */}
        <div className="col-span-4 bg-white rounded-lg border border-neutral-300 p-2 sm:p-3 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1">
            <span className="text-[9px] sm:text-[10px] font-black uppercase text-neutral-900">
              ДИПЛОМ ФИНАЛИСТА
            </span>
            <span className="text-[8px] font-bold text-red-600">Первые</span>
          </div>
          <div className="my-1 text-center">
            <div className="text-[11px] sm:text-xs font-black text-neutral-900">
              Ильин Саша (Гимназия №120)
            </div>
            <p className="text-[7px] sm:text-[8.5px] text-neutral-600 mt-1 leading-tight line-clamp-2">
              участник команды, вошедшей в число финалистов проекта «ПЕРВЫЕ в профессиях будущего»
            </p>
            <div className="text-[7px] text-blue-700 font-semibold mt-0.5">
              + Благодарность за волонтёрство «Благо твори»
            </div>
          </div>
          <div className="flex justify-between items-center text-[7px] text-neutral-500 border-t border-neutral-100 pt-1">
            <span>Уральский политех — МЦК</span>
            <span>2025 г.</span>
          </div>
        </div>

      </div>

      {/* Slide Bottom Indicator */}
      <div className="relative z-10 flex justify-end items-center">
        <div className="text-sm sm:text-base font-black tracking-wider uppercase flex items-center gap-1.5">
          <span className="text-[#0284c7]">ЗНАНИЯ</span>
          <span className="text-neutral-900">2</span>
        </div>
      </div>
    </div>
  );
};
