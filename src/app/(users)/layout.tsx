import type { Metadata } from 'next'
import '../../styles/globals.css'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: 'KR online store ',
  description: 'This is a demo app store created for demonstrating nextjs, sanity, strapi, React and tailwindcss frameworks. This is not a real store. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        {children}
        </body>
    </html>
  )
}
