import { Metadata } from "next";
import Navbar from "@/components/reusable/Navbar";

export const metadata: Metadata = {
  title: "HEI • Programs",
  description: "",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  );
}
