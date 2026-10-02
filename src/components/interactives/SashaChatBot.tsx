import React, { useState, useRef, useEffect } from 'react';
import { CHAT_TOPICS, ChatTopic } from '../../data/chatBotData';
import { 
  Send, 
  Sparkles, 
  ExternalLink, 
  Copy, 
  Check, 
  Bot, 
  User, 
  Layers, 
  HeartHandshake, 
  FileText
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  topic?: ChatTopic['response'];
  timestamp: string;
}

export const SashaChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Привет! Я интерактивный ассистент Александра Ильина. Здесь ты можешь узнать всё о Совете Первых города Екатеринбург, наших проектах («ЧаВошка», «Время Перемен»), волонтёрстве, сменах в «Океане» и «Артеке», а также прочитать готовые 5 фактов для отбора на Всемирный Фестиваль Молодёжи 2026! Выбирай тему ниже или напиши свой вопрос.',
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
    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: topic.promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Add bot response
    const botMsg: Message = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: topic.response.text,
      topic: topic.response,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
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

    // Match query to topics
    let matchedTopic: ChatTopic | undefined;

    if (query.includes('вфм') || query.includes('фестивал') || query.includes('5 факт') || query.includes('дипломат') || query.includes('эссе')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'wfm2026');
    } else if (query.includes('совет') || query.includes('первы') || query.includes('рддм') || query.includes('председател') || query.includes('команд')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'sovet_pervyh');
    } else if (query.includes('it') || query.includes('айти') || query.includes('сириус') || query.includes('чавошк') || query.includes('кванториум') || query.includes('бот')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'it_science');
    } else if (query.includes('добро') || query.includes('волонтер') || query.includes('добровол') || query.includes('час')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'volunteering');
    } else if (query.includes('артек') || query.includes('океан') || query.includes('таватуй') || query.includes('лагер') || query.includes('лидер')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'camps_leadership');
    } else if (query.includes('контакт') || query.includes('связ') || query.includes('телефон') || query.includes('телеграм') || query.includes('вк')) {
      matchedTopic = CHAT_TOPICS.find((t) => t.id === 'contacts_all');
    }

    let botMsg: Message;
    if (matchedTopic) {
      botMsg = {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: matchedTopic.response.text,
        topic: matchedTopic.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    } else {
      botMsg = {
        id: `bot-${Date.now() + 1}`,
        sender: 'bot',
        text: `Отличный вопрос! Александр Ильин — Председатель Совета Первых Екатеринбурга, ученик 10 класса Гимназии №120. Он убежден, что «Совет Первых — это не один человек, а сильная команда». Выберите одну из основных тем ниже, чтобы получить подробный ответ со всеми ссылками!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue('');
  };

  const copyEssay = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-[78vh] min-h-[540px] max-h-[750px] bg-[#18181b] border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden select-none">
      
      {/* Bot Header Card */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-r from-neutral-900 via-neutral-900 to-orange-950/40 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-sm flex items-center justify-center shadow-md">
              АИ
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#18181b]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-white">
                Александр Ильин · Чат-бот
              </h3>
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            </div>
            <p className="text-[10px] text-neutral-400">
              Председатель Совета Первых Екатеринбурга · Гимназия №120
            </p>
          </div>
        </div>

        <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600/15 border border-orange-500/30 text-orange-400 text-[11px] font-semibold">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Командный игрок</span>
        </div>
      </div>

      {/* Messages Stream */}
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3.5 sm:space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
              msg.sender === 'user' 
                ? 'bg-neutral-800 text-neutral-300' 
                : 'bg-orange-600 text-white shadow-sm'
            }`}>
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div className={`max-w-[88%] sm:max-w-[80%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
              msg.sender === 'user'
                ? 'bg-orange-600 text-white rounded-tr-xs shadow-md'
                : 'bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-tl-xs shadow-md'
            }`}>
              {/* Highlight Quote if available */}
              {msg.topic?.highlightQuote && (
                <div className="mb-3 p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/40 text-orange-200 text-xs italic font-medium">
                  {msg.topic.highlightQuote}
                </div>
              )}

              {/* Title if present */}
              {msg.topic?.title && (
                <div className="font-bold text-white mb-2 text-xs sm:text-sm flex items-center justify-between">
                  <span>{msg.topic.title}</span>
                  {msg.id.includes('wfm') || msg.text.includes('ВФМ') || msg.topic.title.includes('ВФМ') ? (
                    <button
                      type="button"
                      onClick={() => copyEssay(msg.text, msg.id)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-orange-400 text-[10px] font-semibold transition-colors ml-2"
                      title="Скопировать эссе для заявки"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Скопировано!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Копировать эссе</span>
                        </>
                      )}
                    </button>
                  ) : null}
                </div>
              )}

              {/* Message content */}
              <div className="whitespace-pre-line text-neutral-200">
                {msg.text}
              </div>

              {/* Bullet list if available */}
              {msg.topic?.bullets && (
                <ul className="mt-2.5 space-y-1.5 pl-3 list-disc text-neutral-300 text-xs">
                  {msg.topic.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}

              {/* Interactive Links in Bot Message */}
              {msg.topic?.links && (
                <div className="mt-3 pt-2.5 border-t border-neutral-800/80 flex flex-wrap gap-2">
                  {msg.topic.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-orange-400 hover:text-orange-300 text-xs font-semibold border border-neutral-700/60 transition-transform active:scale-95"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  ))}
                </div>
              )}

              {/* Timestamp */}
              <div className={`text-[10px] mt-2 text-right ${
                msg.sender === 'user' ? 'text-white/70' : 'text-neutral-400'
              }`}>
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick FAQ Chips Carousel */}
      <div className="px-3 py-2 bg-neutral-900/90 border-t border-neutral-800/80 overflow-x-auto no-scrollbar flex items-center gap-1.5">
        <span className="text-[10px] text-neutral-400 font-bold shrink-0 flex items-center gap-1">
          <Layers className="w-3 h-3 text-orange-400" />
          Темы:
        </span>
        {CHAT_TOPICS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => handleSelectTopic(topic)}
            className="px-2.5 py-1.5 rounded-xl bg-neutral-800/90 hover:bg-neutral-700 border border-neutral-700/60 text-neutral-200 hover:text-white text-xs whitespace-nowrap transition-all active:scale-95 shrink-0 flex items-center gap-1"
          >
            <span>{topic.label}</span>
          </button>
        ))}
      </div>

      {/* Input Message Bar */}
      <form
        onSubmit={handleSendMessage}
        className="p-2.5 sm:p-3 bg-neutral-950 border-t border-neutral-800 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Спроси про Совет Первых, ВФМ 2026, IT-проекты..."
          className="flex-1 h-11 px-4 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-orange-500 focus:outline-hidden text-xs sm:text-sm text-white placeholder-neutral-500 transition-colors"
        />

        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="h-11 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-40 disabled:hover:bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-95 shrink-0 shadow-md shadow-orange-950/40"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Отправить</span>
        </button>
      </form>

    </div>
  );
};
