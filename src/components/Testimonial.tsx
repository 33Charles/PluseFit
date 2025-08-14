import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Fitness Enthusiast",
    text: "This program completely changed my life! The step-by-step guidance, the personalized workout plans, and the supportive community helped me reach my fitness goals faster than I ever imagined. The weekly check-ins and motivational support kept me accountable, and I finally developed sustainable habits that I can maintain for years to come.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Bob Smith",
    role: "Gym Trainer",
    text: "Excellent guidance and support throughout the entire process. I was able to see noticeable progress in just a few weeks, and the program's structure makes it easy to stay consistent. The resources provided, from nutrition tips to recovery strategies, were incredibly valuable. Perfect for both beginners and seasoned athletes who want a comprehensive approach to fitness and wellness.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Catherine Lee",
    role: "Athlete",
    text: "The personalized plans are amazing! They helped me improve my performance dramatically while avoiding injuries. The workouts are challenging but fun, and the nutrition tips complement the training perfectly. The program also emphasizes mental wellbeing, and I feel stronger, more confident, and more energized than ever before. I truly enjoy every session and feel supported every step of the way.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Daniel Kim",
    role: "Yoga Instructor",
    text: "Flexible, effective, and easy to follow. I love how the program adapts to my schedule and still keeps me accountable. The variety of exercises, mindfulness techniques, and holistic guidance makes it a complete approach to health and fitness. I feel more balanced, focused, and capable of handling daily challenges. This program has truly elevated both my physical and mental wellbeing.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Emma Watson",
    role: "Student",
    text: "Great community and consistent support throughout my journey. It kept me motivated even on days I felt lazy or stressed. The balance between flexibility and structure allowed me to maintain my studies while achieving my fitness goals. The encouragement from coaches and fellow members has been invaluable, and I now feel empowered, healthier, and more confident in my abilities. Absolutely love being part of this program!",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function Testimonial() {
  const [centerIndex, setCenterIndex] = useState(0);

  const prev = () => {
    setCenterIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const getIndex = (offset: any) => {
    return (centerIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div className="py-20 px-10 sm:px-12 md:px-12 bg-white dark:bg-black/90">
      <div className="max-w-screen-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold capitalize leading-tight mb-4 text-black dark:text-white">
          Real stories, <span className="block">real transformations.</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          Every member’s journey is unique, and we celebrate each milestone
          along the way. Our expert coaching, customized programs, and
          supportive community empower you to overcome challenges and achieve
          lasting results, not just physically, but mentally and emotionally as
          well. From building strength and endurance to gaining confidence and
          creating healthy habits, we’re here to guide you in every step of the
          way.
        </p>
      </div>

      <div className="flex flex-col items-center relative w-full max-w-6xl mx-auto ">
        <div className="flex justify-center items-center gap-6 w-full overflow-hidden relative h-[450px]">
          {[getIndex(-1), centerIndex, getIndex(1)].map((idx, i) => {
            const testimonial = testimonials[idx];
            const scale = i === 1 ? "scale-110" : "scale-90";
            const opacity = i === 1 ? "opacity-100" : "opacity-60";

            return (
              <div
                key={testimonial.name}
                className={`flex flex-col rounded-xl p-6 shadow-lg transform ${scale} ${opacity} transition-transform duration-500 ease-in-out w-[320px] h-[350px] bg-gradient-to-b from-gray-50 to-gray-200 dark:from-white/15 dark:to-black/40`}
              >
                {" "}
                <div className="flex items-center gap-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg text-black dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="flex text-gray-700 dark:text-gray-300 overflow-ellipsis text-sm">
                  {testimonial.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex gap-6 mt-4 px-4 sm:px-12">
          <button
            onClick={prev}
            className="bg-gray-300 dark:bg-black text-gray-800 dark:text-gray-200 p-2 rounded-full shadow hover:scale-110 transform transition duration-300"
          >
            <FaArrowLeftLong size={20} />
          </button>
          <button
            onClick={next}
            className="bg-gray-300 dark:bg-black text-gray-800 dark:text-gray-200 p-2 rounded-full shadow hover:scale-110 transform transition duration-300"
          >
            <FaArrowRightLong size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
