import { Metadata } from "next";
import Navbar from "@/components/reusable/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HEI • Pricing",
  description: "",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
