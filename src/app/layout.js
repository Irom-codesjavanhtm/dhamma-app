// app/layout.js
import '../styles/tailwind.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-brightYellow text-textGray">
        {children}
      </body>
    </html>
  );
}
