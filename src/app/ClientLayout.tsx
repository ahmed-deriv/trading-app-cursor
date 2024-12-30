"use client";

import { ThemeProvider } from '@deriv-com/quill-ui';

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme="light" persistent>
      {children}
    </ThemeProvider>
  );
} 