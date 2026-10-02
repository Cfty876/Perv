import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Send, 
  ExternalLink, 
  Copy, 
  Check, 
  UserPlus, 
  Sparkles,
  Share2
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const contacts = {
    name: 'Александр Ильин',
    role: 'Ведущий мероприятий · Организатор · Спикер',
    school: 'МАОУ Гимназия № 120, г. Екатеринбург',
    phone: '+7 919 399 08 66',
    phoneRaw: '+79193990866',
    telegram: '@sanya2519',
    telegramUrl: 'https://t.me/sanya2519',
    vkUrl: 'https://vk.ru/id752370287',
    vkHandle: 'id752370287',
    maxUrl: 'https://max.ru/u/f9LHodD0cOLeBR2MVhJvm82XyW-LcsKmAnj5rEQd117DO9g_DrhUb6NWKz8',
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const downloadVCard = () => {
    const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:Александр Ильин
N:Ильин;Александр;;;
ORG:МАОУ Гимназия № 120
TITLE:Ведущий мероприятий, организатор, спикер
TEL;TYPE=CELL;TYPE=PREF:+79193990866
NOTE:Telegram: @sanya2519 | VK: https://vk.ru/id752370287 | МАКС: https://max.ru/u/f9LHodD0cOLeBR2MVhJvm82XyW-LcsKmAnj5rEQd117DO9g_DrhUb6NWKz8
URL;TYPE=Telegram:https://t.me/sanya2519
URL;TYPE=VK:https://vk.ru/id752370287
URL;TYPE=MAX:https://max.ru/u/f9LHodD0cOLeBR2MVhJvm82XyW-LcsKmAnj5rEQd117DO9g_DrhUb6NWKz8
END:VCARD`;

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Александр_Ильин.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in select-none">
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-md bg-[#161618] border border-neutral-700/80 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Ribbon / Banner */}
        <div className="relative px-5 pt-6 pb-5 bg-gradient-to-br from-orange-600 via-orange-700 to-amber-700 text-white overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/90 hover:text-white transition-colors"
            title="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative flex items-center gap-3.5">
            {/* Avatar representation with graduation / mic icon */}
            <div className="w-14 h-14 rounded-2xl bg-white text-orange-600 font-black text-xl flex items-center justify-center shadow-lg border-2 border-orange-200 shrink-0">
              АИ
            </div>

            <div className="overflow-hidden pr-6">
              <div className="flex items-center gap-1.5">
                <h3 className="text-lg font-black tracking-tight text-white truncate">
                  {contacts.name}
                </h3>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              </div>
              <p className="text-xs text-orange-100 font-medium truncate mt-0.5">
                {contacts.role}
              </p>
              <p className="text-[11px] text-orange-200/90 truncate">
                {contacts.school}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Methods List */}
        <div className="p-4 sm:p-5 space-y-2.5 overflow-y-auto">
          
          {/* Telegram */}
          <div className="group flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-[#229ED9]/50 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#229ED9]/15 border border-[#229ED9]/30 flex items-center justify-center shrink-0">
                <Send className="w-5 h-5 text-[#229ED9]" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-neutral-400 font-medium">Telegram</div>
                <div className="text-sm font-bold text-white tracking-wide truncate">
                  {contacts.telegram}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                type="button"
                onClick={() => copyToClipboard(contacts.telegram, 'tg')}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Скопировать юзернейм"
              >
                {copiedKey === 'tg' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#229ED9] hover:bg-[#1f8fc4] text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1"
              >
                <span>Написать</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Телефон */}
          <div className="group flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-emerald-500/50 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-neutral-400 font-medium">Телефон для связи</div>
                <div className="text-sm font-bold text-white tracking-wide truncate">
                  {contacts.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                type="button"
                onClick={() => copyToClipboard(contacts.phone, 'phone')}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Скопировать номер"
              >
                {copiedKey === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={`tel:${contacts.phoneRaw}`}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1"
              >
                <span>Позвонить</span>
              </a>
            </div>
          </div>

          {/* ВКонтакте */}
          <div className="group flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-[#0077FF]/50 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#0077FF]/15 border border-[#0077FF]/30 flex items-center justify-center shrink-0 font-black text-xs text-[#0077FF]">
                VK
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-neutral-400 font-medium">ВКонтакте</div>
                <div className="text-sm font-bold text-white tracking-wide truncate">
                  vk.ru/id752370287
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                type="button"
                onClick={() => copyToClipboard(contacts.vkUrl, 'vk')}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Скопировать ссылку"
              >
                {copiedKey === 'vk' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={contacts.vkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0077FF] hover:bg-[#006be5] text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1"
              >
                <span>Профиль</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* МАКС */}
          <div className="group flex items-center justify-between p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0 font-black text-xs text-purple-400">
                MAX
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-neutral-400 font-medium">Платформа МАКС</div>
                <div className="text-xs font-mono font-semibold text-neutral-300 truncate">
                  max.ru/u/f9LHodD0...
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0 ml-2">
              <button
                type="button"
                onClick={() => copyToClipboard(contacts.maxUrl, 'max')}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                title="Скопировать ссылку"
              >
                {copiedKey === 'max' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <a
                href={contacts.maxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-transform active:scale-95 flex items-center gap-1"
              >
                <span>Открыть</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Actions: Save to Contacts (.vcf) */}
        <div className="p-4 sm:p-5 pt-2 bg-neutral-950/60 border-t border-neutral-800/80 flex flex-col gap-2">
          <button
            type="button"
            onClick={downloadVCard}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-950/40 active:scale-[0.98] transition-all"
          >
            <UserPlus className="w-4 h-4" />
            <span>Сохранить в контакты телефона (.vcf)</span>
          </button>

          <p className="text-[11px] text-center text-neutral-400">
            Один клик — и карточка Александра добавится в вашу телефонную книгу
          </p>
        </div>

      </div>
    </div>
  );
};
