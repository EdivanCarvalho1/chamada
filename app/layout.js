import "./globals.css";

export const metadata = {
  title: "Chamada Ônibus",
  description: "Aplicativo para chamada de ônibus."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
