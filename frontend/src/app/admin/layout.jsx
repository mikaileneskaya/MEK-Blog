export const metadata = {
  title: 'Admin Page',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
        </body>
    </html>
  )
}