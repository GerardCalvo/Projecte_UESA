import { useState } from "react";

export const Noticies = () => {
  const noticies = [
    { id: 1, titol: "El CD Teruel, rival a la primera eliminatòria de la Copa del Rei", img: "./src/assets/aficio.jpg", data: "6 d’octubre de 2025", descripcio:"El Sant Andreu rebrà el CD Teruel en la primera eliminatòria de la Copa del Rei, a partit únic. El partit es jugarà el dia 28, 29 o 30 d’octubre i aviat s’informarà dels preus i condicions del procés de venda d’entrades.",},
    { id: 2, titol: "Victòria important a casa davant el Vilafranca", img: "./src/assets/aficio.jpg", data: "30 de setembre de 2025", descripcio: "Els quadribarrats van aconseguir una victòria treballada..." },
    { id: 3, titol: "El Juvenil A empata a camp del líder", img: "./src/assets/aficio.jpg", data: "28 de setembre de 2025", descripcio: "El Juvenil A suma un punt valuós després d’un partit molt complet..." },
    { id: 4, titol: "Entrenaments oberts aquesta setmana al Narcís Sala", img: "./src/assets/aficio.jpg", data: "25 de setembre de 2025", descripcio: "Entrenaments oberts al públic amb activitats per als socis..." },
    { id: 5, titol: "Nou acord de patrocini amb Ògel", img: "./src/assets/aficio.jpg", data: "20 de setembre de 2025", descripcio: "L’acord reforça el projecte esportiu i social del club..." },
    { id: 6, titol: "Portes obertes del Futbol Base", img: "./src/assets/aficio.jpg", data: "18 de setembre de 2025", descripcio: "Sessions gratuïtes per a infants i joves al Narcís Sala..." },
    { id: 7, titol: "Convocatòria d’assemblea de socis", img: "./src/assets/aficio.jpg", data: "15 de setembre de 2025", descripcio: "Ordre del dia i informació per a la participació de socis..." },
    { id: 8, titol: "Renovació del capità", img: "./src/assets/aficio.jpg", data: "10 de setembre de 2025", descripcio: "El capità renova una temporada més amb el primer equip..." },
  ];

  const [visible, setVisible] = useState(4);

  const handleMostraMes = () => {
    setVisible((v) => Math.min(v + 4, noticies.length));
    // Opcional: desplaçar una mica cap avall després d’afegir més
    // setTimeout(() => window.scrollBy({ top: 300, behavior: "smooth" }), 0);
  };

  const hiHaMes = visible < noticies.length;

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-[#0B419B] text-[20px] font-extrabold relative inline-block mb-10">
          NOTÍCIES
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#FFCC00]" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {noticies.slice(0, visible).map((n) => (
            <a
              key={n.id}
              href={`/noticia/${n.id}`}
              className="flex flex-col sm:flex-row gap-6 group border-b border-[#0B419B]/10 pb-6 hover:bg-[#f9fafb] transition"
            >
              <div className="flex-1">
                <h3 className="text-[#0B419B] font-bold text-lg mb-2 group-hover:underline">
                  {n.titol}
                </h3>
                <p className="text-[#FFCC00] text-sm mb-3">{n.data}</p>
                <p className="text-[#4d4d4d] text-sm leading-relaxed">
                  {n.descripcio}
                </p>
              </div>
              <div className="sm:w-[45%] aspect-video overflow-hidden rounded-md shadow-sm">
                <img
                  src={n.img}
                  alt={n.titol}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition"
                />
              </div>
            </a>
          ))}
        </div>

        {hiHaMes && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleMostraMes}
              className="px-6 py-2 rounded-md font-semibold transition hover:opacity-90"
              style={{ backgroundColor: "#0B419B", color: "#FFCC00" }}
              aria-label="Mostra més notícies"
            >
              Mostra més
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
