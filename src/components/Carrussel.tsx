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
        <img
          src={imatges[index].src}
          alt={`Imatge ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {imatges.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Anar a la imatge ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="absolute left-12 bottom-[75%] z-10 text-white text-3xl font-bold drop-shadow-lg">
          <h2>{imatges[index].titol}</h2>
        </div>

        <div className="absolute left-12 bottom-[50%] z-10 text-3xl font-bold drop-shadow-lg">
          <a
            href="#"
            className={`
              relative inline-flex items-center justify-center font-medium text-[18px] tracking-wide
              rounded-[0.8em] cursor-pointer overflow-hidden select-none transition-transform active:scale-95
              text-[#FFCC00] bg-white border-2 border-[#0B419B]
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-[120%] before:h-full before:-translate-x-[10%]
              before:bg-[#0B419B] before:skew-x-[30deg]
              before:transition-transform before:duration-[400ms] before:[transition-timing-function:cubic-bezier(0.3,1,0.8,1)]
              hover:before:translate-x-[100%]
              hover:text-[#0B419B]
            `}
          >
            <span className="relative z-10 flex items-center gap-2 px-5 py-3 transition-colors duration-300">
              <svg
                className="w-[1.2em] h-[1.2em]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                  fill="currentColor"
                ></path>
              </svg>
              {imatges[index].textBot}
            </span>
          </a>
        </div>

        {/* franja inferior */}
        <div
          className="absolute bottom-0 left-0 w-full h-6"
          style={{ backgroundColor: "#0B419B" }}
        />
      </div>
    </div>
  );
};
