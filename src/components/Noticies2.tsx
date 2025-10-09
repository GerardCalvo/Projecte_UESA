export const Noticies = () => {
  const noticies = [
    {
      id: 1,
      titol: "El CD Teruel, rival a la primera eliminatòria de la Copa del Rei",
      img: "./src/assets/aficio.jpg",
      data: "6 d’octubre de 2025",
      descripcio:
        "El Sant Andreu rebrà el CD Teruel en la primera eliminatòria de la Copa del Rei, a partit únic. El partit es jugarà el dia 28, 29 o 30 d’octubre i aviat s’informarà dels preus i condicions del procés de venda d’entrades.",
    },
    {
      id: 2,
      titol: "Victòria important a casa davant el Vilafranca",
      img: "./src/assets/x.png",
      data: "30 de setembre de 2025",
      descripcio:
        "Els quadribarrats van aconseguir una victòria treballada davant el Vilafranca, consolidant-se a la part alta de la classificació amb un partit intens i molt disputat.",
    },
    {
      id: 3,
      titol: "El Juvenil A empata a camp del líder",
      img: "./src/assets/x.png",
      data: "28 de setembre de 2025",
      descripcio:
        "El Juvenil A suma un punt valuós després d’un partit molt complet en què l’equip va demostrar solidesa defensiva i esperit competitiu.",
    },
    {
      id: 4,
      titol: "Entrenaments oberts aquesta setmana al Narcís Sala",
      img: "./src/assets/x.png",
      data: "25 de setembre de 2025",
      descripcio:
        "Durant tota la setmana, el primer equip realitzarà entrenaments oberts al públic, amb activitats especials per als socis i aficionats més joves.",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-10">
        <h2 className="text-[#0B419B] text-[20px] font-extrabold relative inline-block mb-10">
          NOTÍCIES
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#FFCC00]" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {noticies.slice(0, 4).map((n) => (
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

        <div className="flex justify-center mt-10">
          <a
            href="/noticies"
            className="px-6 py-2 rounded-md font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#0B419B", color: "#FFCC00" }}
          >
            Mostra més
          </a>
        </div>
      </div>
    </section>
  );
};
