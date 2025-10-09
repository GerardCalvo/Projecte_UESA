import { useState } from "react";

export const Carrussel = () => {
  const imatges = [
    {
      src: "./src/assets/aficio.jpg",
      titol: "L’orgull del poble des de 1909",
      textBot: "Càntics",
    },
    {
      src: "./src/assets/narcis-sala.jpg",
      titol: "El nostre estadi, casa i història",
      textBot: "Instal·lacions",
    },
    {
      src: "./src/assets/celebracio.jpg",
      titol: "La força de l’equip, la passió de la gent",
      textBot: "Plantilla",
    },
    {
      src: "./src/assets/aficio2.jpg",
      titol: "Unió, cor i colors quadribarrats",
      textBot: "Classificació",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[52vh] md:h-[60vh] bg-neutral-600 overflow-hidden">
        <img src={imatges[index].src} alt={`Imatge ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {imatges.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Anar a la imatge ${i + 1}`} className={`w-3 h-3 rounded-full transition-all ${i === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70" }`}/>))}
        </div>

        <div className="absolute left-12 bottom-[75%] z-10 text-white text-3xl font-bold drop-shadow-lg">
          <h2>{imatges[index].titol}</h2>
        </div>

        <div className="absolute left-12 bottom-[50%] z-10 text-white text-3xl font-bold drop-shadow-lg">
          <button className="px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105" style={{backgroundColor: "#0B419B", color: "#FFCC00",}}>{imatges[index].textBot}</button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-6" style={{ backgroundColor: "#0B419B" }}/>
      </div>
    </div>
  );
};
