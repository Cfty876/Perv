import { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { SlideRenderer } from './components/viewer/SlideRenderer';
import { ContactModal } from './components/modals/ContactModal';
import { InteractiveHub } from './components/interactives/InteractiveHub';
import { 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  Layers, 
  X,
  Phone,
  Presentation,
  Gamepad2,
  Sparkles
} from 'lucide-react';

export default function App() {
  // Main section: presentation slides or interactives hub
  const [activeMainSection, setActiveMainSection] = useState<'slides' | 'interactive'>('slides');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isThumbnailsOpen, setIsThumbnailsOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  
  // Mobile Zoom & Pan State (Natural gestures: double-tap & pinch)
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialZoomRef = useRef<number>(1);

  // Swipe detection refs
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const slideContainerRef = useRef<HTMLDivElement | null>(null);

  // Preload all 6 slides in memory for instantaneous transitions
  useEffect(() => {
    [1, 2, 3, 4, 5, 6].forEach((num) => {
      const img = new Image();
      img.src = `/slide-${num}.webp`;
    });
  }, []);

  // Sync hash and handle hash change
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#interactives') {
        setActiveMainSection('interactive');
        return;
      }

      const match = window.location.hash.match(/#page-(\d+)/);
      if (match) {
        const p = parseInt(match[1], 10);
        if (p >= 1 && p <= SLIDES_DATA.length) {
          setCurrentPage(p);
          setActiveMainSection('slides');
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const scrollToPage = useCallback((page: number) => {
    const clamped = Math.max(1, Math.min(page, SLIDES_DATA.length));
    setCurrentPage(clamped);
    setActiveMainSection('slides');
    window.location.hash = `page-${clamped}`;
    // Reset zoom when switching pages
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const nextPage = useCallback(() => {
    if (currentPage < SLIDES_DATA.length) {
      scrollToPage(currentPage + 1);
    }
  }, [currentPage, scrollToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      scrollToPage(currentPage - 1);
    }
  }, [currentPage, scrollToPage]);

  // Keyboard navigation for desktop/tablets
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeMainSection !== 'slides') {
        if (e.key === 'Escape') {
          setIsContactOpen(false);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'Backspace') {
        e.preventDefault();
        prevPage();
      } else if (e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        scrollToPage(parseInt(e.key, 10));
      } else if (e.key === 'Escape') {
        setIsThumbnailsOpen(false);
        setIsContactOpen(false);
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, scrollToPage, activeMainSection]);

  // Touch Swipe & Pinch Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch gesture start
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialZoomRef.current = zoomLevel;
      return;
    }

    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
      if (zoomLevel > 1) {
        setIsPanning(true);
        panStartRef.current = {
          x: e.touches[0].clientX - panOffset.x,
          y: e.touches[0].clientY - panOffset.y,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Pinch to zoom
    if (e.touches.length === 2 && initialPinchDistRef.current) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleDelta = currentDist / initialPinchDistRef.current;
      const newScale = Math.min(Math.max(initialZoomRef.current * scaleDelta, 1), 3);
      setZoomLevel(newScale);
      if (newScale === 1) {
        setPanOffset({ x: 0, y: 0 });
      }
      return;
    }

    // Pan image when zoomed
    if (zoomLevel > 1 && isPanning && e.touches.length === 1) {
      const newX = e.touches[0].clientX - panStartRef.current.x;
      const newY = e.touches[0].clientY - panStartRef.current.y;
      setPanOffset({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPanning(false);
    initialPinchDistRef.current = null;

    if (zoomLevel > 1) return; // Do not swipe slide if user is zoomed in

    if (!touchStartRef.current) return;
    const touchEnd = e.changedTouches[0];
    const diffX = touchEnd.clientX - touchStartRef.current.x;
    const diffY = touchEnd.clientY - touchStartRef.current.y;
    const elapsed = Date.now() - touchStartRef.current.time;

    // Detect horizontal swipe if horizontal movement is dominant and > 40px
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.5 && elapsed < 500) {
      if (diffX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
    touchStartRef.current = null;
  };

  // Double tap to zoom in/out on mobile (natural, button-free)
  const lastTapRef = useRef<number>(0);
  const handleDoubleTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      if (zoomLevel === 1) {
        setZoomLevel(2);
      } else {
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
      }
    }
    lastTapRef.current = now;
  };

  // Native Mobile Share
  const handleShare = async () => {
    if (activeMainSection === 'interactive') {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Интерактивы Александра Ильина',
            text: 'Пройди тест на подходящий город России, сыграй в игру «Время Перемен» и задай вопрос боту!',
            url: `${window.location.origin}#interactives`,
          });
          return;
        } catch (err) {}
      }
      return;
    }

    const slideNumber = currentPage;
    const slideTitle = SLIDES_DATA[slideNumber - 1]?.title || `Слайд ${slideNumber}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Презентация Александра Ильина — ${slideTitle}`,
          text: `Слайд ${slideNumber}: ${slideTitle} (Александр Ильин, МАОУ Гимназия № 120)`,
          url: `${window.location.origin}#page-${slideNumber}`,
        });
        return;
      } catch (err) {}
    }

    // Direct download trigger fallback
    const link = document.createElement('a');
    link.href = `/slide-${slideNumber}.webp`;
    link.download = `Саша-Ильин-Слайд-${slideNumber}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-neutral-100 flex flex-col justify-between select-none relative font-sans overflow-x-hidden">
      
      {/* Top Header: Clean, Minimalist, with the ONE official logo of Движение Первых */}
      <header className="sticky top-0 z-40 w-full px-3 sm:px-4 py-2 bg-[#121214]/90 backdrop-blur-md border-b border-neutral-800/80 flex items-center justify-between">
        
        {/* Left: Official Движение Первых Logo & Segmented Switcher */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Exactly ONE official logo of Движение Первых on the main site */}
          <div className="flex items-center gap-1.5 shrink-0" title="Движение Первых">
            <img 
              src="/Первые.svg" 
              alt="Движение Первых" 
              className="h-7 sm:h-8 w-auto object-contain shrink-0 drop-shadow-xs" 
            />
          </div>

          {/* Section Switcher: Слайды / Интерактивы */}
          <div className="flex items-center gap-1 p-0.5 rounded-xl bg-neutral-900 border border-neutral-800">
            <button
              type="button"
              onClick={() => {
                setActiveMainSection('slides');
                window.location.hash = `page-${currentPage}`;
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeMainSection === 'slides'
                  ? 'bg-neutral-800 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 text-orange-400" />
              <span>Слайды</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveMainSection('interactive');
                window.location.hash = 'interactives';
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 relative ${
                activeMainSection === 'interactive'
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Интерактивы</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Right: Clean Actions (Визитка & Поделиться) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Contact Business Card Button */}
          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold active:scale-95 transition-all shadow-sm shadow-orange-950/40 min-h-[34px]"
            title="Контакты и визитка Александра"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Визитка</span>
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white active:scale-95 transition-all min-h-[34px] min-w-[34px] flex items-center justify-center border border-neutral-700/50"
            title="Поделиться"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Presentation / Interactive View */}
      <main className="flex-1 w-full flex flex-col items-center justify-center p-2 sm:p-4 pb-20 md:pb-24">
        {activeMainSection === 'interactive' ? (
          /* Interactive Hub (City Quiz, Chatbot, Career Game) */
          <div className="w-full max-w-4xl py-2 animate-fade-in">
            <InteractiveHub onOpenContacts={() => setIsContactOpen(true)} />
          </div>
        ) : (
          /* Minimalist Single Slide Presentation */
          <div className="w-full max-w-5xl flex flex-col items-center">
            
            {/* Slide Frame with Smooth Touch Gesture Support */}
            <div 
              ref={slideContainerRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleDoubleTap}
              className="relative w-full aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden bg-black border border-neutral-800/90 touch-none flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              {/* Animated Slide Image with Transform Support for Natural Zoom and Pan */}
              <div 
                className="w-full h-full transition-transform duration-150 ease-out origin-center flex items-center justify-center will-change-transform"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                }}
              >
                <SlideRenderer slideId={currentPage} isPriority={true} />
              </div>

              {/* Minimalist Zoom Badge (only appears when zoomed) */}
              {zoomLevel > 1 && (
                <button
                  type="button"
                  onClick={() => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); }}
                  className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-orange-600/90 backdrop-blur-xs text-white text-[11px] font-bold shadow-lg flex items-center gap-1 active:scale-95"
                  title="Нажмите, чтобы сбросить зум"
                >
                  <span>{Math.round(zoomLevel * 100)}%</span>
                  <span className="text-[10px] opacity-80">(сбросить)</span>
                </button>
              )}

              {/* Side Touch Navigation Arrows (Subtle, sleek) */}
              {currentPage > 1 && zoomLevel === 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prevPage(); }}
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-9 h-14 sm:w-11 sm:h-16 rounded-r-xl bg-black/35 hover:bg-black/60 text-white/60 hover:text-white flex items-center justify-center backdrop-blur-xs transition-all active:scale-95"
                  aria-label="Предыдущий слайд"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {currentPage < SLIDES_DATA.length && zoomLevel === 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); nextPage(); }}
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-9 h-14 sm:w-11 sm:h-16 rounded-l-xl bg-black/35 hover:bg-black/60 text-white/60 hover:text-white flex items-center justify-center backdrop-blur-xs transition-all active:scale-95"
                  aria-label="Следующий слайд"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}
            </div>

            {/* Clean Minimalist Slide Dots Indicator */}
            <div className="flex items-center gap-2 mt-3 sm:mt-4 py-1.5 px-3 rounded-full bg-neutral-900/60 border border-neutral-800/80">
              {SLIDES_DATA.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => scrollToPage(slide.id)}
                  aria-label={`Перейти к слайду ${slide.id}`}
                  className={`h-1.5 rounded-full transition-all ${
                    slide.id === currentPage 
                      ? 'w-6 bg-orange-500' 
                      : 'w-1.5 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>

          </div>
        )}
      </main>

      {/* Minimalist Floating Bottom Dock (In natural thumb zone on mobile) */}
      {activeMainSection === 'slides' && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-xs w-[calc(100%-2rem)] flex items-center justify-center">
          <div className="w-full bg-[#161618]/90 backdrop-blur-xl border border-neutral-700/60 rounded-2xl px-2 py-1.5 shadow-2xl flex items-center justify-between">
            
            {/* Left: Previous Slide */}
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPage <= 1}
              className="w-10 h-10 rounded-xl bg-neutral-800/70 hover:bg-neutral-700 disabled:opacity-25 text-white flex items-center justify-center transition-all active:scale-95"
              title="Предыдущий слайд"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-200" />
            </button>

            {/* Center: Slide indicator (Tap opens thumbnail sheet) */}
            <button
              type="button"
              onClick={() => setIsThumbnailsOpen(true)}
              className="h-10 px-3.5 rounded-xl bg-neutral-800/50 hover:bg-neutral-800 active:scale-95 transition-all text-xs font-bold text-white flex items-center gap-1.5 border border-neutral-700/40"
              title="Все слайды"
            >
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              <span className="font-mono text-xs">{currentPage} / {SLIDES_DATA.length}</span>
            </button>

            {/* Right: Next Slide */}
            <button
              type="button"
              onClick={nextPage}
              disabled={currentPage >= SLIDES_DATA.length}
              className="w-10 h-10 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-25 text-white flex items-center justify-center transition-all active:scale-95 shadow-md shadow-orange-950/40"
              title="Следующий слайд"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

          </div>
        </div>
      )}

      {/* Floating Bottom Quick Contacts bar for Interactive Hub Mode */}
      {activeMainSection === 'interactive' && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-sm w-[calc(100%-2rem)] flex items-center justify-between bg-[#161618]/90 backdrop-blur-xl border border-neutral-700/60 rounded-2xl p-1.5 shadow-2xl">
          <button
            type="button"
            onClick={() => setActiveMainSection('slides')}
            className="px-3.5 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>К слайдам</span>
          </button>

          <button
            type="button"
            onClick={() => setIsContactOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Визитка</span>
          </button>
        </div>
      )}

      {/* Mobile Bottom Sheet Drawer: Instant Slide Thumbnail Picker */}
      {isThumbnailsOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
          {/* Backdrop dismissal */}
          <div 
            className="flex-1 w-full" 
            onClick={() => setIsThumbnailsOpen(false)} 
          />

          {/* Drawer Container */}
          <div className="w-full bg-[#18181b] border-t border-neutral-800 rounded-t-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden pb-[max(1rem,env(safe-area-inset-bottom))]">
            {/* Grab Handle & Header */}
            <div className="pt-3 pb-2 px-5 flex items-center justify-between border-b border-neutral-800">
              <div className="w-10 h-1 bg-neutral-700 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2.5" />
              <div className="text-sm font-bold text-white pt-1">
                Все слайды ({SLIDES_DATA.length})
              </div>
              <button
                type="button"
                onClick={() => setIsThumbnailsOpen(false)}
                className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Grid for rapid visual jumping */}
            <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto">
              {SLIDES_DATA.map((slide) => {
                const isActive = slide.id === currentPage;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => {
                      scrollToPage(slide.id);
                      setIsThumbnailsOpen(false);
                    }}
                    className={`relative rounded-xl overflow-hidden text-left border-2 transition-all p-1.5 flex flex-col gap-1.5 group ${
                      isActive 
                        ? 'border-orange-500 bg-orange-950/20 shadow-lg shadow-orange-950/40' 
                        : 'border-neutral-800 bg-neutral-900/80 hover:border-neutral-700'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-black relative">
                      <picture className="w-full h-full">
                        <source srcSet={`/slide-${slide.id}.webp`} type="image/webp" />
                        <img
                          src={`/slide-${slide.id}.webp`}
                          alt={`Слайд ${slide.id}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </picture>
                      <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/75 text-[10px] font-mono text-white font-bold">
                        {slide.id}
                      </div>
                    </div>

                    {/* Title label */}
                    <div className="px-1 truncate">
                      <div className={`text-xs font-semibold truncate ${isActive ? 'text-orange-400' : 'text-neutral-200'}`}>
                        {slide.title}
                      </div>
                      <div className="text-[10px] text-neutral-400 truncate">
                        {slide.sectionName}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Banner in Drawer */}
            <div className="p-3 mx-4 mb-2 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center font-bold text-xs">
                  АИ
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Александр Ильин</div>
                  <div className="text-[10px] text-neutral-400">+7 919 399 08 66 · @sanya2519</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsThumbnailsOpen(false);
                  setIsContactOpen(true);
                }}
                className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all active:scale-95"
              >
                Визитка
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Interactive Contact Business Card Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
