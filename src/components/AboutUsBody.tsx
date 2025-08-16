import { TbFlame } from "react-icons/tb";
import { RiUserCommunityLine } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";
import { FaArrowTrendUp, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function AboutUsBody() {
  const values = [
    {
      icon: TbFlame,
      title: "Passion",
      description:
        "Passion drives everything we do, inspiring creativity and dedication in every project we take on.",
    },
    {
      icon: RiUserCommunityLine,
      title: "Community",
      description:
        "Community is at the heart of our journey, fostering collaboration, support, and shared growth.",
    },
    {
      icon: GiStairsGoal,
      title: "Commitment",
      description:
        "Commitment ensures we stay focused and persistent, achieving our goals with determination and integrity.",
    },
    {
      icon: FaArrowTrendUp,
      title: "Growth",
      description:
        "Growth reflects our drive to evolve, learn continuously, and reach higher levels of success.",
    },
  ];

  const coaches = [
    {
      name: "John Doe",
      role: "Personal Coach",
      image: "/coach.jpg",
    },
    {
      name: "Mike Turner",
      role: "Fitness Coach",
      image: "/coach1.jpg",
    },
    {
      name: "Sarah Lee",
      role: "Yoga Coach",
      image: "/coach2.jpg",
    },
    {
      name: "David Kim",
      role: "Strength Coach",
      image: "/coach3.jpg",
    },
  ];

  return (
    <div>
      <div className="py-20 px-4 sm:px-12  bg-black/10 dark:bg-black">
        <div className="flex flex-col-reverse lg:flex-row gap-10  items-center">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/lift.jpg"
              alt="weight lifting"
              className="rounded-2xl w-full max-w-md lg:max-w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
              the story behind our gym.
            </h4>
            <p className="text-gray-900 dark:text-gray-300 text-sm sm:text-base lg:text-lg lg:w-[90%]">
              Every great journey starts with a vision. Our gym was born out of
              a simple but powerful belief; that fitness is more than just
              exercise, it’s a lifestyle that builds strength, confidence, and
              community. From humble beginnings to what we’ve built today, our
              story is fueled by passion, perseverance, and the desire to help
              every member unlock their full potential. This is more than a gym,
              it’s a place where stories of transformation begin.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center mt-20">
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
              Want to know what you are walking into? take a look around.
            </h4>
            <p className="text-gray-900 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
              Step inside and see for yourself. Our gym is more than just
              equipment,it’s an environment built to inspire, motivate, and
              support your fitness journey. Take a look around and get a feel
              for the energy that makes our community thrive.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              className="rounded-2xl w-full max-w-md lg:max-w-full object-cover"
              src="/gym-tour.mp4"
              controls
              loop
              muted
            />
          </div>
        </div>
      </div>
      <div className="py-20 px-4 sm:px-12  bg-white dark:bg-black/90">
        <div>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
            the core values we believe in.
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-black dark:text-white">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex flex-col items-center text-center p-4 rounded-xl border border-black/15 dark:border-white/15 
                     hover:border-orange-400 dark:hover:border-orange-300 transition-colors duration-300"
              >
                <Icon
                  size={50}
                  className="group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors duration-300"
                />
                <h5 className="text-xl sm:text-2xl capitalize mt-2 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors duration-300">
                  {title}
                </h5>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors duration-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
            not sure where to start?{" "}
            <span className="block">that's what they are here for.</span>
          </h4>
          <p className="max-w-[80%] text-gray-900 dark:text-gray-300 text-sm sm:text-base lg:text-lg">
            Our coaches are mentors, motivators, and guides, bringing experience
            and personalized support to help you overcome challenges and achieve
            your goals. Whether you're starting out or pushing your limits, they
            provide guidance and encouragement every step of the way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {coaches.map(({ name, role, image }) => (
              <div
                key={name}
                className="relative text-white rounded-xl overflow-hidden shadow-lg group"
              >
                
                <div className="h-96 w-full relative">
                  <img
                    src={image}
                    alt={`${name} image`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-5 bottom-5 w-[calc(100%-2.5rem)]">
                    <h4 className="text-2xl font-semibold">{name}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <p>{role}</p>
                      <div className="flex gap-2">
                        <FaXTwitter
                          size={22.5}
                          className="hover:text-blue-400 hover:cursor-pointer transition-colors duration-300"
                        />
                        <FaInstagram
                          size={22.5}
                          className="hover:text-pink-400 hover:cursor-pointer transition-colors duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBody;
