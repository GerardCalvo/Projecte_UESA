import logo from "../../assets/img/logo.png"
import phone from "../../assets/img/phone.svg"
import mail from "../../assets/img/mail.svg"
import clock from "../../assets/img/clock.svg"
import location from "../../assets/img/location.svg"
import facebook from "../../assets/img/facebook.svg"
import youtube from "../../assets/img/youtube.svg"
import instagram from "../../assets/img/instagram.svg"
import twitter from "../../assets/img/twitter.svg"
import message from "../../assets/img/message.svg"

export const Footer = () => {
  return (
    <footer className="bg-[#0b419b] text-[#ffcc00] w-full py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">

        <div className="flex items-center gap-6">
          <img src={logo} className="h-20 w-20" />

          <div className="text-sm">
            <div className="flex gap-2 items-center">
              <img src={phone} className="h-4 w-4" />
              <span>+34 933 112 954</span>
            </div>

            <div className="flex gap-2 items-center">
              <img src={mail} className="h-4 w-4" />
              <a href="mailto:secretaria@uesantandreu.cat" className="hover:underline">
                secretaria@uesantandreu.cat
              </a>
            </div>

            <div className="flex gap-2 items-start mt-1">
              <img src={clock} className="h-4 w-4 mt-1" />
              <div>
                9:30 - 12:30<br />16:00 - 19:00
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Uni%C3%B3+Esportiva+Sant+Andreu/"
              target="_blank"
              className="flex gap-2 items-start mt-1"
            >
              <img src={location} className="h-4 w-4 mt-1" />
              <div>
                Carrer de Santa Coloma, 39<br />08030 Barcelona
              </div>
            </a>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-end items-center">
          <a href="https://www.facebook.com/uesaoficial" target="_blank"><img src={facebook} className="h-4 w-4" /></a>
          <a href="https://www.youtube.com/c/santandreu" target="_blank"><img src={youtube} className="h-4 w-4" /></a>
          <a href="https://www.instagram.com/uesantandreu/" target="_blank"><img src={instagram} className="h-4 w-4" /></a>
          <a href="https://x.com/uesantandreu" target="_blank"><img src={twitter} className="h-4 w-4" /></a>
          <a href="https://www.whatsapp.com/channel/0029VaCi5DLKAwEoqarYnl0g" target="_blank"><img src={message} className="h-4 w-4" /></a>
        </div>

      </div>
    </footer>
  )
}
