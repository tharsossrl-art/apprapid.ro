'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const GREETING: Message = {
  id: 'greeting',
  role: 'assistant',
  content: 'Bună! Sunt asistentul virtual AppRapid. Cu ce te pot ajuta?',
}

const SESSION_LIMIT = 20

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isStreaming) return

    if (messageCount >= SESSION_LIMIT) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
    }

    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setMessageCount((c) => c + 1)
    setIsStreaming(true)

    const assistantId = `assistant-${Date.now()}`
    const assistantMessage: Message = {
      id: assistantId,
      role: 'assistant',
      content: '',
    }
    setMessages((prev) => [...prev, assistantMessage])

    try {
      // Build API payload — exclude greeting, only real conversation
      const apiMessages = newMessages
        .filter((m) => m.id !== 'greeting')
        .map((m) => ({ role: m.role, content: m.content }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!response.ok) {
        throw new Error('API error')
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error('No reader')

      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        accumulated += chunk

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: accumulated } : m
          )
        )
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  'Scuze, a apărut o eroare. Încearcă din nou sau contactează-ne pe WhatsApp: 0756 870 425.',
              }
            : m
        )
      )
    } finally {
      setIsStreaming(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const limitReached = messageCount >= SESSION_LIMIT

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-token-lg hover:shadow-violet-500/40 hover:scale-105 transition-premium"
            aria-label="Deschide chat-ul"
          >
            {/* Robot head icon */}
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="4" y="8" width="16" height="12" rx="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V5" />
              <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M1 14h3M20 14h3" />
            </svg>

            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-20" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col w-[calc(100vw-3rem)] sm:w-[350px] h-[500px] max-h-[80vh] rounded-2xl border border-slate-700 bg-slate-900 shadow-token-lg overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="4" y="8" width="16" height="12" rx="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">
                    Asistent AppRapid
                  </h3>
                  <p className="text-[10px] text-emerald-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-800 transition-premium text-slate-400 hover:text-white"
                aria-label="Închide chat-ul"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm font-body leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-violet-500/90 text-white rounded-br-md'
                        : 'bg-slate-800 text-slate-200 rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isStreaming &&
                messages[messages.length - 1]?.content === '' && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}

              <div ref={messagesEndRef} />
            </div>

            {/* Session limit message */}
            {limitReached && (
              <div className="px-4 py-2 text-center text-xs text-slate-400 border-t border-slate-700">
                Ai atins limita de mesaje. Contactează-ne pe{' '}
                <a
                  href="https://wa.me/40756870425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp
                </a>{' '}
                pentru mai multe detalii.
              </div>
            )}

            {/* Input area */}
            {!limitReached && (
              <div className="flex items-center gap-2 px-3 py-3 border-t border-slate-700 bg-slate-900/80">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Scrie un mesaj..."
                  disabled={isStreaming}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-premium disabled:opacity-50 font-body"
                />
                <button
                  onClick={sendMessage}
                  disabled={isStreaming || !input.trim()}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white hover:opacity-90 transition-premium disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Trimite mesajul"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
