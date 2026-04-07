import React from "react";
import { PartyPopper, Calendar, Star, Heart, Camera, Gift, Baby, Music, Cloud, Sun, Map, Compass, Tent, Trees } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
      color: "bg-balloon-red"
    },
    {
      id: 2,
      title: "Doce Soninho",
      date: "1 Mês",
      image: img2,
      description: "Momentos de paz e tranquilidade enquanto o nosso aventureiro recupera as energias.",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 3,
      title: "Primeiras Descobertas",
      date: "2 Meses",
      image: img3,
      description: "Cada olhar é uma nova descoberta no vasto mundo ao seu redor.",
      icon: <Star className="w-6 h-6" />,
      color: "bg-balloon-green"
    },
    {
      id: 4,
      title: "Sorrisos Contagiantes",
      date: "3 Meses",
      image: img4,
      description: "O mundo fica mais colorido com esse sorriso que ilumina tudo.",
      icon: <Sun className="w-6 h-6" />,
      color: "bg-balloon-orange"
    },
    {
      id: 5,
      title: "Brincando Muito",
      date: "4 Meses",
      image: img5,
      description: "A hora da diversão é o momento preferido do dia!",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-balloon-yellow"
    },
    {
      id: 6,
      title: "Explorador Curioso",
      date: "5 Meses",
      image: img6,
      description: "Nenhum brinquedo escapa da curiosidade do nosso pequeno capitão.",
      icon: <Compass className="w-6 h-6" />,
      color: "bg-balloon-red"
    },
    {
      id: 7,
      title: "Sons e Ritmos",
      date: "6 Meses",
      image: img7,
      description: "Micael descobrindo os sons e o ritmo da sua própria trilha sonora.",
      icon: <Music className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 8,
      title: "Sentando e Observando",
      date: "7 Meses",
      image: img8,
      description: "Uma nova perspectiva do mundo agora que já consegue sentar sozinho.",
      icon: <Map className="w-6 h-6" />,
      color: "bg-balloon-green"
    },
    {
      id: 9,
      title: "Pequenos Passos",
      date: "8 Meses",
      image: img9,
      description: "A vontade de explorar está cada vez maior!",
      icon: <Trees className="w-6 h-6" />,
      color: "bg-balloon-orange"
    },
    {
      id: 10,
      title: "Hora da Papinha",
      date: "9 Meses",
      image: img10,
      description: "Sabores novos e muitas caretas engraçadas nessa jornada gastronômica.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-balloon-yellow"
    },
    {
      id: 11,
      title: "Muita Bagunça!",
      date: "10 Meses",
      image: img11,
      description: "Onde tem Micael, tem alegria e um pouquinho de bagunça gostosa.",
      icon: <Tent className="w-6 h-6" />,
      color: "bg-balloon-red"
    },
    {
      id: 12,
      title: "Quase lá!",
      date: "11 Meses",
      image: img12,
      description: "Preparando as malas para o grande marco de um aninho.",
      icon: <Camera className="w-6 h-6" />,
      color: "bg-balloon-blue"
    },
    {
      id: 13,
      title: "A Grande Festa",
      date: "12 Meses",
      image: img13,
      description: "Um ano inteiro de amor, aprendizado e muitas voltas ao redor do sol.",
      icon: <PartyPopper className="w-6 h-6" />,
      color: "bg-balloon-green"
    }
  ];

  return (
    <div className="container py-12 px-4 max-w-3xl mx-auto">
      <Card className="bg-card/40 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-4 md:p-10 border-4 border-white/50">
        <CardHeader className="flex flex-col items-center text-center pb-8">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-6 py-2 mb-6 border-2 border-primary shadow-md">
            <PartyPopper className="w-6 h-6 text-primary-foreground fill-primary" />
            <span className="text-sm font-heading uppercase tracking-[0.2em] bg-gradient-to-l from-yellow-500 via-blue-500  via-green-500 to-purple-500 bg-clip-text text-transparent font-bold">
              Micael's Adventure
            </span>
          </div>
          <CardTitle className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 text-foreground">
            Aventuras do Micael!
          </CardTitle>
          <CardDescription className="text-xl font-body text-muted-foreground max-w-lg leading-relaxed font-medium">
            Confira os marcos mais especiais desta jornada incrível de um aninho.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-16">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex flex-col items-center group">
              {/* Photo Frame Container */}
              <div className="relative w-full max-w-2xl">
                {/* Decorative Icon Bubble */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full ${event.color} text-white flex items-center justify-center shadow-xl border-4 border-white transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  {event.icon}
                </div>

                {/* Main Image Card */}
                <div className="overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl bg-white transition-all duration-500 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content below image */}
                  <div className="p-8 text-center bg-white/80">
                    <div className="flex flex-col items-center gap-2 mb-3">
                      <span className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground px-3 py-1 bg-primary rounded-full">
                        {event.date}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mt-2">
                        {event.title}
                      </h4>
                    </div>
                    <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-md mx-auto">
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
          
          <div className="mt-20 text-center">
            <div className="inline-block p-6 rounded-[2rem] bg-white/50 border-4 border-dashed border-primary/40 shadow-inner">
              <p className="text-lg text-foreground font-heading font-bold italic flex items-center gap-3">
                <Star className="w-6 h-6 text-primary fill-primary" />
                Um ano de descobertas e muito amor!
                <Star className="w-6 h-6 text-primary fill-primary" />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdventurePage;
