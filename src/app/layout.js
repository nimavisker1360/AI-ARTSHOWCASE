import "./globals.css";

export const metadata = {
  title: "ALGORA — Your AI art portal",
  description: "Your AI art portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
