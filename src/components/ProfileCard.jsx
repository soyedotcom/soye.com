const ProfileCard = ({ onClose }) => {
  return (
    <>
      <main
        onClick={onClose}
        className="fixed z-200 flex justify-center items-center h-screen w-screen inset-0 bg-[#1c1c1cf6] px-9"
      >
        <section className="bg-[#F4F4F4] w-full max-w-160 h-100 rounded-2xl text-black text-center justify-center items-center px-7 sm:px-9 md:px-11 lg:px-14">
          <header>
            <h1 className="font-shadow text-[clamp(2.5rem,7vw,5.5rem)]">
              Soye Usoroh
            </h1>
            <p className="font-solid text-[clamp(0.9rem,1.5vw,1.125rem)]">
              A design engineer and digital polymath
            </p>
          </header>

          <article>
            <p className="my-7 text-[clamp(0.8rem,1.2vw,1rem)] leading-relaxed text-left font-solid font-light">
              A computer grad with a love for understanding how things are made are building them. 
            </p>
          </article>

          <section className="flex flex-row text-[clamp(0.8rem,1.2vw,1rem)] font-solid justify-center gap-x-[3vw] mt-auto sm:gap-x-10 mb-3 sm:mb-5 md:mb-7 lg:mb-10">
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
              Resume
            </a>
          </section>
        </section>
      </main>
    </>
  );
};

export default ProfileCard;
