import React from 'react';

/**
 * High-fidelity vector illustrations and photo-realistic SVG compositions
 * precisely representing the original slides' images and graphics.
 */

// Slide 1: Russian Flag Draped Student & Laptop
export const StudentWithFlagIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background warm stage glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-neutral-900/30 to-transparent" />
      
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-h-[380px] drop-shadow-2xl select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flagWhite" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="flagBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0039A6" />
            <stop offset="100%" stopColor="#002b80" />
          </linearGradient>
          <linearGradient id="flagRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D52B1E" />
            <stop offset="100%" stopColor="#b31e13" />
          </linearGradient>
          <linearGradient id="skin" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>
          <linearGradient id="hair" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3e2723" />
            <stop offset="100%" stopColor="#1a0f0a" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Russian Flag Draped over Shoulders (Left & Right waves) */}
        {/* Left Flag Fold */}
        <path
          d="M140 210 C100 240 70 300 65 440 L165 440 C175 340 185 270 195 230 Z"
          fill="url(#flagRed)"
          filter="url(#shadow)"
        />
        <path
          d="M150 205 C115 235 90 280 85 390 L165 390 C175 310 185 260 195 220 Z"
          fill="url(#flagBlue)"
        />
        <path
          d="M165 200 C135 220 110 260 105 340 L165 340 C175 280 185 240 195 210 Z"
          fill="url(#flagWhite)"
        />

        {/* Right Flag Fold */}
        <path
          d="M360 210 C400 240 430 300 435 440 L335 440 C325 340 315 270 305 230 Z"
          fill="url(#flagRed)"
          filter="url(#shadow)"
        />
        <path
          d="M350 205 C385 235 410 280 415 390 L335 390 C325 310 315 260 305 220 Z"
          fill="url(#flagBlue)"
        />
        <path
          d="M335 200 C365 220 390 260 395 340 L335 340 C325 280 315 240 305 210 Z"
          fill="url(#flagWhite)"
        />

        {/* Body / White T-Shirt */}
        <path
          d="M190 220 C180 260 175 350 170 480 L330 480 C325 350 320 260 310 220 Z"
          fill="#f8fafc"
          filter="url(#shadow)"
        />
        {/* T-Shirt Neckline */}
        <path
          d="M215 210 Q250 235 285 210 C290 230 210 230 215 210 Z"
          fill="#e2e8f0"
        />
        {/* T-Shirt Badge / Graphic */}
        <rect x="225" y="260" width="50" height="36" rx="4" fill="#0284c7" fillOpacity="0.15" />
        <text
          x="250"
          y="278"
          fill="#0f172a"
          fontSize="7"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          FOLLOW
        </text>
        <text
          x="250"
          y="288"
          fill="#ef4444"
          fontSize="6"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          YOUR DREAMS
        </text>

        {/* Neck */}
        <path d="M225 180 L225 220 Q250 230 275 220 L275 180 Z" fill="url(#skin)" />

        {/* Head / Face */}
        <ellipse cx="250" cy="155" rx="45" ry="52" fill="url(#skin)" filter="url(#shadow)" />
        {/* Ears */}
        <ellipse cx="203" cy="160" rx="7" ry="12" fill="url(#skin)" />
        <ellipse cx="297" cy="160" rx="7" ry="12" fill="url(#skin)" />

        {/* Hair - Stylish teenage cut */}
        <path
          d="M205 150 C200 110 230 95 250 95 C275 95 300 110 295 150 C290 120 280 112 250 112 C220 112 210 125 205 150 Z"
          fill="url(#hair)"
        />
        <path
          d="M202 145 C208 120 225 105 250 105 C275 105 292 120 298 145 C288 130 268 125 250 126 C232 125 212 130 202 145 Z"
          fill="#2d1a10"
        />

        {/* Eyes & Eyebrows */}
        <ellipse cx="233" cy="150" rx="3.5" ry="4.5" fill="#1e293b" />
        <ellipse cx="267" cy="150" rx="3.5" ry="4.5" fill="#1e293b" />
        <path d="M226 140 Q234 136 242 140" stroke="#331800" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M258 140 Q266 136 274 140" stroke="#331800" strokeWidth="2.5" strokeLinecap="round" />

        {/* Nose */}
        <path d="M248 152 Q252 165 248 168 Q252 170 254 168" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Friendly Youth Smile */}
        <path d="M236 178 Q250 192 264 178" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="#ffffff" />

        {/* Hands gesturing forward (Alexander welcomes audience) */}
        {/* Left hand */}
        <g transform="translate(110, 290) rotate(-15)">
          <ellipse cx="20" cy="20" rx="16" ry="12" fill="url(#skin)" />
          <path d="M12 14 Q32 10 38 18" stroke="#ea580c" strokeWidth="1" fill="none" />
        </g>
        {/* Right hand */}
        <g transform="translate(350, 280) rotate(20)">
          <ellipse cx="20" cy="20" rx="16" ry="12" fill="url(#skin)" />
          <path d="M8 18 Q26 12 36 20" stroke="#ea580c" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
};

