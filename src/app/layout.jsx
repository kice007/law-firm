import './globals.css'

export const metadata = {
  title: 'Ledru-Rollin Law Firm',
  description: 'Expert legal guidance for your personal and business needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
