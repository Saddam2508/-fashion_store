
import Banner from "@/components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Fashion Store frontend",
};

export default function Home() {
  return (
    <div className="mt-17">
     <Banner/>
    </div>
  );
}