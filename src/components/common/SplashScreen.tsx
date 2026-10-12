import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('Загрузка материалов презентации...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Background asset preloading
    const preloadImages = [
      '/slide-1.webp',
      '/slide-2.webp',
      '/slide-3.webp',
      '/slide-4.webp',
      '/slide-5.webp',
      '/slide-6.webp',
      '/Первые.svg',
      '/ученик-года.svg',
      '/года.svg',
      '/knizhka-ilyin.pdf'
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Step-by-step loading animation
    const timer1 = setTimeout(() => {
      setProgress(45);
      setStatusText('Кэширование волонтёрской книжки DOBRO.RU...');
    }, 350);

    const timer2 = setTimeout(() => {
      setProgress(75);
      setStatusText('Оптимизация слайдов высокой четкости...');
    }, 750);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText('Всё готово к просмотру!');
    }, 1150);

    const timer4 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1450);

    const timer5 = setTimeout(() => {
      onFinish();
    }, 1850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0c0c0e] text-white p-6 transition-opacity duration-400 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="pt-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[11px] font-bold text-amber-400 tracking-wider uppercase">
          <span>Всероссийский конкурс «Ученик года»</span>
        </div>
      </div>

      {/* Center: Official Logo of «Ученик Года» */}
      <div className="flex flex-col items-center justify-center my-auto z-10 space-y-6 max-w-sm text-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-3xl blur-xl animate-pulse" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center select-none">
            <img
              src="/ученик-года.svg"
              alt="Ученик Года"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Александр Ильин
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-medium">
            МАОУ Гимназия № 120 · Екатеринбург
          </p>
          <div className="text-[11px] text-amber-400 font-semibold pt-1">
            Портфолио достижений, волонтёрство и цифровая визитка
          </div>
        </div>

        {/* Progress Bar & Status Text */}
        <div className="w-64 sm:w-72 space-y-2 pt-2">
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700/50">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-neutral-400 font-medium animate-pulse">
            {statusText}
          </p>
        </div>
      </div>

      {/* Bottom Skip Button for instant entry */}
      <div className="pb-4 z-10">
        <button
          type="button"
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onFinish, 200);
          }}
          className="px-4 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 hover:text-white text-xs font-semibold border border-neutral-800 transition-all active:scale-95"
        >
          Войти сразу →
        </button>
      </div>
    </div>
  );
};
