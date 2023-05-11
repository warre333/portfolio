import './globals.css'
import { Space_Mono } from 'next/font/google'
import Header from '../components/Header'

import { age, studySubject, studyYear, studyingAt } from '@/config/personal.config'

const spaceMono = Space_Mono({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Projects - Warre Bossaert',
  description: `Warre Bossaert is a ${age} year old student, studying ${studySubject} @ ${studyingAt} (${studyYear} year). This website was made to showcase previous work.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>  
        <Header />
        {children}
        <div className="h-screen"></div>
      </body>
    </html>
  )
}
