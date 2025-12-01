import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import noticiesData from "../../assets/db/noticies.json";

interface Noticia {
  id: number;
  titol: string;
  img: string;
  data: string;
  descripcio: string;
}

export const Noticies = () => {
  const [noticies, setNoticies] = useState<Noticia[]>([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    setNoticies(noticiesData);
  }, []);

  const hiHaMes = visible < noticies.length;

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-10">
        <Link to="/noticies">
          <h2 className="text-[#0B419B] text-[20px] font-extrabold relative inline-block mb-10">
            NOTÍCIES
            <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#FFCC00]" />
          </h2>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {noticies.slice(0, visible).map((n) => (
            <Link
              key={n.id}
              to={`/noticia/${n.id}`}
              className="group relative w-[300px] h-[200px] rounded-[10px] overflow-hidden shadow-[0_0_0_5px_#ffffff80] transition-all duration-500 hover:scale-105"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:[transform:rotateX(90deg)]">
                <img src={n.img} alt={n.titol} className="w-full h-full object-cover" />
              </div>

              <div className="absolute inset-0 p-5 bg-[#f2f2f2] [transform:rotateX(-90deg)] origin-bottom transition-all duration-500 group-hover:[transform:rotateX(0deg)]">
                <p className="text-[20px] font-bold line-clamp-2">{n.titol}</p>
                <p className="text-[12px] text-[#FFCC00]">{n.data}</p>
                <p className="text-[14px] text-[#777] line-clamp-3">{n.descripcio}</p>
              </div>
            </Link>
          ))}
        </div>

        {hiHaMes && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisible((v) => Math.min(v + 4, noticies.length))}
              className="relative inline-flex items-center justify-center font-medium text-[18px] text-[#FFCC00] bg-white border-2 border-[#0B419B] rounded-[0.8em] px-5 py-3"
            >
              Mostra més
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
