import { Suspense } from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Navbar from "@/components/Navbar/Navbar";

import "./globals.css";

export const metadata = {
  title: "Visker — Your AI art portal",
  description: "Nima Baghery  by Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <ProgressBar />
        </Suspense>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
