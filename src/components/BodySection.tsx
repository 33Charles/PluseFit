import { FaDumbbell } from "react-icons/fa6";
import { TbTreadmill } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { GiBiceps } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

function BodySection() {
  return (
    <div>
      <div className="py-20 px-10 sm:px-12 md:px-12 bg-white dark:bg-black/90">
        <div className="max-w-screen-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
            Why we are not just <span className="block">another gym.</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Fitness is more than exercise, it’s a lifestyle. With expert
            coaching, personalized programs, and a supportive community, we help
            you transform your body and mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-black dark:text-white">
          {[
            {
              icon: (
                <FaDumbbell
                  size={50}
                  className="text-purple-500 dark:text-purple-400"
                />
              ),
              title: "Best Equipment",
              desc: "Top-tier machines and tools for maximum performance.",
            },
            {
              icon: (
                <GiBiceps
                  size={50}
                  className="text-amber-500 dark:text-amber-400"
                />
              ),
              title: "Top Performance",
              desc: "Programs built to push your limits and track progress.",
            },
            {
              icon: (
                <FaHandsHelping
                  size={50}
                  className="text-teal-500 dark:text-teal-400"
                />
              ),
              title: "Reliable Support",
              desc: "Expert trainers ready to guide and motivate you.",
            },
            {
              icon: (
                <TbTreadmill
                  size={50}
                  className="text-rose-500 dark:text-rose-400"
                />
              ),
              title: "Innovative Technology",
              desc: "Smart equipment for efficient, high-tech training.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-black/15 dark:border-white/15 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {item.icon}
              <h3 className="text-xl sm:text-2xl capitalize mt-2">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 px-10 sm:px-12 md:px-12 bg-black/10 dark:bg-black">
        <div className="max-w-screen-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
            Programs made to fit your life,
            <span className="block">your goals, and your journey.</span>
          </h2>

          <p className="text-gray-900 dark:text-gray-300 text-base sm:text-lg">
            We create personalized programs that adapt to your lifestyle, align
            with your goals, and support every step of your fitness journey.
            Whether you’re starting fresh or leveling up, we make fitness work
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {[
            {
              src: "/weight-loss.jpg",
              alt: "weight loss program",
              title: "weight loss program",
            },
            {
              src: "/yoga-classes.jpg",
              alt: "yoga classes",
              title: "yoga classes",
            },
            {
              src: "/strength-training.jpg",
              alt: "strength training",
              title: "strength training",
            },
            {
              src: "/rehabilitation.jpg",
              alt: "rehabilitation program",
              title: "rehabilitation program",
            },
            {
              src: "/endurance-cardio.jpg",
              alt: "endurance and cardio training",
              title: "endurance training",
            },
          ].map((program, index) => (
            <div key={index}>
              <div className="w-full aspect-[2/3] overflow-hidden rounded-xl">
                <img
                  src={program.src}
                  alt={program.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h4 className="text-lg sm:text-xl capitalize text-black dark:text-white mt-2">
                {program.title}
              </h4>
            </div>
          ))}
        </div>
        <div className="border-b-2 border-black/30 w-full my-20" />

        <div>
          <div className="max-w-screen-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
              let's find a program that works,
              <span className="block">for you.</span>
            </h2>
            <p className="text-gray-900 dark:text-gray-300 text-base sm:text-lg">
              Whether you’re here for a short boost or a long-term
              transformation, we offer flexible membership plans tailored to
              your needs.You can choose what fits your schedule, goals, and
              lifestyle.
            </p>
          </div>
          <div className="flex gap-6">
            <div>
              <h3 className="text-xl capitalize text-black dark:text-white">
                beginner plan
              </h3>
              <p className="text-gray-900 dark:text-gray-300 capitalize text-sm mb-4">
                billed monthly
              </p>
              <h5 className="text-xl capitalize text-black dark:text-white font-semibold">
                $100
                <span className="text-gray-900 dark:text-gray-300 capitalize text-sm mb-4 font-normal">
                  /month
                </span>
              </h5>
              <div className="capitalize text-gray-900 dark:text-gray-300 flex flex-col gap-2 my-6">
                <p className="flex align-center gap-3">
                  {" "}
                  <IoIosCheckmarkCircleOutline
                    size={25}
                    className="text-green-600"
                  />{" "}
                  Group Classes (1 per week)
                </p>
                <p className="flex align-center gap-3">
                  {" "}
                  <IoIosCheckmarkCircleOutline
                    size={25}
                    className="text-green-600"
                  />{" "}
                  nutrition coaching (basic tips)
                </p>
                <p className="flex align-center gap-3">
                  {" "}
                  <IoIosCheckmarkCircleOutline
                    size={25}
                    className="text-green-600"
                  />{" "}
                  Gym access (limited - 4 days/week)
                </p>
                <p className="flex align-center gap-3">
                  {" "}
                  <MdOutlineCancel
                    size={25}
                    className="text-red-600"
                  />{" "}
                  personal training sessions
                </p>
                <p className="flex align-center gap-3">
                  {" "}
                  <MdOutlineCancel
                    size={25}
                    className="text-red-600"
                  />{" "}
                  Recovery zone access
                </p>
              </div>
              <button className="capitalize rounded-full w-full bg-black/15 py-2"> am getting started</button>
            </div>
            <div>pro plan</div>
            <div>intermediate plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodySection;
