import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black/70 py-12 px-6 sm:px-12 lg:px-24 trasition-colors duration-1000">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8 trasition-colors duration-1000">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white trasition-colors duration-1000">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 trasition-colors duration-1000">
            Have questions or want to work with us? Reach out and we’ll get back
            to you as soon as possible.
          </p>

          <div className="space-y-2 text-black dark:text-white trasition-colors duration-1000e">
            <p>
              <span className="font-semibold">Email:</span> contact@company.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Main Street,
              City, Country
            </p>
          </div>

          <div className="flex gap-4 mt-4 text-black dark:text-white">
            <FaXTwitter
              size={24}
              className="hover:text-blue-400 cursor-pointer transition-colors"
            />
            <FaInstagram
              size={24}
              className="hover:text-pink-400 cursor-pointer transition-colors"
            />
            <FaLinkedin
              size={24}
              className="hover:text-blue-700 cursor-pointer transition-colors"
            />
          </div>
        </div>

        <div className="bg-black/5 dark:bg-black/30 p-8 rounded-xl shadow-md trasition-colors duration-1000">
          <form className="flex flex-col space-y-4">
            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 dark:text-gray-200 font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-300"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 dark:bg-orange-300 dark:hover:bg-orange-400 text-white dark:text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-1000"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
