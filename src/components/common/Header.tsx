import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import message from "../../assets/img/message.svg";

export const Header = () => {
  return (
    <>
      <style>{`body { font-family: 'Inter', sans-serif; }`}</style>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto flex items-start justify-between px-4 py-3">
          <Link to="/">
            <div className="flex items-center gap-3">
              <img src={logo} alt="UESA Logo" className="h-12 w-12" />
              <div className="leading-tight">
                <h1 className="text-[18px] font-extrabold leading-5">
                  Unió Esportiva<br />Sant Andreu
                </h1>
                <h3 className="text-[10px] text-[#0b419b] leading-3">
                  L’orgull del poble des de 1909
              </h3>
            </div>
          </div>
          </Link>

          <div className="flex flex-col items-end">
            <Link
              to="/contacte"
              className="text-[11px] text-[#4d4d4d] hover:underline mb-1"
            >
              Contacte
            </Link>

            <div className="h-[3px] bg-[#ffcc00] w-20 mb-1"></div>

            <div className="flex items-center gap-2 mt-[2px]">
              <a href="https://www.facebook.com/uesaoficial" target="_blank">
                <img src={facebook} alt="Facebook" className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/c/santandreu" target="_blank">
                <img src={youtube} alt="YouTube" className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/uesantandreu/" target="_blank">
                <img src={instagram} alt="Instagram" className="h-4 w-4" />
              </a>
              <a href="https://x.com/uesantandreu" target="_blank">
                <img src={twitter} alt="Twitter" className="h-4 w-4" />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VaCi5DLKAwEoqarYnl0g"
                target="_blank"
              >
                <img src={message} alt="Message" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#0b419b] text-[#ffcc00] font-semibold text-[14px] tracking-wider relative z-50">
        <ul className="flex justify-center gap-16 py-2">
          <li className="relative group cursor-pointer">
            <span>Club</span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-[#0b419b]/90 p-3 w-44 space-y-2 text-[13px] text-[#ffcc00] shadow z-50">
              <li className="hover:underline">Història</li>
              <li className="hover:underline">Himne</li>
              <li className="hover:underline">Càntics</li>
              <li className="hover:underline">Instal·lacions</li>
            </ul>
          </li>

          <li>
            <Link to="/plantilla" className="hover:underline">
              Plantilla
            </Link>
          </li>

          <li className="relative group cursor-pointer">
            <span>Temporada</span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-[#0b419b]/90 p-3 w-44 space-y-2 text-[13px] text-[#ffcc00] shadow z-50">
              <li className="hover:underline">Calendari</li>
              <li className="hover:underline">Classificació</li>
              <li className="hover:underline">Resultats</li>
            </ul>
          </li>

          <li>
            <Link to="/botiga" className="hover:underline">
              Botiga
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
