import Header from "@/components/Header";
import ScrollOverHero from "@/components/ScrollOverHero";
import Founders from "@/components/Founders";
import Audience from "@/components/Audience";
import Portfolio from "@/components/Portfolio";
import ScrollOverFooter from "@/components/ScrollOverFooter";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Header />
      <ScrollOverHero>
        <Founders />
        <Audience />
        <Portfolio />
      </ScrollOverHero>
      <ScrollOverFooter />
      <GetInTouch />
    </main>
  );
}
