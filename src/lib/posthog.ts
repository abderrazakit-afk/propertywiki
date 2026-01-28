'use client'

import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init('phc_JSIlcQAjFk0y2Z8qZhjdbQANxKaPtXLuVSXPttJ0X5n', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
    })
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties)
  }
}

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search_performed', {
    search_query: query,
    results_count: resultsCount,
  })
}

export const trackSearchResultClick = (query: string, resultTitle: string, resultUrl: string) => {
  trackEvent('search_result_clicked', {
    search_query: query,
    result_title: resultTitle,
    result_url: resultUrl,
  })
}

export const trackChatOpened = () => {
  trackEvent('chat_opened')
}

export const trackChatClosed = () => {
  trackEvent('chat_closed')
}

export const trackChatMessageSent = (messageLength: number) => {
  trackEvent('chat_message_sent', {
    message_length: messageLength,
  })
}

export const trackFindHomeStarted = () => {
  trackEvent('find_home_started')
}

export const trackFindHomeDescriptionSubmitted = (descriptionLength: number) => {
  trackEvent('find_home_description_submitted', {
    description_length: descriptionLength,
  })
}

export const trackFindHomePhoneVerified = () => {
  trackEvent('find_home_phone_verified')
}

export const trackFindHomeResultsViewed = () => {
  trackEvent('find_home_results_viewed')
}

export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', {
    from_page: from,
    to_page: to,
  })
}

export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_switched', {
    from_language: fromLang,
    to_language: toLang,
  })
}

export const trackArticleRead = (articleTitle: string, articleUrl: string, category: string) => {
  trackEvent('article_viewed', {
    article_title: articleTitle,
    article_url: articleUrl,
    category: category,
  })
}

export const trackExternalLinkClick = (url: string, linkText: string) => {
  trackEvent('external_link_clicked', {
    url: url,
    link_text: linkText,
  })
}

export const trackContactFormSubmitted = () => {
  trackEvent('contact_form_submitted')
}

export { posthog }
