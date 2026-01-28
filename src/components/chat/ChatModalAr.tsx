'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { trackChatMessageSent } from '@/lib/posthog'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function formatMessage(content: string) {
  const linkRegex = /Learn more: (\/[^\s]+)/g
  const parts = content.split(linkRegex)
  
  if (parts.length === 1) {
    return <span>{content}</span>
  }
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('/')) {
          const arPath = part.startsWith('/ar/') ? part : `/ar${part}`
          return (
            <Link 
              key={index} 
              href={arPath} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline font-medium"
            >
              اقرأ الدليل الكامل
            </Link>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatModalAr({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'مرحباً! أنا مساعد بروبرتي ويكي. اسألني أي شيء عن العقارات في دبي - أنواع العقارات، المجتمعات، عملية الشراء، أو نصائح لأصحاب المنازل!'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    trackChatMessageSent(userMessage.length)
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const allMessages = [...messages, { role: 'user' as const, content: userMessage }]
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: allMessages.slice(1).map(m => ({ role: m.role, content: m.content }))
        }),
      })

      const data = await response.json()
      
      if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.' }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'عذراً، تعذر الاتصال. يرجى المحاولة مرة أخرى.' }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] max-h-[80vh] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-l from-primary-500 to-primary-600">
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center space-x-3 space-x-reverse">
            <div>
              <h3 className="text-white font-semibold text-right">مساعد بروبرتي ويكي</h3>
              <p className="text-white/80 text-xs text-right">اسأل عن العقارات في دبي</p>
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-primary-500 text-white rounded-bl-md'
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-br-md'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed text-right">
                  {message.role === 'assistant' ? formatMessage(message.content) : message.content}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end">
              <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-br-md shadow-sm border border-gray-100">
                <div className="flex space-x-1.5 space-x-reverse">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-11 h-11 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="اسأل عن العقارات والمجتمعات..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-right"
              disabled={isLoading}
              dir="rtl"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
