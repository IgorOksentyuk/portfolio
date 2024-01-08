import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'I.Oksentiuk Portfolio',
  description: 'This is my portfolio which describes my skills and experience as a Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
