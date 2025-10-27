import { Metadata } from "next";
import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HEI • Programs",
  description: "",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
