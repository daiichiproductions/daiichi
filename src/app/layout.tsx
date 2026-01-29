import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daiichi | The Future of Visual Storytelling',
  description: 'A high-end, ultra-modern website for Daiichi, a premium video production and photography firm, featuring 3D visuals, cinematic motion, and AI-powered vision generation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
