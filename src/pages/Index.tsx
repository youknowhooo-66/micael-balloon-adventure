import { useState } from "react";
import HotAirBalloon from "@/components/HotAirBalloon";
import Cloud from "@/components/Cloud";
import Sun from "@/components/Sun";
import InvitationCard from "@/components/InvitationCard";
import GiftSuggestions from "@/components/GiftSuggestions";
import AdventurePage from "@/components/AdventurePage"; // Import the new component
import skyBg from "@/assets/voltamundo.png";


type Tab = "convite" | "sugestoes" | "aventura"; // Add new tab type

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("convite");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Sky background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${skyBg})` }}
      />
      {/* Gradient overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-sky-deep/20 via-transparent to-grass/60" />

      {/* Sun */}
      <Sun className="fixed top-4 right-8 md:top-8 md:right-16 animate-sun-pulse z-10" />

      {/* Floating clouds */}
      <Cloud className="fixed top-16 animate-cloud-drift z-0" size={180} />
      <Cloud className="fixed top-40 animate-cloud-drift-reverse z-0" size={120} />
      <Cloud className="fixed top-64 animate-cloud-drift z-0 [animation-delay:10s]" size={140} />

      {/* Floating balloons */}
      <HotAirBalloon
        color="red"
        size={90}
        className="fixed top-20 left-[5%] animate-float z-10 hidden md:block"
      />
      <HotAirBalloon
        color="yellow"
        size={70}
        className="fixed top-32 right-[8%] animate-float-slow z-10 hidden md:block [animation-delay:1s]"
      />
      <HotAirBalloon
        color="green"
        size={60}
        className="fixed top-48 left-[15%] animate-float z-10 hidden lg:block [animation-delay:2s]"
      />
      <HotAirBalloon
        color="blue"
        size={80}
        className="fixed bottom-40 right-[12%] animate-float-slow z-10 hidden md:block [animation-delay:0.5s]"
      />
      <HotAirBalloon
        color="orange"
        size={55}
        className="fixed bottom-60 left-[8%] animate-float z-10 hidden lg:block [animation-delay:3s]"
      />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center pt-8 pb-16 px-4">
        {/* Tab navigation */}
        <nav className="flex gap-2 mb-8 bg-card/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg">
          <button
            onClick={() => setActiveTab("convite")}
            className={`px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
              activeTab === "convite"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-foreground hover:bg-muted/60"
            }`}
          >
            🎈 Convite
          </button>
          <button
            onClick={() => setActiveTab("sugestoes")}
            className={`px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
              activeTab === "sugestoes"
                ? "bg-secondary text-secondary-foreground shadow-md"
                : "text-foreground hover:bg-muted/60"
            }`}
          >
            🎁 Sugestões
          </button>
          <button // New button for Adventure tab
            onClick={() => setActiveTab("aventura")}
            className={`px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 ${
              activeTab === "aventura"
                ? "bg-accent text-accent-foreground shadow-md" // Use accent colors for this tab
                : "text-foreground hover:bg-muted/60"
            }`}
          >
            📸 Aventura
          </button>
        </nav>

        {/* Tab content */}
        <div className="w-full max-w-2xl animate-in fade-in duration-500">
          {activeTab === "convite" ? (
            <InvitationCard />
          ) : activeTab === "sugestoes" ? (
            <GiftSuggestions />
          ) : (
            <AdventurePage /> // Render AdventurePage component
          )}
        </div>

        {/* Footer */}
        <p className="mt-12 text-card/80 font-body text-sm text-center">
          🎶 Volta ao Mundo num Balão — Hélio Ziskind 🎶
        </p>
      </div>
    </div>
  );
};

export default Index;
