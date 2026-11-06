const ProfileCard_Mobile = ({ onClose }) => {
  return (
    <>
      <main
        onClick={onClose}
        className="z-200 bg-black/80 fixed inset-0 flex justify-center items-center font-bold text-xl"
      >
        <section className="bg-white rounded-2xl flex flex-col gap-5 p-10 w-[75vw] h-[55vh] max-h-140 justify-center shadow-lg">
          <section className="flex flex-col items-start gap-2">
            <p className="text-[0.7rem] font-normal">
              computer engineering grad @ covenant university and digital
              polymath.
            </p>

            <h1 className="text-5xl">
              SOYE
              <br />
              DOTCOM
            </h1>
          </section>

          <div className="flex flex-1 justify-center">
            <img src="qrcode.svg" alt="site_qr" className="w-35" />
          </div>

          <section className="flex flex-col justify-between align-middle items-start mt-auto">
            <div>
              <p className="mt-auto py-[0.5vh]">Soye Usoroh</p>
            </div>

            <div className="flex flex-col text-[clamp(0.8rem,1.2vw,1rem)] gap-1.5">
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

export default ProfileCard_Mobile;
