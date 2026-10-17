const ProfileCard = () => {
  return (
    <>
      <section className="bg-[#F4F4F4] z-20 w-full max-w-160 rounded-2xl text-black text-center my-5 px-5 sm:px-7 md:px-9 lg:px-12">
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
            I'm a computer engineering graduate with a curiosity for how things
            work, how they're built and how they can be made better. I explore
            the intersections of software, hardware, electronics and thoughtful
            design, creating everything from web applications and games to
            embedded systems and interactive 3D experiences.
          </p>
        </article>

        <section className="flex flex-row text-[clamp(0.8rem,1.2vw,1rem)] font-solid font-light justify-center gap-x-[3vw] sm:gap-x-10 mb-3 sm:mb-5 md:mb-7 lg:mb-10">
          <a
            className="hover:text-red-800"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=usorohsoye@gmail.com"
          >
            Email
          </a>
          <a
            className="hover:text-red-800"
            target="_blank"
            href="https://github.com/soyedotcom"
          >
            Github
          </a>
          <a
            className="hover:text-red-800"
            target="_blank"
            href="https://www.linkedin.com/in/soye-usoroh"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-red-800"
            target="_blank"
            rel="noopener"
            href="Soye_Resume.pdf"
          >
            Resume
          </a>
        </section>
      </section>
    </>
  );
};

export default ProfileCard;
