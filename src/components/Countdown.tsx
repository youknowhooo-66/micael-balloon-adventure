import { useState, useEffect, useCallback } from "react";
import { Clock, Sparkles } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2026-05-09T16:30:00").getTime();
  
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    return Math.max(0, distance);
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const nextTime = calculateTimeLeft();
      setTimeLeft(nextTime);
      
      if (nextTime <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const isBirthday = timeLeft <= 0;

  if (isBirthday) {
    return (
      <div className="mt-8 animate-in fade-in zoom-in duration-700">
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 border-2 border-primary/30 shadow-xl relative overflow-hidden text-center">
          <Sparkles className="absolute -top-2 -right-2 w-12 h-12 text-yellow-400 opacity-50 animate-pulse" />
          <h3 className="text-3xl font-heading font-extrabold text-primary mb-3">
            O Grande Dia Chegou! 🥳
          </h3>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            A aventura do Micael começou! Esperamos você para celebrar conosco essa volta ao mundo de alegria.
          </p>
        </div>
      </div>
    );
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="mt-10 space-y-6">
      <div className="flex items-center justify-center gap-3 text-muted-foreground/80">
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-muted-foreground/30" />
        <Clock className="w-5 h-5 text-primary/60 animate-pulse" />
        <span className="text-xs font-heading font-bold uppercase tracking-[0.2em]">Faltam para a Festa</span>
        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-muted-foreground/30" />
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-sm mx-auto">
        {[
          { label: "Dias", value: days },
          { label: "Horas", value: hours },
          { label: "Min", value: minutes },
          { label: "Seg", value: seconds },
        ].map((item) => (
          <div key={item.label} className="relative group">
            <div className="bg-card/40 backdrop-blur-md rounded-2xl p-3 md:p-4 border-2 border-primary/10 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md group-hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold font-sans text-secondary tabular-nums tracking-tight">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-heading font-bold uppercase tracking-tighter mt-1">
                {item.label}
              </div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
