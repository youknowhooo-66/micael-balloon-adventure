import { ExternalLink, Gift } from "lucide-react";

interface GiftItem {
  name: string;
  description: string;
  url: string;
  image: string;
}

const gifts: GiftItem[] = [
  {
    name: "Blocos de Montar",
    description: "Blocos coloridos grandes para bebê",
    url: "#",
    image: "🧱",
  },
  {
    name: "Livros Infantis",
    description: "Kit de livrinhos sensoriais",
    url: "#",
    image: "📚",
  },
  {
    name: "Brinquedo Musical",
    description: "Teclado musical para bebê",
    url: "#",
    image: "🎵",
  },
  {
    name: "Pelúcia",
    description: "Bichinho de pelúcia macio",
    url: "#",
    image: "🧸",
  },
  {
    name: "Carrinho de Empurrar",
    description: "Andador de empurrar colorido",
    url: "#",
    image: "🚗",
  },
  {
    name: "Kit de Banho",
    description: "Brinquedos para hora do banho",
    url: "#",
    image: "🛁",
  },
];

const GiftSuggestions = () => (
  <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto border-4 border-secondary/30">
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-5 py-2 mb-4">
        <Gift className="w-5 h-5 text-secondary" />
        <span className="text-sm font-semibold text-secondary font-body uppercase tracking-wider">
          Sugestões de Presentes
        </span>
      </div>
      <h2 className="text-3xl font-heading font-bold text-foreground">
        Ideias de Presentes 🎁
      </h2>
      <p className="text-muted-foreground font-body mt-2">
        Aqui estão algumas sugestões que o Micael vai adorar!
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {gifts.map((gift) => (
        <a
          key={gift.name}
          href={gift.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-muted/40 hover:bg-muted/70 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="text-4xl">{gift.image}</div>
          <div className="flex-1">
            <p className="font-semibold font-body text-foreground group-hover:text-primary transition-colors">
              {gift.name}
            </p>
            <p className="text-sm text-muted-foreground font-body">
              {gift.description}
            </p>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
        </a>
      ))}
    </div>

    <p className="text-center text-sm text-muted-foreground font-body mt-6 italic">
      Sua presença já é o melhor presente! 💛
    </p>
  </div>
);

export default GiftSuggestions;
