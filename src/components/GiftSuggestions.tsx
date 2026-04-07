import { ExternalLink, Gift, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Sun from "./Sun";

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
    url: "https://www.mercadolivre.com.br/brinquedo-educativo-cubo-magico-didatico-infantil-encaixe/up/MLBU3195169432?pdp_filters=item_id%3AMLB5401948718&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB5401948718",
    image: "🧩",
  },
  {
    name: "Ônibus infantil",
    description: "Ônibus de atividades para bebê",
    url: "https://www.mercadolivre.com.br/buba-nibus-de-atividades/p/MLB34235115?pdp_filters=item_id%3AMLB4534507420&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB4534507420",
    image: "🚌"
  },
  {
    name: "Piano Teclado Musical",
    description: "Teclado musical para bebê",
    url: "https://www.mercadolivre.com.br/piano-teclado-musical-infantil-pianinho-microfone-brinquedo-cor-azul/p/MLB42137418?pdp_filters=item_id%3AMLB5362323960&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB5362323960",
    image: "🎹",
  },
  {
    name: "Engrenagem Giro Mágico",
    description: "Brinquedo educativo de engrenagens para bebê",
    url: "https://www.mercadolivre.com.br/brinquedo-infantil-beb-educativo-engrenagem-giro-magico-dismat-8-pecas/p/MLB20277294?pdp_filters=item_id%3AMLB3703382669&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB3703382669",
    image: "⚙️",
  },
  {
    name: "Dino Papa Tudo",
    description: "Brinquedo de encaixe que estimula alimentação para bebê",
    url: "https://a.co/d/0gjwX7uL",
    image: "🦖",
  },
  {
    name: "Livro Educativo - Achoou Amor",
    description: "Livro interativo para estimular o desenvolvimento do bebê",
    url: "https://www.mercadolivre.com.br/achoou-amor-achoou-amor-de-reid-camilla-editora-vr-vergara-riba-capa-dura-edico-1-em-portugus-2023/p/MLB26339602?pdp_filters=item_id%3AMLB3580425817&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB3580425817",
    image: "📚",
  },
      {
    name: "Livro Educativo - A Lagarta Muito Comilona",
    description: "Livro interativo para estimular o desenvolvimento do bebê",
    url: "https://www.mercadolivre.com.br/a-lagarta-muito-comilona-livro-fisico-de-carle-eric-serie-unica-vol-1-editorial-companhia-das-letrinhas-capa-dura-edico-1-edico-em-portugus-2025/p/MLB50140724?pdp_filters=item_id%3AMLB5393027980&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB5393027980",
    image: "📚",
  },
      {
    name: "Kit de Mini Livros",
    description: "Livros interativos para estimular o desenvolvimento do bebê",
    url: "https://www.mercadolivre.com.br/kit-box-com-12-minilivros-fisherprice-primeiros-conceitos--quando-estou/up/MLBU2857366502?pdp_filters=item_id%3AMLB5192550656&matt_tool=38524122#origin=whatsapp&sid=whatsapp&wid=MLB5192550656",
    image: "📚",
  },
      {
    name: "Roupas de Bebê - Conjunto de Moletom",
    description: "Roupas confortáveis para o bebê",
    url: "https://br.shein.com/SHEIN-Playful-Pals-Conjunto-de-Moletom-e-Cal%C3%A7a-Moletom-Casual-com-Blocos-de-Cor,-Bordado-de-Letra,-Gola-Polo-para-Beb%C3%AA-Menino,-Estilo-Preppy,-Fofo-e-Fashion,-Adequado-para-Beb%C3%AAs-no-Outono-Inverno-para-Passeios,-Sess%C3%B5es-de-Fotos,-Festas,-etc.-p-302409252.html?mallCode=1",
    image: "👕",
  },
  {
    name: "Camisa texturizada para bebê",
    description: "Camisa confortável com textura especial para o bebê",
    url: "https://www.zara.com/br/pt/camisa-texturizada-xadrez-p06061498.html?v1=495528863&v2=2565480",
    image: "👕"
  }
];

const GiftSuggestions = () => (
  <div className="relative bg-card/35 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto border-4 border-secondary/30 pt-16 md:pt-20 mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-10 zoom-in-95 duration-700 ease-out">
    {/* Sun Icon */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 animate-sun-pulse">
      <Sun className="w-24 h-24 md:w-32 md:h-32" />
    </div>

    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-5 py-2 mb-4">
        <Gift className="w-5 h-5 text-secondary" />
        <span className="text-base font-semibold font-body uppercase tracking-wider bg-gradient-to-l from-yellow-500 via-blue-500  via-green-500 to-purple-500 bg-clip-text text-transparent">
          Sugestões de Presentes
        </span>
      </div>
      <h2 className="text-3xl font-heading font-bold text-foreground">
        Ideias de Presentes 🎁
      </h2>
      <p className="text-muted-foreground font-body mt-2">
        Aqui estão algumas sugestões que o Micael vai adorar!
        Os modelos são apenas sugestões para servir de inspiração, sinta-se à vontade para escolher o que achar melhor.
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

    <div className="mt-10 space-y-6 text-center border-t border-secondary/20 pt-8">
      <div className="space-y-2">
        <p className="font-heading font-bold text-foreground">
          Dúvidas sobre o envio? 📦
        </p>
        <p className="text-sm text-muted-foreground font-body px-4">
          Clique no botão abaixo para conversar conosco e obter informações sobre o endereço de entrega ou outras dúvidas.
        </p>
      </div>
      
      <Button 
        asChild
        className="rounded-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 h-auto shadow-lg hover:shadow-green-200 transition-all hover:-translate-y-1"
      >
        <a 
          href="https://wa.me/5548988609123?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20como%20enviar%20un%20presente%20para%20o%20Micael!%20🎁" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Informações de Entrega
        </a>
      </Button>

      <p className="text-sm text-muted-foreground font-body italic">
        Sua presença já é o melhor presente! 💛
      </p>
    </div>
  </div>
);

export default GiftSuggestions;
