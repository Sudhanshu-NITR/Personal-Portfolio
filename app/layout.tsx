'use client';
import './globals.css'
import { Outfit } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute='class' defaultTheme='light'>
        <body className={`${outfit.variable} font-sans bg-[#f4f4f5] dark:bg-[#030014] text-slate-900 dark:text-slate-50 overflow-x-hidden selection:bg-violet-300 selection:text-violet-900 dark:selection:bg-violet-900 dark:selection:text-violet-200 transition-colors duration-300 relative`}>
          {/* Ambient Background */}
          <div className="fixed inset-0 -z-10 h-full w-full">
            {/* Soft Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-400 dark:bg-violet-600 opacity-20 dark:opacity-20 blur-[100px]"></div>
            <div className="absolute left-1/3 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-400 dark:bg-indigo-600 opacity-20 dark:opacity-20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute right-1/4 top-1/3 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400 dark:bg-cyan-600 opacity-20 dark:opacity-20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
            <div className="absolute bottom-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-fuchsia-400 dark:bg-fuchsia-600 opacity-20 dark:opacity-20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
          </div>

          <div className="relative z-10">
            {children}
          </div>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  )
}
