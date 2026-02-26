import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'RottaCeler | Agenciamento Logístico',
  description:
    'Agenciamento de cargas com agilidade, transparência e atendimento direto.',
  openGraph: {
    title: 'RottaCeler | Agenciamento Logístico',
    description:
      'Conectando transportadoras e motoristas com rapidez.',
    url: 'https://rottaceler.com.br',
    siteName: 'RottaCeler',
    images: [
      {
        url: '/rottaceler.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
