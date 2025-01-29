import "./globals.css";
import Navbar from "@/components/ProgressBar/Navbar/Navbar";

export const metadata = {
  title: "ALGORA — Your AI art portal",
  description: "Your AI art portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
