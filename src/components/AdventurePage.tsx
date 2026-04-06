import React from "react";
import { PartyPopper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const AdventurePage = () => {
  // Placeholder for images, will be replaced with actual image display later
  const photos = [
    { id: 1, src: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo+1", alt: "Photo 1" },
    { id: 2, src: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Photo+2", alt: "Photo 2" },
    { id: 3, src: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo+3", alt: "Photo 3" },
  ];

  return (
    <Card className="bg-card/35 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-xl mx-auto text-center border-4 border-sun/30">
      <CardHeader>
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-4">
          <PartyPopper className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold">
            Micael's Adventure
          </span>
        </div>
        <CardTitle className="text-3xl font-heading font-extrabold leading-tight mb-2">
          Aventuras do Micael!
        </CardTitle>
        <CardDescription className="text-base font-body text-muted-foreground mb-8 leading-relaxed">
          Confira alguns momentos especiais da aventura do Micael.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="overflow-hidden rounded-lg shadow-md">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground font-body italic">
          Mais fotos em breve!
        </p>
      </CardContent>
    </Card>
  );
};

export default AdventurePage;
