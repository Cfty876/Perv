import React, { useState, useMemo } from 'react';
import { 
  VOLUNTEER_STATS, 
  VOLUNTEER_RECORDS, 
  VOLUNTEER_COURSES, 
  KEY_ACHIEVEMENTS, 
  BIOGRAPHY_TEXTS
} from '../../data/portfolioData';
import { 
  Award, 
  Download, 
  ExternalLink, 
  Heart, 
  Star, 
  Trophy, 
  Code, 
  Users, 
  Flag, 
  Clock, 
  CheckCircle2, 
  Search, 
  GraduationCap, 
  BookOpen, 
  Share2, 
  Layers,
  Flame,
  MapPin, 
  Calendar, 
  Building2, 
  X,
  ChevronRight
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenContacts: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenContacts }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'volunteer' | 'achievements' | 'science' | 'bio'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [volunteerCategory, setVolunteerCategory] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter volunteer records
  const filteredVolunteerRecords = useMemo(() => {
    return VOLUNTEER_RECORDS.filter(record => {
      const matchesSearch = 
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.role.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = volunteerCategory === 'all' || record.category === volunteerCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, volunteerCategory]);

  const categories = [
    { key: 'all', label: 'Все дела (23)' },
    { key: 'Дети и молодежь', label: 'Дети и молодёжь' },
    { key: 'Спорт и события', label: 'Спорт' },
    { key: 'Образование', label: 'Образование' },
    { key: 'Ветераны и Историческая память', label: 'Память' },
    { key: 'Урбанистика', label: 'Урбанистика' }
  ];

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case 'trophy': return <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
      case 'star': return <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />;
      case 'award': return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />;
      case 'code': return <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />;
      case 'users': return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
      case 'flag': return <Flag className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400" />;
      case 'heart': return <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />;
      default: return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />;
    }
  };

  const handleSharePortfolio = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Достижения и Волонтёрская книжка Александра Ильина',
          text: 'Всероссийский конкурс «Ученик года» — 299.5 верифицированных часов, проекты Движения Первых, Большая перемена, Сириус.',
          url: `${window.location.origin}#portfolio`,
        });
        return;
      } catch (e) {}
    }
    navigator.clipboard?.writeText(`${window.location.origin}#portfolio`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="w-full space-y-4 sm:space-y-6 pb-24 animate-fade-in text-neutral-100 px-1 sm:px-0">
      
      {/* Official Contest Header Banner (Ученик Года & Движение Первых) */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900 via-[#18181b] to-neutral-900 border border-neutral-800 p-4 sm:p-7 shadow-2xl">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          
          {/* Main Info */}
          <div className="space-y-2.5 max-w-2xl">
            {/* Contest Badge with official года.svg logo */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] sm:text-xs font-bold tracking-wide">
                {/* Official contest logo года.svg (orange, no substrate) */}
                <img src="/года.svg" alt="Ученик года" className="w-5 h-5 object-contain shrink-0" />
                <span>Конкурс «Ученик года»</span>
              </div>

              <span className="text-[11px] text-neutral-400 font-medium">
                МАОУ Гимназия № 120 · Екатеринбург
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Лидерство, Волонтёрство и <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">IT-Инновации</span>
            </h1>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Александр Ильин — представитель Совета Первых Екатеринбурга и Свердловской области, делегат МФМ 2026, 4-кратный участник «Большой перемены», разработчик платформы «ЧаВошки» (ОЦ «Сириус») и волонтёр с 299.5 верифицированными часами на DOBRO.RU.
            </p>

            {/* Quick Meta Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-neutral-800/90 border border-neutral-700/60 text-[11px] text-neutral-300 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                Рейтинг 5.0 (DOBRO.RU ID: {VOLUNTEER_STATS.dobroId})
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-800/90 border border-neutral-700/60 text-[11px] text-neutral-300 flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" />
                299.5 часов волонтёрства
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-neutral-800/90 border border-neutral-700/60 text-[11px] text-neutral-300 flex items-center gap-1">
                <Award className="w-3 h-3 text-orange-400" />
                Волонтёр года 2025
              </span>
            </div>
          </div>

          {/* Action Download Buttons (Mobile Optimized) */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 pt-2 md:pt-0">
            {/* Primary Download Button for Volunteer Book PDF */}
            <a
              href={VOLUNTEER_STATS.downloadPdfPath}
              download="Книжка Ильин.pdf"
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/50 active:scale-95 transition-all text-center min-h-[46px]"
              title="Скачать официальный PDF-документ книжки волонтёра"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Скачать книжку (PDF)</span>
            </a>

            {/* Link to Yandex Disk with all Diplomas */}
            <a
              href={VOLUNTEER_STATS.yandexDiskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-neutral-700/80 active:scale-95 transition-all text-center min-h-[42px]"
              title="Открыть Яндекс.Диск со всеми дипломами и сертификатами"
            >
              <ExternalLink className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Все дипломы (Яндекс.Диск)</span>
            </a>

            {/* Contacts & Share */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenContacts}
                className="flex-1 px-3 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 text-xs font-bold border border-neutral-800 active:scale-95 transition-all text-center min-h-[38px]"
              >
                Визитка
              </button>

              <button
                type="button"
                onClick={handleSharePortfolio}
                className="px-3 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-bold border border-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-1.5 min-h-[38px]"
                title="Поделиться страницей"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Скопировано!' : 'Поделиться'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Digital Metrics Ribbon (Mobile 4-col compact) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4 pt-4 border-t border-neutral-800/80">
          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-orange-400 font-mono">299.5</span>
            <span className="text-[11px] text-neutral-400 font-medium">Часов в волонтёрстве</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-white font-mono">23</span>
            <span className="text-[11px] text-neutral-400 font-medium">Добрых дела в книжке</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono flex items-center gap-1">
              5.0 <Star className="w-3.5 h-3.5 fill-amber-400 inline" />
            </span>
            <span className="text-[11px] text-neutral-400 font-medium">Рейтинг добровольца</span>
          </div>

          <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</span>
            <span className="text-[11px] text-neutral-400 font-medium">Верификация DOBRO.RU</span>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation (Touch swipe friendly) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
            activeTab === 'all'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Все материалы</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('volunteer')}
          className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
            activeTab === 'volunteer'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          <Heart className="w-3.5 h-3.5" />
          <span>Волонтёрская книжка (23)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('achievements')}
          className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
            activeTab === 'achievements'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>Достижения и конкурсы</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('science')}
          className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
            activeTab === 'science'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Наука и IT</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('bio')}
          className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
            activeTab === 'bio'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>О себе и Манифест</span>
        </button>
      </div>

      {/* SECTION 1: Volunteer Book (DOBRO.RU) */}
      {(activeTab === 'all' || activeTab === 'volunteer') && (
        <section className="space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 fill-red-500/20" />
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Личная книжка волонтёра (ЛЭКВ DOBRO.RU)
                </h2>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Ильин Александр Павлович · ID: <span className="font-mono text-orange-400 font-bold">{VOLUNTEER_STATS.dobroId}</span> · Верифицировано: 299.5 ч
              </p>
            </div>

            <a
              href={VOLUNTEER_STATS.downloadPdfPath}
              download="Книжка Ильин.pdf"
              className="self-start sm:self-auto px-3 py-2 rounded-xl bg-orange-600/20 hover:bg-orange-600/30 text-orange-400 text-xs font-bold flex items-center gap-1.5 border border-orange-500/30 active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Скачать PDF</span>
            </a>
          </div>

          {/* Search & Category Filter (Mobile Optimized) */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по мероприятию, роли или организатору..."
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setVolunteerCategory(cat.key)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    volunteerCategory === cat.key
                      ? 'bg-neutral-800 text-orange-400 border border-orange-500/40 shadow-xs'
                      : 'bg-neutral-900/60 text-neutral-400 hover:text-neutral-200 border border-neutral-800/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Volunteer Records Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {filteredVolunteerRecords.map((item) => (
              <div
                key={item.id}
                className="rounded-xl sm:rounded-2xl bg-neutral-900/70 border border-neutral-800/90 p-3.5 sm:p-4 hover:border-neutral-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-neutral-800 text-[10px] sm:text-[11px] font-medium text-neutral-300 truncate max-w-[200px]">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-md border border-amber-800/40 shrink-0">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <div className="text-[11px] sm:text-xs text-neutral-400 space-y-1 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-neutral-500 shrink-0" />
                      <span className="truncate">{item.organizer}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-500" />
                    <span>{item.date}</span>
                  </div>
                  <div className="px-2 py-0.5 rounded-lg bg-orange-600/10 border border-orange-500/30 text-orange-400 font-mono font-bold">
                    {item.hours} ч
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVolunteerRecords.length === 0 && (
            <div className="text-center py-8 bg-neutral-900/40 rounded-xl border border-neutral-800 text-neutral-400 text-xs">
              Мероприятий не найдено. Попробуйте сбросить фильтры.
            </div>
          )}

          {/* Education Courses from Volunteer Book */}
          <div className="rounded-xl sm:rounded-2xl bg-neutral-900/60 border border-neutral-800 p-3.5 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <span>Образовательные курсы и сертификаты DOBRO.RU</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {VOLUNTEER_COURSES.map((course, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-start justify-between gap-2.5">
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white leading-tight">{course.name}</div>
                    <div className="text-[10px] text-neutral-400">Дата выдачи: {course.date}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[9px] uppercase font-mono text-neutral-500 block">Сертификат</span>
                    <span className="text-xs font-mono font-bold text-orange-400">№ {course.certificateNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: Key Achievements & Federal Contests */}
      {(activeTab === 'all' || activeTab === 'achievements') && (
        <section className="space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Ключевые достижения и победы
                </h2>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Федеральные программы, олимпиадное движение и экспертные советы
              </p>
            </div>

            <a
              href={VOLUNTEER_STATS.yandexDiskUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Все дипломы на Яндекс.Диске</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {KEY_ACHIEVEMENTS.map((item) => (
              <div
                key={item.id}
                className="rounded-xl sm:rounded-2xl bg-gradient-to-b from-neutral-900 to-[#141416] border border-neutral-800 p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 sm:p-2 rounded-xl bg-neutral-800/80 border border-neutral-700/60">
                        {getAchievementIcon(item.iconType)}
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-orange-400 tracking-wide uppercase">
                          {item.tag}
                        </span>
                        <div className="text-[10px] text-neutral-500 font-mono">{item.year}</div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-orange-950/40 border border-orange-800/40 text-orange-300 text-[10px] sm:text-[11px] font-bold shrink-0">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-neutral-300 mt-0.5">
                      {item.roleOrResult}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.link && (
                  <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex items-center justify-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <span>{item.linkLabel || 'Подробнее'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: Scientific and IT Project Track */}
      {(activeTab === 'all' || activeTab === 'science') && (
        <section className="space-y-3.5">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Научно-инженерная траектория & IT-разработки
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Sirius Card */}
            <div className="rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 p-4 sm:p-5 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Code className="w-3.5 h-3.5" />
                  <span>ОЦ «Сириус»</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Конструктор ботов «ЧаВошки»</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Разработка платформы для создания чат-ботов без кода в рамках Уральской Проектной Смены ОЦ «Сириус». Проектирование логики, UI и практическая защита перед экспертами.
                </p>
              </div>
              <a
                href={VOLUNTEER_STATS.chavoshkaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 pt-2 border-t border-neutral-800"
              >
                <span>Перейти на chavoshka.ru</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Big Challenges Card */}
            <div className="rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 p-4 sm:p-5 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>«Большие вызовы»</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Призёр регионального этапа</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Научно-технологический проект полного цикла: формулирование гипотезы, постановка экспериментов, работа с источниками и публичная защита перед экспертным жюри.
                </p>
              </div>
              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-800">
                Приоритетные направления научно-технологического развития РФ
              </div>
            </div>

            {/* School Case Championship Card */}
            <div className="rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 p-4 sm:p-5 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Фестиваль «Время Перемен»</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">Платформа для кейс-чемпионата</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Авторский проект: проведение школьного кейс-чемпионата и разработка IT-платформы для регистрации, сдачи решений и онлайн-табло результатов (32 часа работы).
                </p>
              </div>
              <a
                href={VOLUNTEER_STATS.festivalPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2 border-t border-neutral-800"
              >
                <span>Пост о фестивале ВКонтакте</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: In-depth Biography & Leadership Manifesto */}
      {(activeTab === 'all' || activeTab === 'bio') && (
        <section className="space-y-3.5">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              О себе, пути лидера и философии служения
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Leadership Manifesto */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <Flag className="w-3.5 h-3.5" />
                <span>Лидерство и государственное управление</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                «Для меня госуправление — это лидерство, коммуникация и харизма»
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                {BIOGRAPHY_TEXTS.aboutMe}
              </p>
            </div>

            {/* Volunteer Philosophy */}
            <div className="rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-neutral-800 p-4 sm:p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" />
                <span>Философия волонтёрства</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                «Не способ накопить часы, а возможность создавать события»
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                {BIOGRAPHY_TEXTS.volunteerManifesto}
              </p>
            </div>
          </div>

          {/* Full Scientific Track Story */}
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900 to-[#16161a] border border-neutral-800 p-4 sm:p-6 space-y-2.5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Code className="w-3.5 h-3.5" />
              <span>Подробный научно-исследовательский трек</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
              {BIOGRAPHY_TEXTS.scienceTrack}
            </p>

            <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="text-neutral-400 text-[11px] sm:text-xs">
                Все дипломы, сертификаты и подтверждающие документы собраны в одном облачном хранилище.
              </div>
              <a
                href={VOLUNTEER_STATS.yandexDiskUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <span>Открыть папку на Яндекс.Диске</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
