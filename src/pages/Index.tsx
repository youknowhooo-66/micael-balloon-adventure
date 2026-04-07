import { useState } from "react";
import HotAirBalloon from "@/components/HotAirBalloon";
import Cloud from "@/components/Cloud";
import Sun from "@/components/Sun";
import Birds from "@/components/Birds";
import InvitationCard from "@/components/InvitationCard";
import GiftSuggestions from "@/components/GiftSuggestions";
import AdventurePage from "@/components/AdventurePage"; 
import skyBg from "@/assets/voltamundo.png";

type Tab = "convite" | "sugestoes" | "aventura";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("convite");

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 1. Camada Fixa: Céu e Sol */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${skyBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-sky-deep/10 via-transparent to-grass/40" />

      {/* 2. Camada de Fundo (Longe) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Cloud className="absolute top-[15%] left-[10%] animate-cloud-drift [animation-duration:120s]" size={80} />
        <Cloud className="absolute top-[40%] right-[20%] animate-cloud-drift-reverse [animation-duration:150s]" size={60} />
        <HotAirBalloon color="blue" size={30} className="absolute top-[25%] right-[30%] animate-float-slow [animation-duration:20s] opacity-60" />
        <Birds className="absolute top-[20%] left-[40%] animate-birds-fly [animation-duration:180s] hidden md:block" />
      </div>

      {/* 3. Camada Média (Padrão) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Nuvens Médias - Ajustadas para não cobrir o centro no mobile */}
        <Cloud className="absolute top-[10%] left-[-15%] animate-cloud-drift [animation-duration:80s] opacity-70" size={120} />
        <Cloud className="absolute top-[60%] right-[-10%] animate-cloud-drift-reverse [animation-duration:100s] opacity-60" size={140} />
        
        {/* Balões Médios - Responsivos */}
        <HotAirBalloon 
          color="red" 
          size={60} 
          className="absolute top-[12%] left-[5%] animate-float [animation-duration:12s] md:size-[80px]" 
        />
        <HotAirBalloon 
          color="yellow" 
          size={50} 
          className="absolute top-[45%] right-[5%] animate-float-slow [animation-duration:15s] md:size-[70px]" 
        />
        <HotAirBalloon 
          color="green" 
          size={45} 
          className="absolute bottom-[20%] left-[8%] animate-sway [animation-duration:18s] hidden sm:block md:size-[60px]" 
        />
      </div>

      {/* 4. Camada de Frente (Perto) - Desativada ou reduzida no mobile */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <Cloud 
          className="absolute top-[75%] left-[-20%] animate-cloud-drift [animation-duration:60s] blur-sm-custom opacity-50 md:opacity-80" 
          size={200} 
          // No Desktop ela cresce
          style={{ width: 'clamp(200px, 40vw, 450px)' }}
        />
        <Cloud 
          className="absolute top-[5%] right-[-25%] animate-cloud-drift-reverse [animation-duration:70s] blur-sm-custom opacity-40 md:opacity-70 hidden sm:block" 
          size={250} 
        />
        
        <HotAirBalloon 
          color="blue" 
          size={100} 
          className="absolute bottom-[5%] right-[-2%] animate-float-slow [animation-duration:10s] blur-sm-custom hidden lg:block" 
        />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center pt-6 pb-16 px-4">
        {/* Tab navigation - Ajustada para telas pequenas */}
        <nav className="flex gap-1 md:gap-2 mb-6 md:mb-8 bg-white/40 backdrop-blur-md rounded-full p-1 shadow-xl border border-white/50 w-full max-w-fit overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("convite")}
            className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full font-heading font-bold text-xs md:text-sm transition-all duration-300 ${
              activeTab === "convite"
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "text-foreground hover:bg-white/40"
            }`}
          >
            🎈 Convite
          </button>
          <button
            onClick={() => setActiveTab("sugestoes")}
            className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full font-heading font-bold text-xs md:text-sm transition-all duration-300 ${
              activeTab === "sugestoes"
                ? "bg-secondary text-secondary-foreground shadow-lg scale-105"
                : "text-foreground hover:bg-white/40"
            }`}
          >
            🎁 Sugestões
          </button>
          <button
            onClick={() => setActiveTab("aventura")}
            className={`whitespace-nowrap px-4 md:px-6 py-2 rounded-full font-heading font-bold text-xs md:text-sm transition-all duration-300 ${
              activeTab === "aventura"
                ? "bg-accent text-accent-foreground shadow-lg scale-105"
                : "text-foreground hover:bg-white/40"
            }`}
          >
            📸 Aventura
          </button>
        </nav>

        {/* Tab content */}
        <div className="w-full max-w-[95vw] md:max-w-2xl">
          {activeTab === "convite" ? (
            <InvitationCard />
          ) : activeTab === "sugestoes" ? (
            <GiftSuggestions />
          ) : (
            <AdventurePage />
          )}
        </div>

        {/* Footer */}
        <p className="mt-8 md:mt-12 text-white font-body text-[10px] md:text-sm text-center drop-shadow-md bg-black/10 px-4 py-1 rounded-full backdrop-blur-sm mx-4">
          🎶 Volta ao Mundo num Balão — Hélio Ziskind 🎶
        </p>
      </div>
    </div>
  );
};

export default Index;
