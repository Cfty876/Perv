import React, { useState } from 'react';
import { CITY_QUESTIONS, CITIES_RESULTS, CityResult } from '../../data/cityQuizData';
import { RotateCcw, Share2, Compass, CheckCircle2, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface CityQuizProps {
  onOpenChat?: () => void;
}

export const CityQuiz: React.FC<CityQuizProps> = ({ onOpenChat }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [scores, setScores] = useState<Record<string, number>>({
    moscow: 0,
    ekb: 0,
    spb: 0,
    vladivostok: 0,
    kazan: 0,
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<CityResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const question = CITY_QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / CITY_QUESTIONS.length) * 100);

  const handleSelectOption = (index: number, cityKey: string) => {
    setSelectedOption(index);

    setTimeout(() => {
      const updatedScores = {
        ...scores,
        [cityKey]: (scores[cityKey] || 0) + 1,
      };
      setScores(updatedScores);
      setSelectedOption(null);

      if (currentIdx + 1 < CITY_QUESTIONS.length) {
        setCurrentIdx(currentIdx + 1);
      } else {
        // Calculate winner
        let maxCity = 'ekb';
        let maxScore = -1;
        Object.entries(updatedScores).forEach(([c, val]) => {
          if (val > maxScore) {
            maxScore = val;
            maxCity = c;
          }
        });
        setResult(CITIES_RESULTS[maxCity] || CITIES_RESULTS.ekb);
      }
    }, 280);
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setScores({ moscow: 0, ekb: 0, spb: 0, vladivostok: 0, kazan: 0 });
    setSelectedOption(null);
    setResult(null);
  };

  const handleShare = () => {
    if (!result) return;
    const text = `Мой идеальный город по тесту Александра Ильина — ${result.name}! ${result.tagline}`;
    if (navigator.share) {
      navigator.share({
        title: 'Тест: Какой город России тебе подходит?',
        text: text,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      {!result ? (
        /* Quiz Active State */
        <div className="w-full bg-[#18181b] border border-neutral-800 rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col gap-5">
          {/* Header & Progress Indicator */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Compass className="w-4 h-4 animate-spin-slow" />
                Вопрос {currentIdx + 1} из {CITY_QUESTIONS.length}
              </span>
              <span className="font-mono">{progressPercent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="py-1">
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              {question.question}
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              {question.subtitle}
            </p>
          </div>

          {/* 5 Options */}
          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              const isChosen = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx, opt.city)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 active:scale-[0.99] min-h-[56px] group ${
                    isChosen
                      ? 'border-orange-500 bg-orange-600/20 text-white shadow-lg shadow-orange-950/40'
                      : 'border-neutral-800 bg-neutral-900/90 hover:border-neutral-700 hover:bg-neutral-850 text-neutral-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-mono font-bold text-neutral-400 group-hover:text-white shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {opt.text}
                    </span>
                  </div>

                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-neutral-800/80 text-[10px] text-neutral-400 shrink-0 font-medium">
                    {opt.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Helper note */}
          <div className="pt-2 text-center text-[11px] text-neutral-400">
            Определяем город по социотипу, ценностям и лидерскому стилю
          </div>
        </div>
      ) : (
        /* Result State */
        <div className="w-full bg-[#18181b] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col">
          
          {/* Top Banner with City Gradient */}
          <div className={`p-6 sm:p-8 bg-gradient-to-br ${result.gradient} text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-8xl pointer-events-none select-none">
              {result.name}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-xs text-xs font-bold text-white/90 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Твой результат теста
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              {result.name}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-white/95 mt-1">
              {result.title}
            </p>
            <p className="text-xs text-white/80 italic mt-0.5">
              {result.tagline}
            </p>
          </div>

          {/* Content Body */}
          <div className="p-5 sm:p-7 space-y-5">
            {/* Description */}
            <div className="text-sm text-neutral-300 leading-relaxed bg-neutral-900/80 p-4 rounded-2xl border border-neutral-800">
              {result.description}
            </div>

            {/* Key Traits */}
            <div>
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Твои ключевые черты:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.traits.map((trait, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Must-visit Places */}
            <div>
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Где тебе обязательно стоит побывать:
              </div>
              <div className="flex flex-wrap gap-2">
                {result.places.map((place, pIdx) => (
                  <span 
                    key={pIdx} 
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-neutral-800/80 text-xs font-medium text-neutral-200 border border-neutral-700/60"
                  >
                    <MapPin className="w-3 h-3 text-orange-400" />
                    {place}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote advice */}
            <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs text-orange-200">
              <span className="font-bold text-orange-300">Совет от Александра Ильина: </span>
              {result.advice}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="button"
                onClick={handleShare}
                className="w-full sm:flex-1 h-12 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40 transition-transform active:scale-95"
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Скопировано в буфер!' : 'Поделиться результатом'}</span>
              </button>

              <button
                type="button"
                onClick={restartQuiz}
                className="w-full sm:w-auto h-12 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Пройти заново</span>
              </button>

              {onOpenChat && (
                <button
                  type="button"
                  onClick={onOpenChat}
                  className="w-full sm:w-auto h-12 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-orange-400 hover:text-orange-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <span>Задать вопрос боту</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>
      )}
    </div>
  );
};
