import { CalendarDays, Clock, MapPin, PartyPopper } from "lucide-react";
import perfilPic from "../assets/perfil.jpg"; // Import the new image

const InvitationCard = () => (
  <div className="bg-card/45 backdrop-blur-sm  rounded-3xl shadow-2xl p-8 md:p-12 max-w-xl mx-auto text-center border-4 border-sun/30">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-4">
      <PartyPopper className="w-5 h-5 text-primary" />
      <span className=" font-semibold bg-gradient-to-l from-yellow-500 via-blue-500  via-green-500 to-purple-500 bg-clip-text text-transparent font-body uppercase tracking-wider">
        Volta ao Mundo num Balão!
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-2 bg-gradient-to-r from-yellow-500 via-blue-500  to-green-500 bg-clip-text text-transparent">
      Micael Aton
    </h1>
    {/* <p className="text-lg font-body text-muted-foreground mb-1">
      está fazendo
    </p> */}
    <div className="text-7xl md:text-8xl font-sans font-bold text-primary my-2">
      1
    </div>
    <p className="text-xl text-center ps-6 font-heading font-bold  mb-6 bg-gradient-to-bl from-yellow-500 via-blue-500  to-purple-500 bg-clip-text text-transparent">
      Aninho! 🎈
    </p>

    <p className="text-base font-body text-muted-foreground mb-8 leading-relaxed">
      🌍 Fui passear de balão... bateu um vento forte e vim parar na festa do Micael! Venha celebrar com a gente essa volta ao mundo de alegria! 🎉
    </p>
    
    {/* Inserted rectangular image - corrected placement, no rounded borders, larger size */}
    <img
      src={perfilPic}
      alt="Micael Aton Profile"
      className="w-full h-auto mx-auto object-cover shadow-md mb-6" // Rectangular, centered, larger, no rounded borders, height adjusted automatically
    />

    <p className="text-base font-body text-muted-foreground mb-8 leading-relaxed">
      ☀️ Nossa família convida você para celebrar 365 voltas ao redor do sol do nosso alegre, pequeno aventureiro, Micael Aton! 🌎✈️❤️
    </p>

    {/* Details */}
    <div className="space-y-4 text-left bg-muted/50 rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
          <CalendarDays className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Data</p>
          <p className="font-semibold font-body text-foreground">Sábado, 9 de Maio de 2026</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center">
          <Clock className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Horário</p>
          <p className="font-semibold font-body text-foreground">16:30h</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Local</p>
          <p className="font-semibold font-body text-foreground">Condominío Ílha do Sol</p>
          <p className="text-sm text-muted-foreground font-body">Estrada Anarolina Silveira Santos 201 - Salão de festas B</p>
        </div>
      </div>
    </div>

    <p className="mt-6 text-sm text-muted-foreground font-body italic">
      Confirme sua presença! 🌎✈️❤️
    </p>
  </div>
);

export default InvitationCard;
