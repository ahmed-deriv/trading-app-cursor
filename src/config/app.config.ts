export const AppConfig = {
  site: {
    title: 'Deriv - Option Trading',
    description: 'Option trading platform to trade options on the stock market',
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: 5000,
    },
  },
} as const
