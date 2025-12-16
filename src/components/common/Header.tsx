import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import facebook from "../../assets/img/facebook.svg";
import youtube from "../../assets/img/youtube.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import message from "../../assets/img/message.svg";

export const Header = () => {
  return (
    <header className="header top-0 left-0 w-full" role="banner">
      <style>{`body { font-family: 'Inter', sans-serif; }`}</style>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto flex items-start justify-between px-4 py-3" aria-label="Barra superior amb logo i contacte">
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
              aria-label="Anar a la pàgina de contacte"
            >
              Contacte
            </Link>

            <div className="h-[3px] bg-[#ffcc00] w-20 mb-1"></div>

            <div className="flex items-center gap-2 mt-[2px]" role="list" aria-label="Enlaces a xarxes socials">
              <a href="https://www.facebook.com/uesaoficial" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Facebook de UESA Sant Andreu">
                <img src={facebook} alt="Facebook" className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/c/santandreu" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Canal YouTube de UESA Sant Andreu">
                <img src={youtube} alt="YouTube" className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/uesantandreu/" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Instagram de UESA Sant Andreu">
                <img src={instagram} alt="Instagram" className="h-4 w-4" />
              </a>
              <a href="https://x.com/uesantandreu" target="_blank" rel="noopener noreferrer" role="listitem" aria-label="Twitter (X) de UESA Sant Andreu">
                <img src={twitter} alt="Twitter" className="h-4 w-4" />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VaCi5DLKAwEoqarYnl0g"
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label="WhatsApp de UESA Sant Andreu"
              >
                <img src={message} alt="Message" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-[#0b419b] text-[#ffcc00] font-semibold text-[14px] tracking-wider relative z-50" role="navigation" aria-label="Menú principal de navegació">
        <ul className="flex justify-center gap-16 py-2" role="menubar">
          <li className="relative group cursor-pointer" role="menuitem" aria-haspopup="true" aria-expanded="false">
            <span>Club</span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-[#0b419b]/90 p-3 w-44 space-y-2 text-[13px] text-[#ffcc00] shadow z-50" role="menu">
              <li className="hover:underline" role="menuitem">Història</li>
              <li className="hover:underline" role="menuitem">Himne</li>
              <li className="hover:underline" role="menuitem">Càntics</li>
              <li className="hover:underline" role="menuitem">Instal·lacions</li>
            </ul>
          </li>

          <li role="menuitem">
            <Link to="/plantilla" className="hover:underline" aria-label="Plantilla de jugadors">
              Plantilla
            </Link>
          </li>

          <li className="relative group cursor-pointer" role="menuitem" aria-haspopup="true" aria-expanded="false">
            <span>Temporada</span>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-[#0b419b]/90 p-3 w-44 space-y-2 text-[13px] text-[#ffcc00] shadow z-50" role="menu">
              <li className="hover:underline" role="menuitem">Calendari</li>
              <li className="hover:underline" role="menuitem">Classificació</li>
              <li className="hover:underline" role="menuitem">Resultats</li>
            </ul>
          </li>

          <li role="menuitem">
            <Link to="/botiga" className="hover:underline" aria-label="Accés a la botiga oficial">
              Botiga
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
