import { Metadata } from "next";
import "./globals.css";
import { Instrument_Serif, Manrope } from "next/font/google";

const instrument_Serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"], 
  display: "swap",
  variable: "--font-serif",           
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"], 
  display: "swap",
  variable: "--font-manrope",           
});

export const metadata: Metadata = {
  title: "HEI • Home",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${instrument_Serif.variable} ${manrope.variable} `}>
      <body className="font-manrope tracking-tight">
        {children}
      </body>
    </html>
  );
}