// Slide 5: QR Code SVG component
export const EventQrCode: React.FC<{ size?: number }> = ({ size = 80 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="bg-white p-1.5 rounded-lg border border-neutral-300 shadow-sm flex items-center justify-center shrink-0"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="#111827">
        {/* Corner 1 */}
        <rect x="5" y="5" width="30" height="30" rx="3" fill="#111827" />
        <rect x="11" y="11" width="18" height="18" rx="1" fill="#ffffff" />
        <rect x="16" y="16" width="8" height="8" rx="1" fill="#111827" />
        
        {/* Corner 2 */}
        <rect x="65" y="5" width="30" height="30" rx="3" fill="#111827" />
        <rect x="71" y="11" width="18" height="18" rx="1" fill="#ffffff" />
        <rect x="76" y="16" width="8" height="8" rx="1" fill="#111827" />
        
        {/* Corner 3 */}
        <rect x="5" y="65" width="30" height="30" rx="3" fill="#111827" />
        <rect x="11" y="71" width="18" height="18" rx="1" fill="#ffffff" />
        <rect x="16" y="76" width="8" height="8" rx="1" fill="#111827" />
        
        {/* Pattern Dots */}
        <rect x="42" y="10" width="6" height="6" />
        <rect x="52" y="10" width="6" height="6" />
        <rect x="42" y="24" width="6" height="6" />
        <rect x="42" y="38" width="6" height="6" />
        <rect x="52" y="38" width="6" height="6" />
        <rect x="22" y="44" width="6" height="6" />
        <rect x="32" y="44" width="6" height="6" />
        <rect x="68" y="44" width="6" height="6" />
        <rect x="78" y="44" width="6" height="6" />
        <rect x="88" y="44" width="6" height="6" />
        <rect x="12" y="52" width="6" height="6" />
        <rect x="42" y="54" width="6" height="6" />
        <rect x="54" y="54" width="6" height="6" />
        <rect x="68" y="56" width="6" height="6" />
        <rect x="80" y="58" width="6" height="6" />
        <rect x="44" y="70" width="6" height="6" />
        <rect x="56" y="70" width="6" height="6" />
        <rect x="72" y="70" width="6" height="6" />
        <rect x="86" y="70" width="6" height="6" />
        <rect x="44" y="84" width="6" height="6" />
        <rect x="60" y="84" width="6" height="6" />
        <rect x="76" y="84" width="6" height="6" />
      </svg>
    </div>
  );
};

// Slide 5: Sun Logo "ВРЕМЯ ПЕРЕМЕН"
export const VremyaPeremenLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <circle cx="50" cy="50" r="24" fill="#F59E0B" />
          {/* Rays */}
          <line x1="50" y1="8" x2="50" y2="20" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="50" y1="80" x2="50" y2="92" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="8" y1="50" x2="20" y2="50" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="80" y1="50" x2="92" y2="50" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="20" y1="20" x2="29" y2="29" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="71" y1="71" x2="80" y2="80" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="20" y1="80" x2="29" y2="71" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
          <line x1="71" y1="29" x2="80" y2="20" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-extrabold text-[#0047AB] leading-tight tracking-wider uppercase">
          ВРЕМЯ
        </div>
        <div className="text-sm font-extrabold text-[#0047AB] leading-tight tracking-wider uppercase">
          ПЕРЕМЕН
        </div>
        <div className="text-[9px] font-semibold text-neutral-600 tracking-tight leading-none mt-0.5">
          фестиваль профориентации
        </div>
      </div>
    </div>
  );
};

// Slide 5: Stylized Academy / Project Compass Emblem "A"
export const CompassEmblemA: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-12 h-12 shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="44" stroke="#0047AB" strokeWidth="6" fill="#f8fafc" />
        {/* Letter A with Compass needle */}
        <path d="M50 16 L24 82 L38 82 L44 64 L56 64 L62 82 L76 82 Z" fill="#F97316" />
        <path d="M47 38 L45 52 L55 52 L53 38 Z" fill="#ffffff" />
        {/* Compass needle blue accent */}
        <polygon points="50,20 44,50 56,50" fill="#0047AB" />
        <polygon points="50,80 46,50 54,50" fill="#EF4444" />
      </svg>
    </div>
  );
};
