import { AppConfig } from '@/config/app.config';
import '@/styles/globals.scss';
import ClientLayout from './ClientLayout';

export const metadata = {
  title: AppConfig.site.title,
  description: AppConfig.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}