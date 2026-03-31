import Hero from "@/components/sections/Hero";
import Partnerships from "@/components/sections/Partnerships";
import StatsSection from "@/components/sections/StatsSection";
import SuccessStories from "@/components/sections/SuccessStories";
import ThoughtLeadership from "@/components/sections/ThoughtLeadership";
import WhatWeDo from "@/components/sections/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsSection />
      <SuccessStories />
      <ThoughtLeadership />
      <WhatWeDo />
      <Partnerships />
    </div>
  );
}