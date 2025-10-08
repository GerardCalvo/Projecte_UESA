export const Footer = () => {
  return (
    <footer className="bg-[#0b419b] text-[#ffcc00] fixed bottom-0 left-0 w-full py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-between">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full justify-start">
            <img src="../src/assets/logo.png" alt="UESA Logo" className="h-24 w-24 mx-auto md:mx-0" />
            <div className="text-sm leading-relaxed text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img src="../src/assets/phone.svg" alt="Telèfon" className="h-4 w-4 text-[#ffcc00]" />
                <span>+34 933 112 954</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img src="../src/assets/mail.svg" alt="Correu" className="h-4 w-4 text-[#ffcc00]" />
                <a href="mailto:secretaria@uesantandreu.cat" className="text-[#ffcc00] hover:underline">
                  secretaria@uesantandreu.cat
                </a>
              </div>
              <div className="flex items-start gap-2 mt-1 justify-center md:justify-start">
                <img src="../src/assets/clock.svg" alt="Horari" className="h-4 w-4 text-[#ffcc00] mt-1" />
                <div>
                  <span>Atenció al públic:</span><br />
                  9:30 - 12:30<br />
                  16:00 - 19:00
                </div>
              </div>
              <div className="flex items-start gap-2 mt-1 justify-center md:justify-start">
                <img src="../src/assets/location.svg" alt="Adreça" className="h-4 w-4 text-[#ffcc00] mt-1" />
                <div>
                  Carrer de Santa Coloma, 39<br />
                  08030 Barcelona
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0 justify-center md:justify-end w-full">
            <img src="../src/assets/message.svg" alt="Chat" className="h-5 w-5 text-[#ffcc00] fill-[#ffcc00]" />
            <img src="../src/assets/youtube.svg" alt="YouTube" className="h-5 w-5 text-[#ffcc00] fill-[#ffcc00]" />
            <img src="../src/assets/instagram.svg" alt="Instagram" className="h-5 w-5 text-[#ffcc00] fill-[#ffcc00]" />
            <img src="../src/assets/twitter.svg" alt="Twitter" className="h-5 w-5 text-[#ffcc00] fill-[#ffcc00]" />
            <img src="../src/assets/twitch.svg" alt="Twitch" className="h-5 w-5 text-[#ffcc00] fill-[#ffcc00]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
