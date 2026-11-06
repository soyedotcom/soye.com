const ProfileCard = ({ onClose }) => {
  return (
    <>
      <main
        onClick={onClose}
        className="z-200 bg-black/80 fixed inset-0 flex justify-center items-center font-bold text-xl"
      >
        <section className="bg-white rounded-md flex flex-col gap-5 px-10 py-10 w-[75vw] max-w-150 max-h-95 shadow-lg">
          <section className="flex flex-row justify-between align-middle items-end">
            <header>
              <h1 className="text-[clamp(2.5rem,6vw,4.7rem)] leading-19">
                SOYE
                <br />
                DOTCOM
                <br />
              </h1>
            </header>

            <img src="qrcode.svg" alt="site_qr" className="w-[11vw]" />
          </section>

          <section className="flex flex-row justify-between align-middle items-end">
            <div>
              <p className="mt-auto py-[0.5vh]">Soye Usoroh</p>

              <p className="text-[clamp(0.8rem,1.2vw,1rem)] font-normal w-80">
                computer engineering grad @ covenant university and digital
                polymath.
              </p>
            </div>

            <div className="flex flex-col gap-[1vh] text-right text-[clamp(0.8rem,1.2vw,1rem)] mt-auto">
              <a
                className="hover:underline"
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=usorohsoye@gmail.com"
              >
                Email
              </a>

              <a
                className="hover:underline"
                target="_blank"
                href="https://github.com/soyedotcom"
              >
                Github
              </a>

              <a
                className="hover:underline"
                target="_blank"
                href="https://www.linkedin.com/in/soye-usoroh"
              >
                LinkedIn
              </a>

              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="Soye_Usoroh_Resume.pdf"
              >
                View Resume
              </a>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ProfileCard;
