import React, { useState } from 'react';
import { CAREER_QUESTIONS, CAREER_RESULTS, CareerResult } from '../../data/careerGameData';
import { 
  Sparkles, 
  RotateCcw, 
  Share2, 
  CheckCircle2, 
  Briefcase, 
  Target, 
  Award, 
  ArrowRight,
  Zap
} from 'lucide-react';

interface CareerGameProps {
  onOpenContacts?: () => void;
}

export const CareerGame: React.FC<CareerGameProps> = ({ onOpenContacts }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [scores, setScores] = useState<Record<string, number>>({
    leader: 0,
    it: 0,
    diplomat: 0,
    host: 0,
    innovator: 0,
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);
  const [result, setResult] = useState<CareerResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const currentQ = CAREER_QUESTIONS[currentIdx];
  const progressPercent = Math.round(((currentIdx + 1) / CAREER_QUESTIONS.length) * 100);

  const handleSelectOption = (idx: number, profKey: string, feedback: string) => {
    setSelectedOption(idx);
    setFeedbackText(feedback);

    setTimeout(() => {
      const updatedScores = {
        ...scores,
        [profKey]: (scores[profKey] || 0) + 1,
      };
      setScores(updatedScores);
      setSelectedOption(null);
      setFeedbackText(null);

      if (currentIdx + 1 < CAREER_QUESTIONS.length) {
        setCurrentIdx(currentIdx + 1);
      } else {
        // Calculate top career
        let maxProf = 'leader';
        let maxScore = -1;
        Object.entries(updatedScores).forEach(([k, v]) => {
          if (v > maxScore) {
            maxScore = v;
            maxProf = k;
          }
        });
        setResult(CAREER_RESULTS[maxProf] || CAREER_RESULTS.leader);
      }
    }, 450);
  };

  const restartGame = () => {
    setCurrentIdx(0);
    setScores({ leader: 0, it: 0, diplomat: 0, host: 0, innovator: 0 });
    setSelectedOption(null);
    setFeedbackText(null);
    setResult(null);
  };

  const handleShare = () => {
    if (!result) return;
    const text = `В симуляторе «Время Перемен» моя профессия будущего — ${result.title}! ${result.subtitle}`;
    if (navigator.share) {
      navigator.share({
        title: 'Игра «Время Перемен: Профессии Будущего»',
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
        /* Active Game Challenge */
        <div className="w-full bg-[#18181b] border border-neutral-800 rounded-3xl p-4 sm:p-7 shadow-2xl flex flex-col gap-4 sm:gap-5 animate-fade-in">
          
          {/* Header Banner */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5 text-orange-400 font-bold">
                <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                Кейс {currentIdx + 1} из {CAREER_QUESTIONS.length} · «Время Перемен»
              </span>
              <span className="font-mono">{progressPercent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Question Title & Situation */}
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-orange-600/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-2">
              {currentQ.badge}
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
              {currentQ.situation}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx, opt.profession, opt.feedback)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex flex-col gap-1.5 active:scale-[0.99] min-h-[58px] ${
                    isSelected
                      ? 'border-orange-500 bg-orange-600/20 text-white shadow-lg shadow-orange-950/40'
                      : 'border-neutral-800 bg-neutral-900/90 hover:border-neutral-700 text-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">
                      {opt.text}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-400 shrink-0 hidden sm:inline">
                      {opt.scoreTrait}
                    </span>
                  </div>

                  {isSelected && feedbackText && (
                    <div className="text-[11px] text-orange-300 font-bold flex items-center gap-1 mt-1 animate-fade-in">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{feedbackText}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="text-center text-[11px] text-neutral-400 pt-1">
            Симулятор основан на реальных кейсах фестиваля «Время Перемен» МАОУ Гимназии №120
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div className="w-full bg-[#18181b] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in flex flex-col">
          
          {/* Top Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-700 text-white relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-xs text-xs font-bold text-white/90 mb-3">
              <Award className="w-4 h-4 text-amber-300" />
              Твоя профессия будущего
            </div>

            <div className="flex items-baseline gap-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {result.title}
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-orange-100 font-medium mt-1">
              {result.subtitle}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="px-3 py-1 rounded-xl bg-white/20 backdrop-blur-xs text-xs font-bold text-white flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-amber-300" />
                <span>Совпадение: {result.matchPercent}%</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-7 space-y-5">
            {/* Description */}
            <div className="text-sm text-neutral-300 leading-relaxed bg-neutral-900/80 p-4 rounded-2xl border border-neutral-800">
              {result.description}
            </div>

            {/* Key Skills */}
            <div>
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">
                Прокачанные компетенции:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {result.keySkills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-semibold text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Track */}
            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Где развивать этот трек:</div>
                <div className="text-xs text-neutral-300 mt-0.5">{result.recommendedTrack}</div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 text-xs italic text-orange-200">
              {result.quote}
            </div>

            {/* Buttons */}
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
                onClick={restartGame}
                className="w-full sm:w-auto h-12 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Сыграть ещё раз</span>
              </button>

              {onOpenContacts && (
                <button
                  type="button"
                  onClick={onOpenContacts}
                  className="w-full sm:w-auto h-12 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-orange-400 hover:text-orange-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <span>Написать Саше</span>
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
