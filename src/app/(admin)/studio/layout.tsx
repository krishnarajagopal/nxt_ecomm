export const metadata = {
title: 'KR studio',
  description: 'Studio Page for KR online store.',
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
