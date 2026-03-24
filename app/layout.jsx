import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StairEff from "@/components/StairEff";
import PageTransition from "../components/PageTransition";

import Header from "../components/Header.jsx";


const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"]
});

export const metadata = {
  title: "Suryakant | Portfolio",
  description: "Portfolio app using github",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairEff/>
        <PageTransition>
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
