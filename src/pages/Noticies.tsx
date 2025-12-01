import { useEffect, useState } from "react";
import noticiesData from "../assets/db/noticies.json";

interface Noticia {
  id: number;
  titol: string;
  img: string;
  data: string;
  descripcio: string;
}

export const Noticies = () => {
  const [noticies, setNoticies] = useState<Noticia[]>([]);

  useEffect(() => {
    setNoticies(noticiesData);
  }, []);

  return (
    <section className="pt-20 max-w-6xl mx-auto px-5 pb-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Totes les Notícies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {noticies.map((n) => (
          <div key={n.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={n.img} alt={n.titol} className="w-full h-48 object-cover" />

            <div className="p-5">
              <h2 className="text-xl font-bold">{n.titol}</h2>
              <p className="text-[#FFCC00] text-sm">{n.data}</p>
              <p className="mt-2 text-gray-600">{n.descripcio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
