import myPic from "../src/assets/my.png";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for Small Screens */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-3 bg-white rounded-md shadow-md z-10"
            >
              <li>
                <a href="#home" className="hover:text-primary font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary font-semibold">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary font-semibold"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Branding */}
          <a className="btn btn-ghost text-2xl font-bold text-primary tracking-wide hover:scale-105 transition-all">
            🚀 Mahmuda Nusrat
          </a>
        </div>

        {/* Navbar Center (For Large Screens) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
            <li>
              <a
                href="#home"
                className="hover:text-primary transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-primary transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-primary transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <div className="navbar-end">
          <a
            href="#contact"
            className="btn btn-primary px-5 py-2 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all"
          >
            ✨ Chat With Me
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-screen-xl min-h-[80vh] flex items-center mx-auto px-6 md:px-12">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 items-center place-items-center gap-8">
          {/* Left Side - Text Section */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl font-semibold text-gray-700 animate-fade-in">
              👋 Welcome To My World
            </h2>
            <h1 className="text-5xl font-bold text-primary animate-bounce">
              I’m Mahmuda Nusrat
            </h1>
            <p className="py-4 text-2xl text-gray-600 animate-fade-in">
              <span className="badge badge-secondary badge-outline p-3 text-lg">
                Frontend Developer
              </span>
              <span className="badge badge-primary badge-outline p-3 text-lg ml-2">
                Web Enthusiast
              </span>
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary px-6 py-3 text-lg shadow-lg hover:scale-105 transition-all"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Right Side - Image Section */}
          <div className="flex justify-center relative">
            <div className="relative group">
              <img
                src={myPic}
                alt="Mahmuda Nusrat"
                className="w-96 rounded-lg shadow-xl transition-all transform hover:scale-105 hover:rotate-1"
              />
              {/* Animated Ring Behind Image */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-full blur-3xl scale-125"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Section */}
      <section id="social-links" className="p-10 bg-base-200 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Follow Me</h2>
        <p className="text-lg text-gray-600 mb-6">
          Lets connect on social media and stay in touch!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/mahmuda.nusraat1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-circle tooltip flex items-center justify-center"
            data-tip="Facebook"
          >
            <FiFacebook className="text-white text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/mahmuda-nusrat/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-circle tooltip flex items-center justify-center"
            data-tip="LinkedIn"
          >
            <FiLinkedin className="text-white text-2xl" />
          </a>

          <a
            href="https://github.com/mahmudanusrat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-circle tooltip flex items-center justify-center"
            data-tip="GitHub"
          >
            <FaGithub className="text-white text-2xl" />
          </a>

          <a
            href="https://twitter.com/MahmudaNusrat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-circle tooltip flex items-center justify-center"
            data-tip="Twitter"
          >
            <FiTwitter className="text-white text-2xl" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="p-6 md:p-10 bg-gradient-to-b from-gray-50 to-gray-200"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Hi! I’m{" "}
            <span className="font-semibold text-gray-900">Mahmuda Nusrat</span>,
            a full-stack developer passionate about creating user-friendly,
            modern web applications. I specialize in{" "}
            <span className="font-medium text-gray-900">
              JavaScript, React, Node.js, Express, MongoDB, and Next.js
            </span>
            .
            <br />
            <br />
            I love solving challenges through development, whether it’s
            designing intuitive UI or optimizing server-side performance. When
            I’m not coding, you can find me exploring new technologies, reading
            about the latest trends in web development, or enjoying creative
            hobbies like painting and photography.
            <br />
            <br />
            I’m also an avid sports enthusiast who believes in a balanced
            lifestyle. Sports like badminton and jogging help me stay active,
            energized, and focused.
            <br />
            <br />
            <span className="font-semibold text-gray-900">
              Let’s connect and create something amazing together!
            </span>
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="btn btn-primary text-lg font-semibold"
            >
              Connect with Me
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="p-10 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div className="card shadow-xl bg-base-100">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  University of Information Technology and Sciences
                </h3>
                <p className="text-xl">
                  B.Sc. in Computer Science and Engineering
                </p>
              </div>
            </div>

            <div className="card shadow-xl bg-base-100">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Abujar Gifari University College
                </h3>
                <p className="text-xl">
                  Higher Secondary School Certificate | Science
                </p>
              </div>
            </div>

            <div className="card shadow-xl bg-base-100">
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Al Furqan English High School & Girls College
                </h3>
                <p className="text-xl">
                  Secondary School Certificate | Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10 bg-base-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
            Projects
            <span className="absolute -bottom-2 left-1/2 w-20 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* Project 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image */}
              <figure className="w-full h-64 p-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedTG2TLMaCrIr49bxXB6JDu7eyVbefq5Bdw&s"
                  alt="Tech Hunt Point"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Tech Hunt Point
                </h3>
                <p className="text-gray-700">
                  A web app to discover, share, and interact with innovative
                  tech products.
                </p>

                {/* Buttons */}
                <div className="card-actions justify-end mt-4">
                  <Link
                    to="/tech-hunt-point"
                    className="btn btn-primary btn-sm sm:btn-md"
                  >
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-5">
                <img
                  src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/HOW-DO-YOU-DESIGN-A-LIBRARY-MANAGEMENT-SYSTEM-min.png"
                  alt="Library Management System"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Library Management System
                </h3>
                <p className="text-gray-700">
                  A web-based system to manage books, borrowing, and returns
                  efficiently.
                </p>
                <div className="card-actions justify-end">
                <a
                    href="/library-management-system"
                    className="btn btn-primary btn-sm sm:btn-md"
                  >
                    View More / Details
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-5">
                <img
                  src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1716978559207.svg"
                  alt="Visa Connect"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Visa Connect
                </h3>
                <p className="text-gray-700">
                  A portal to simplify the visa application process and track
                  applications.
                </p>
                <div className="card-actions justify-end">
                  <a href="/visa-connect" className="btn btn-primary">
                    View More / Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-4xl font-bold text-gray-800">Contact</p>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              Get in touch and let me know how I can help. Fill out the form,
              and I’ll be in touch as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Section */}
            <div>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="text-2xl text-gray-800">
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address:</h3>
                    <address className="text-gray-700">
                      Dhaka, Bangladesh
                    </address>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="text-2xl text-gray-800">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone:</h3>
                    <a href="tel:+8801744248461" className="text-blue-600">
                      +8801744248461
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="text-2xl text-gray-800">
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email:</h3>
                    <a
                      href="mailto:mnusrat454@gmail.com"
                      className="text-blue-600"
                    >
                      mnusrat454@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <form action="#" className="space-y-6">
                {/* Name Field */}
                <div className="form-control">
                  <label htmlFor="name" className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g Mahmuda Nusrat"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g mnusrat@gmail.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="form-control">
                  <label htmlFor="phone" className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-control">
                  <label htmlFor="message" className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered w-full"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 bg-gray-900 text-white text-center">
        <p className="text-lg">
          &copy; 2025 Mahmuda Nusrat. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
