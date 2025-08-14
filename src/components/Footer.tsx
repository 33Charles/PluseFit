import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black/10 dark:bg-black text-gray-700 dark:text-gray-300 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
            PulseFit Gym
          </h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">
            Empowering your fitness journey with personalized plans, expert
            coaching, and a supportive community.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-gray-700 dark:text-gray-400">
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Contact
          </h4>
          <p className="text-sm">123 Fitness Street</p>
          <p className="text-sm">Nairobi, Kenya</p>
          <p className="text-sm mt-2">Email: info@pulsefit.com</p>
          <p className="text-sm">Phone: +254 700 000 000</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4">
            Follow Us
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 dark:hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-black/15 dark:border-white/10 pt-6 text-center text-sm text-gray-700 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Pulsefit Gym. All rights reserved.
      </div>
    </footer>
  );
}
