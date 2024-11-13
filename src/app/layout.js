// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Input Context Example</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
