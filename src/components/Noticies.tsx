import { useState } from "react";

export const Noticies = () => {
  const noticies = [
    {
      id: 1,
      titol:
        "El CD Teruel, rival a la primera eliminatòria de la Copa del Rei",
      img: "./src/assets/aficio.jpg",
      data: "6 d’octubre de 2025",
      descripcio:
        "El Sant Andreu rebrà el CD Teruel en la primera eliminatòria de la Copa del Rei, a partit únic.",
    },
    {
      id: 2,
      titol: "Victòria important a casa davant el Vilafranca",
      img: "./src/assets/aficio.jpg",
      data: "30 de setembre de 2025",
      descripcio:
        "Els quadribarrats van aconseguir una victòria treballada davant el Vilafranca.",
    },
    {
      id: 3,
      titol: "El Juvenil A empata a camp del líder",
      img: "./src/assets/aficio.jpg",
      data: "28 de setembre de 2025",
      descripcio:
        "El Juvenil A suma un punt valuós després d’un partit molt complet i competitiu.",
    },
    {
      id: 4,
      titol: "Entrenaments oberts aquesta setmana al Narcís Sala",
      img: "./src/assets/aficio.jpg",
      data: "25 de setembre de 2025",
      descripcio:
        "Durant tota la setmana, el primer equip realitzarà entrenaments oberts al públic.",
    },
    {
      id: 5,
      titol: "Nou acord de patrocini amb Ògel",
      img: "./src/assets/aficio.jpg",
      data: "20 de setembre de 2025",
      descripcio:
        "L’acord reforça el projecte esportiu i social del club amb noves iniciatives conjuntes.",
    },
  ];

  const [visible, setVisible] = useState(4);
  const hiHaMes = visible < noticies.length;

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-[#0B419B] text-[20px] font-extrabold relative inline-block mb-10">
          NOTÍCIES
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#FFCC00]" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {noticies.slice(0, visible).map((n) => (
            <a
              key={n.id}
              href={`/noticia/${n.id}`}
              className="group relative w-[300px] h-[200px] rounded-[10px] overflow-hidden shadow-[0_0_0_5px_#ffffff80] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(90deg)]">
                <img
                  src={n.img}
                  alt={n.titol}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 p-5 bg-[#f2f2f2] [transform:rotateX(-90deg)] origin-bottom transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:[transform:rotateX(0deg)] [backface-visibility:hidden]">
                <p className="m-0 text-[20px] text-[#333] font-bold leading-tight line-clamp-2">
                  {n.titol}
                </p>
                <p className="mt-1 text-[12px] text-[#FFCC00]">{n.data}</p>
                <p className="mt-2 text-[14px] text-[#777] leading-[1.4] line-clamp-3">
                  {n.descripcio}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Botó actualitzat */}
        {hiHaMes && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisible((v) => Math.min(v + 4, noticies.length))
              }
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
                Mostra més
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
