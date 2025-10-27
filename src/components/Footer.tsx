export const Footer = () => {
  return (
    <footer className="bg-[#0b419b] text-[#ffcc00] w-full py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-between">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-start">
            <img
              src="../src/assets/logo.png"
              alt="UESA Logo"
              className="h-24 w-24 mx-auto md:mx-0"
            />
            <div className="text-sm leading-relaxed text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img
                  src="../src/assets/phone.svg"
                  alt="Telèfon"
                  className="h-4 w-4 text-[#ffcc00]"
                />
                <span>+34 933 112 954</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img
                  src="../src/assets/mail.svg"
                  alt="Correu"
                  className="h-4 w-4 text-[#ffcc00]"
                />
                <a
                  href="mailto:secretaria@uesantandreu.cat"
                  className="text-[#ffcc00] hover:underline"
                  target="_blank"
                >
                  secretaria@uesantandreu.cat
                </a>
              </div>
              <div className="flex items-start gap-2 mt-1 justify-center md:justify-start">
                <img
                  src="../src/assets/clock.svg"
                  alt="Horari"
                  className="h-4 w-4 text-[#ffcc00] mt-1"
                />
                <div>
                  <span>Atenció al públic:</span>
                  <br />
                  9:30 - 12:30
                  <br />
                  16:00 - 19:00
                </div>
              </div>
              <a href="https://www.google.com/maps/place/Uni%C3%B3+Esportiva+Sant+Andreu/@41.4288812,2.1926311,15z/data=!4m6!3m5!1s0x12a4bcd04cd88023:0xd17cfc5a50d67e92!8m2!3d41.4288812!4d2.1926311!16s%2Fg%2F11g0hmplyy?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <div className="flex items-start gap-2 mt-1 justify-center md:justify-start">
                <img
                  src="../src/assets/location.svg"
                  alt="Adreça"
                  className="h-4 w-4 text-[#ffcc00] mt-1"
                />
                <div>
                  Carrer de Santa Coloma, 39
                  <br />
                  08030 Barcelona
                </div>
              </div></a>
            </div>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0 justify-center md:justify-end w-full">
            <a href="https://www.facebook.com/uesaoficial" target="_blank"><img src="../src/assets/facebook.svg" alt="Chat" className="h-4 w-4 text-[#0b419b] fill-[#0b419b]" /></a>
            <a href="https://www.youtube.com/c/santandreu" target="_blank"><img src="../src/assets/youtube.svg" alt="YouTube" className="h-4 w-4 text-[#0b419b] fill-[#0b419b]" /></a>
            <a href="https://www.instagram.com/uesantandreu/" target="_blank"><img src="../src/assets/instagram.svg" alt="Instagram" className="h-4 w-4 text-[#0b419b] fill-[#0b419b]" /></a>
            <a href="https://x.com/uesantandreu" target="_blank"><img src="../src/assets/twitter.svg" alt="Twitter" className="h-4 w-4 text-[#0b419b] fill-[#0b419b]" /></a>
            <a href="https://www.whatsapp.com/channel/0029VaCi5DLKAwEoqarYnl0g" target="_blank"><img src="../src/assets/message.svg" alt="Message" className="h-4 w-4 text-[#0b419b] fill-[#0b419b]" /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};
