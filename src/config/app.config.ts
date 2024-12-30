export const AppConfig = {
  site: {
    title: 'Deriv - Option Trading',
    description: 'Option trading platform to trade options on the stock market',
    // baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001',
  },
  features: {
    // analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  },
  webSocketUrl: {
    APP_ID: '35074',
    WS_URL: 'wss://ws.derivws.com/websockets/v3',
    OAUTH_URL: 'https://oauth.deriv.com',
  },
} as const
