import NavBar from "./NavBar";
import { FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-[url(/hero.jpg)] bg-center bg-no-repeat bg-cover">
      {/* Navbar */}
      <div className="relative z-50">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="flex-1 bg-white/30 dark:bg-black/70 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-center gap-8 px-4 transition-colors duration-1000">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 text-black dark:text-white transition-colors duration-1000">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif mb-6 uppercase leading-tight">
            Your fitness journey starts with us.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-4 text-gray-950 dark:text-gray-200 transition-colors duration-1000">
            Transform your body, energize your mind, and elevate your life. Our
            fitness programs are designed to help you build strength, increase
            endurance, and achieve your goals no matter your level. Join us and
            experience the power of consistent training, expert guidance, and a
            community that pushes you to be your best self.
          </p>
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-3 font-semibold shadow-lg hover:from-pink-500 hover:to-rose-600 dark:from-yellow-400 dark:to-orange-600 dark:hover:from-yellow-500 dark:hover:to-orange-700 transition-transform transform hover:scale-105 duration-500">
            Get Started <FiArrowUpRight size={20} />
          </button>
        </div>

        {/* Image Column */}
        {/* Image Column */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center">
          <div className="w-1/3 max-w-[190px]">
            <img
              src="/physique.jpg"
              alt="physique photo"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/3 max-w-[200px]">
            <img
              src="/woman.jpg"
              alt="woman lifting weights"
              className="rounded-2xl w-full h-auto"
            />
            <img
              src="/cardio.jpg"
              alt="cardio"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          <div className="hidden [@media(min-width:635px)]:flex flex-col gap-2 w-1/3 max-w-[170px]">
            <img
              src="/weightlifting.jpg"
              alt="body building"
              className="rounded-2xl w-full h-auto"
            />
            <img
              src="/yoga.jpg"
              alt="yoga"
              className="rounded-2xl w-full h-auto"
            />
            <img
              src="/deadlifting.jpg"
              alt="deadlifting"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
