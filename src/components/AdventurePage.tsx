import React from "react";
import { PartyPopper, Star, Heart, Camera, Gift, Baby, Music, Cloud, Sun as SunIcon, Map, Compass, Tent, Trees } from "lucide-react";
import Sun from "./Sun";

// Import all 14 images from assets
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpeg";
import img12 from "../assets/12.jpeg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpeg";

const AdventurePage = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "O Grande Começo!",
      date: "Primeiros Dias",
      image: img1,
      description: "Nossa maior aventura começou! O pequeno Micael chegou para encher nossas vidas de luz.",
      icon: <Baby className="w-6 h-6" />,
      color: "bg-balloon-red",
    },
    {
      id: 2,
      title: "Primeiras descobertas",
      date: "1 Mês",
      image: img2,
      description: "Nosso aventureiro completa seu primeiro mês de vida com muita saude.",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 3,
      title: "Olhos Curiosos",
      date: "1 Meses",
      image: img3,
      description: "Cada olhar é uma nova descoberta no vasto mundo ao seu redor.",
      icon: <Star className="w-6 h-6" />,
      color: "bg-balloon-green"
    },
    {
      id: 4,
      title: "Momentos de Serenidade",
      date: "1 Meses",
      image: img4,
      description: "Entre sonecas e carinhos, Micael encontra a paz em cada momento de serenidade.",
      icon: <SunIcon className="w-6 h-6" />,
      color: "bg-balloon-orange"
    },
    {
      id: 5,
      title: "Companheiro de Brincadeiras",
      date: "1 Meses",
      image: img5,
      description: "Ian Henrique, o irmão mais velho, já é o melhor amigo e parceiro de brincadeiras do Micael.",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-balloon-yellow"
    },
    {
      id: 6,
      title: "Explorador Iluminado",
      date: "2 Meses",
      image: img6,
      description: "O nosso aventureiro começa a explorar o mundo com mais confiança e curiosidade completando seu segundo mês.",
      icon: <Compass className="w-6 h-6" />,
      color: "bg-balloon-red"
    },
    {
      id: 7,
      title: "Sons e Ritmos",
      date: "2 Meses",
      image: img7,
      description: "Micael descobrindo os sons e o ritmo da sua própria trilha sonora. Tarde em familia na praia",
      icon: <Music className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 8,
      title: "Conversa de Rapazes",
      date: "2 Meses",
      image: img8,
      description: "Com seu tio Macauly e seu irmão Ian, Micael compartilha momentos de diversão e aprendizado.",
      icon: <Map className="w-6 h-6" />,
      color: "bg-balloon-green"
    },
    {
      id: 9,
      title: "Por do Sol com Mamãe",
      date: "8 Meses",
      image: img9,
      description: "Aproveitando um lindo por do sol com a mamãe, um momento de conexão e beleza na jornada do Micael.",
      icon: <Trees className="w-6 h-6" />,
      color: "bg-balloon-orange"
    },
    {
      id: 10,
      title: "Hora da Bagunça",
      date: "9 Meses",
      image: img10,
      description: "O aventureiro dispensa modos e se entrega a diversão.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-balloon-yellow"
    },
    {
      id: 11,
      title: "Dentinhos Inquietos!",
      date: "10 Meses",
      image: img11,
      description: "Os primeiros dentinhos do Micael estão chegando, trazendo um pouco de inquietação, mas muita fofura para a nossa aventura.",
      icon: <Tent className="w-6 h-6" />,
      color: "bg-balloon-red"
    },
    {
      id: 12,
      title: "Passeios e Aventuras",
      date: "10 Meses",
      image: img12,
      description: "O aventureiro explora o mundo com curiosidade e coragem.",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 13,
      title: "O Sorriso do Aventureiro",
      date: "10 Meses",
      image: img13,
      description: "Definitivamente o sorriso mais radiante já visto.",
      icon: <PartyPopper className="w-6 h-6" />,
      color: "bg-balloon-green"
    }
  ];

  return (
    <div className="relative bg-card/45 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl mx-auto border-4 border-accent/30 pt-16 md:pt-20 mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-10 zoom-in-95 duration-700 ease-out">
      {/* Sun Icon */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 animate-sun-pulse">
        <Sun className="w-24 h-24 md:w-32 md:h-32" />
      </div>

      <div className="flex flex-col items-center text-center pb-8">
        <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6 border-2 border-accent/20 shadow-sm">
          <PartyPopper className="w-6 h-6 text-accent" />
          <span className="text-sm font-heading uppercase tracking-[0.2em] bg-gradient-to-l from-yellow-500 via-blue-500  via-green-500 to-purple-500 bg-clip-text text-transparent font-bold">
            Micael's Adventure
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4 text-foreground">
          Aventuras do Micael!
        </h2>
        <p className="text-lg font-body text-muted-foreground max-w-lg leading-relaxed font-medium">
          Confira os marcos mais especiais desta jornada incrível de um aninho.
        </p>
      </div>
      
      <div className="space-y-16">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="flex flex-col items-center group">
            {/* Photo Frame Container */}
            <div className="relative w-full">
              {/* Decorative Icon Bubble */}
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full ${event.color} text-white flex items-center justify-center shadow-xl border-4 border-white transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                {event.icon}
              </div>

              {/* Main Image Card */}
              <div className="overflow-hidden rounded-3xl border-4 border-muted/30 shadow-xl bg-card/50 transition-all duration-500 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content below image */}
                <div className="p-6 text-center">
                  <div className="flex flex-col items-center gap-2 mb-3">
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground px-3 py-1 bg-primary rounded-full">
                      {event.date}
                    </span>
                    <h4 className="text-2xl font-heading font-extrabold text-foreground mt-2">
                      {event.title}
                    </h4>
                  </div>
                  <p className="text-base font-body text-muted-foreground leading-relaxed max-w-md mx-auto">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Connecting Line (except last) */}
              {index !== timelineEvents.length - 1 && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 h-16 w-1 bg-gradient-to-b from-primary/30 to-transparent border-l-2 border-dashed border-primary/40" />
              )}
            </div>
          </div>
        ))}
        
        <div className="mt-20 text-center pb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 md:gap-6">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary animate-bounce-gentle shadow-primary/20" />
              
              <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-foreground tracking-tight">
                Um ano de descobertas e muito amor!
              </h3>
              
              <Star className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary animate-bounce-gentle [animation-delay:0.3s]" />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                Março 2025 • Março 2026
              </span>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventurePage;
