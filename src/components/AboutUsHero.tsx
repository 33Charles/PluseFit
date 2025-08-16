import NavBar from "./NavBar";

function AboutUsHero() {
  return (
    <div className="bg-[url(/aboutus3.jpg)] bg-center bg-no-repeat bg-cover">
      <div className="relative z-50">
        <NavBar />
      </div>

      <section className="flex-1 bg-white/30 dark:bg-black/70 backdrop-blur-sm py-20 px-6 sm:px-12 flex justify-start transition-colors duration-1000">
        <div className="w-full  text-black dark:text-white transition-colors duration-1000">
          <h1 className=" lg:w-[60%] text-4xl sm:text-5xl font-extrabold font-serif mb-6 uppercase leading-tight">
            Our Past Inspires, Our Present Builds, Your Future Thrives
          </h1>
          <p className="lg:w-[90%] text-base sm:text-lg lg:text-xl text-black dark:text-gray-200 transition-colors duration-1000">
            Every chapter of our journey has been shaped by lessons learned,
            challenges overcome, and a relentless drive to grow. The experiences
            of our past guide the values we hold today, while our present is
            built on dedication, innovation, and collaboration. Together, these
            form a foundation that empowers us to create lasting impact, so that
            your future doesn’t just succeed, it thrives.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUsHero;
