import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export const metadata = {
  title: "ALGORA — Your AI art portal",
  description: "Your AI art portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
