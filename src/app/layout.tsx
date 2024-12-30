import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { AppConfig } from '@/config/app.config'

export const metadata: Metadata = {
  title: AppConfig.site.title,
  description: AppConfig.site.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
