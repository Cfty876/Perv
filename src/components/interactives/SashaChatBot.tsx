import React, { useState, useRef, useEffect } from 'react';
import { CHAT_TOPICS, ChatTopic } from '../../data/chatBotData';
import { 
  Send, 
  ExternalLink, 
  Copy, 
  Check, 
  User, 
  MessageCircle,
  FileText,
  UserCheck
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'sasha' | 'user';
  text: string;
  topic?: ChatTopic['response'];
  timestamp: string;
}

export const SashaChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'sasha',
      text: 'Привет! Рад приветствовать тебя на моем конкурсном сайте. Здесь ты можешь узнать все подробности о моей деятельности в Совете Первых Екатеринбурга и Свердловской области, IT-платформах «ЧаВошка» и «Время Перемен», 299.5 часах волонтёрства, сменах в «Океане» и «Артеке», а также прочитать 5 фактов о моём пути. Выбирай интересующую тему ниже или введи свой вопрос!',
      timestamp: 'Только что',
    },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSelectTopic = (topic: ChatTopic) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: topic.promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const sashaMsg: Message = {
      id: `sasha-${Date.now() + 1}`,
      sender: 'sasha',
      text: topic.response.text,
      topic: topic.response,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg, sashaMsg]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const query = inputValue.trim().toLowerCase();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    let matchedTopic: ChatTopic | undefined;

    if (query.includes('манифест') || query.includes('факт') || query.includes('дипломат') || query.includes('эссе') || query.includes('вфм')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'wfm2026');
    } else if (query.includes('совет') || query.includes('первы') || query.includes('рддм') || query.includes('председател') || query.includes('команд') || query.includes('област')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'sovet_pervyh');
    } else if (query.includes('it') || query.includes('айти') || query.includes('сириус') || query.includes('чавошк') || query.includes('кванториум') || query.includes('бот') || query.includes('проект')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'it_science');
    } else if (query.includes('добро') || query.includes('волонтер') || query.includes('добровол') || query.includes('час') || query.includes('книжк')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'volunteering');
    } else if (query.includes('артек') || query.includes('океан') || query.includes('таватуй') || query.includes('лагер') || query.includes('лидер')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'camps_leadership');
    } else if (query.includes('контакт') || query.includes('связ') || query.includes('телефон') || query.includes('телеграм') || query.includes('вк') || query.includes('почт')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'contacts_all');
    }

    let sashaMsg: Message;
    if (matchedTopic) {
      sashaMsg = {
        id: `sasha-${Date.now() + 1}`,
        sender: 'sasha',
        text: matchedTopic.response.text,
        topic: matchedTopic.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    } else {
      sashaMsg = {
        id: `sasha-${Date.now() + 1}`,
        sender: 'sasha',
        text: `Спасибо за интерес! Я — представитель Совета Первых Екатеринбурга и Свердловской области, ученик 10 класса Гимназии №120. Мой главный принцип: «Совет Первых — это не один человек, а сильная команда». Выберите одну из ключевых тем ниже, чтобы узнать подробности со всеми подтверждающими ссылками!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    setMessages((prev) => [...prev, userMsg, sashaMsg]);
    setInputValue('');
  };

  const copyEssay = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-[76vh] min-h-[520px] max-h-[720px] bg-[#161619] border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden select-none">
      
      {/* Header Bar */}
      <div className="p-3 sm:p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-md">
              АИ
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#161619]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-white">
                Александр Ильин
              </h3>
              <span className="px-1.5 py-0.5 rounded-md bg-orange-500/15 text-[10px] text-orange-400 font-medium">
                Онлайн
              </span>
            </div>
            <p className="text-[10px] text-neutral-400">
              Совет Первых · Гимназия №120 · Екатеринбург
            </p>
          </div>
        </div>

        <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600/15 border border-orange-500/30 text-orange-400 text-[11px] font-semibold">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Платформа «ЧаВошка»</span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5 bg-[#121214]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-start gap-2 max-w-[92%] sm:max-w-[85%]">
              {msg.sender === 'sasha' && (
                <div className="w-6 h-6 rounded-lg bg-orange-600/30 text-orange-400 flex items-center justify-center shrink-0 text-[10px] font-bold mt-1">
                  АИ
                </div>
              )}

              <div
                className={`p-3 sm:p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-orange-600 text-white rounded-br-none'
                    : 'bg-neutral-850 border border-neutral-800 text-neutral-200 rounded-bl-none'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>

                {/* Highlight Quote if available */}
                {msg.topic?.highlightQuote && (
                  <div className="mt-2.5 p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/30 text-orange-200 text-xs italic">
                    {msg.topic.highlightQuote}
                  </div>
                )}

                {/* Bullets list */}
                {msg.topic?.bullets && (
                  <ul className="mt-2.5 space-y-1.5 text-xs text-neutral-300">
                    {msg.topic.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-orange-400 font-bold shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                {msg.topic?.links && (
                  <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                    {msg.topic.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/80 text-[11px] font-bold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Copy Essay Button for WFM 2026 */}
                {msg.topic?.title.includes('Манифест') && (
                  <div className="mt-2.5 pt-2 border-t border-neutral-800/80 flex justify-end">
                    <button
                      type="button"
                      onClick={() => copyEssay(msg.topic!.text, msg.id)}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">Скопировано!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Скопировать текст</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded-lg bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>

            <span className="text-[10px] text-neutral-500 mt-1 px-8">
              {msg.timestamp}
            </span>
          </div>
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Topics */}
      <div className="p-2 sm:p-2.5 bg-neutral-900 border-t border-neutral-800 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        <span className="text-[10px] text-neutral-500 font-semibold px-1 shrink-0 uppercase tracking-wider">
          Темы:
        </span>
        {CHAT_TOPICS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => handleSelectTopic(topic)}
            className="px-2.5 py-1 rounded-lg bg-neutral-850 hover:bg-neutral-800 border border-neutral-750 text-[11px] font-semibold text-neutral-300 hover:text-white transition-all whitespace-nowrap active:scale-95 shrink-0"
          >
            {topic.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="p-2.5 sm:p-3 bg-[#161619] border-t border-neutral-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Спросите об опыте, проектах или взглядах..."
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="p-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-30 disabled:hover:bg-orange-600 text-white transition-all active:scale-95 shrink-0"
          title="Отправить"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
