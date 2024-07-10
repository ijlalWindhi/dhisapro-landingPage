import type { Metadata } from "next";
import { METADATA } from "@/constants/metadata";
import Hero from "@/components/ui/landing-page/Hero";

export const metadata: Metadata = {
  title: "Home | " + METADATA.creator,
  description: METADATA.description,
  alternates: {
    canonical: METADATA.url,
  },
};

export default function Home() {
  return (
    <main className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden min-h-[200vh]">
      <Hero />
    </main>
  );
}
