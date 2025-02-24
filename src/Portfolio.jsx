import myPic from "../src/assets/my.png";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiAdobe,
} from "react-icons/si";
import { useState } from "react";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-900" /> },
  { name: "PHP", icon: <SiPhp className="text-blue-600" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
];

const toolsSkills = [
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-900" /> },
  { name: "VS Code", icon: <FaLaptopCode className="text-blue-500" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
  { name: "Adobe", icon: <SiAdobe className="text-red-500" /> },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="text-blue-500" />,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const links = (
    <>
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
        <a href="#education" className="hover:text-primary font-semibold">
          Education
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-primary font-semibold">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-primary font-semibold">
          Contact
        </a>
      </li>
    </>
  );
  const skills = {
    frontend: frontendSkills,
    backend: backendSkills,
    tools: toolsSkills,
  };

  return (
    <div className="">
      {/* Navbar */}
      <nav className="bg-base-100 sticky top-0 z-50">
        <div className="navbar max-w-screen-xl mx-auto px-0 py-4">
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
                {links}
              </ul>
            </div>

            {/* Branding */}
            <h2 className="text-2xl font-bold  tracking-wide hover:scale-105 transition-all">
              Mahmuda Nusrat
            </h2>
          </div>

          {/* Navbar Center (For Large Screens) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
              {links}
            </ul>
          </div>

          {/* Call-to-Action Button */}
          <div className="navbar-end">
            <a
              href="#contact"
              className="btn bg-[#E38445] px-5 py-2 text-white font-semibold rounded-md shadow-md hover:scale-105 transition-all"
            >
              Chat With Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className=" bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] flex justify-center items-center min-h-screen text-center">
        <div className="max-w-screen-xl space-y-8">
          <h2 className="text-3xl font-semibold text-gray-700 animate-fade-in">
            Welcome To My World
          </h2>
          <h1 className="text-5xl font-bold animate-bounce">
            I’m{" "}
            <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
              Mahmuda Nusrat
            </span>
          </h1>
          <p className="text-2xl animate-fade-in">
            <span className="border-2 border-[#E38445] rounded-lg px-5 py-2 text-lg font-medium">
              Web Developer
            </span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className=" bg-[#ededed] py-24 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Image Section */}
          <div className="relative group">
            <img
              src={myPic}
              alt="Mahmuda Nusrat"
              className="w-72 sm:w-80 md:w-96 rounded-lg shadow-2xl border-4 border-[#E38445] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#E38445] rounded-full opacity-75 group-hover:opacity-100 transition-opacity"></span>
          </div>

          {/* About Text */}
          <div className="text-center  lg:text-left max-w-2xl">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
                About Me
              </span>
              <span className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-[#E38445] transform -translate-x-1/2 lg:translate-x-0"></span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Hi! I’m{" "}
              <span className="font-bold text-gray-900">Mahmuda Nusrat</span>, a
              full-stack developer passionate about creating user-friendly,
              modern web applications. I specialize in{" "}
              <span className="font-medium text-[#E38445]">
                JavaScript, React, Node.js, Express, MongoDB, and Next.js
              </span>
              . I love solving challenges through development, whether it’s
              designing intuitive UI or optimizing server-side performance. When
              I’m not coding, I enjoy exploring new technologies, reading about
              web trends, painting, and photography. I also love sports like
              badminton and jogging to stay active and focused.
            </p>

            {/* Buttons Section */}
            <div className="mt-6 flex flex-col md:flex-row gap-5">
              <a
                href="#contact"
                className="px-6 py-3 text-lg font-semibold bg-[#E38445] text-white rounded-full shadow-lg hover:scale-105 hover:bg-[#ff6600] transition-all"
              >
                Connect with Me
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1MKrilNShcnQm6DvrzZP59wVRK9vfXOZO"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold bg-gray-700 text-white rounded-full shadow-lg hover:scale-105 hover:bg-black transition-all"
              >
                📄 Download Resume
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex justify-center lg:justify-start gap-5">
              {[
                {
                  icon: <FiFacebook />,
                  link: "https://www.facebook.com/mahmuda.nusraat1",
                },
                {
                  icon: <FiLinkedin />,
                  link: "https://www.linkedin.com/in/mahmuda-nusrat/",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/mahmudanusrat",
                },
                {
                  icon: <FiTwitter />,
                  link: "https://twitter.com/MahmudaNusrat",
                },
              ].map(({ icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5e5e5e] text-white text-2xl shadow-lg transition-all hover:scale-110 hover:shadow-[0_0_15px_#E38445]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-[#ededed] py-24 px-6">
        <div className="max-w-screen-xl mx-auto text-center lg:text-left lg:flex lg:items-start lg:gap-12">
          {/* Left Section: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
                My Skills
              </span>
              <span className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-[#E38445] transform -translate-x-1/2 lg:translate-x-0"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Here are the technologies and tools I work with, categorized into
              frontend, backend, and development tools.
            </p>

            {/* Toggle Buttons */}
            <div className="mb-8 flex flex-wrap lg:flex-row lg:items-start gap-4">
              <button
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
                  activeCategory === "frontend"
                    ? "bg-[#E38445] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveCategory("frontend")}
              >
                Frontend
              </button>
              <button
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
                  activeCategory === "backend"
                    ? "bg-[#E38445] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveCategory("backend")}
              >
                Backend
              </button>
              <button
                className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all ${
                  activeCategory === "tools"
                    ? "bg-[#E38445] text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => setActiveCategory("tools")}
              >
                Tools
              </button>
            </div>
          </div>

          {/* Right Section: Skills Grid */}
          <div className="lg:w-1/2 grid grid-cols-3 lg:grid-cols-4 gap-8">
            {skills[activeCategory].map((skill, index) => (
              <div
                key={index}
                className="group bg-white shadow-lg p-6 rounded-xl flex flex-col items-center justify-center transition-all hover:scale-110 hover:shadow-2xl"
              >
                <div className="text-5xl group-hover:opacity-50 transition-opacity">
                  {skill.icon}
                </div>
                <span className="opacity-0 group-hover:opacity-100 text-lg font-semibold absolute mt-12 bg-white px-3 py-1 rounded-lg shadow-md transition-all">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* eductaion Section */}
      <div id="education" className="bg-[#ededed] py-24 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 relative inline-block">
            <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
              Education
            </span>
            <span className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-[#E38445] transform -translate-x-1/2 lg:translate-x-0"></span>
          </h2>

          {/* Education Cards */}
          <div className="space-y-6 lg:space-y-0 lg:flex lg:justify-center lg:gap-12">
            {/* Card 1 */}
            <div className="card bg-white shadow-lg border-l-4 border-[#E38445] p-6 rounded-lg transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                University of Information Technology and Sciences
              </h3>
              <p className="text-xl text-gray-700">
                B.Sc. in Computer Science and Engineering
              </p>
            </div>

            {/* Card 2 */}
            <div className="card bg-white shadow-lg border-l-4 border-[#E38445] p-6 rounded-lg transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                Abujar Gifari University College
              </h3>
              <p className="text-xl text-gray-700">
                Higher Secondary School Certificate | Science
              </p>
            </div>

            {/* Card 3 */}
            <div className="card bg-white shadow-lg border-l-4 border-[#E38445] p-6 rounded-lg transition-all hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900">
                Al Furqan English High School & Girls College
              </h3>
              <p className="text-xl text-gray-700">
                Secondary School Certificate | Science
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="bg-[#ededed] py-24 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12 relative inline-block">
            <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
              My Projects
            </span>
            <span className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-[#E38445] transform -translate-x-1/2 lg:translate-x-0"></span>
          </h2>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
            {/* Project 1 */}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <figure className="w-full h-60">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedTG2TLMaCrIr49bxXB6JDu7eyVbefq5Bdw&s"
                  alt="Tech Hunt Point"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-center p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Tech Hunt Point
                </h3>
                <p className="text-gray-700">
                  A web app to discover, share, and interact with innovative
                  tech products.
                </p>
                <div className="mt-4">
                  <Link
                    to="/tech-hunt-point"
                    className="px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#E38445] to-[#ff6600] hover:opacity-90 transition-all"
                  >
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <figure className="w-full h-60">
                <img
                  src="https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/HOW-DO-YOU-DESIGN-A-LIBRARY-MANAGEMENT-SYSTEM-min.png"
                  alt="Library Management System"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-center p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Library Management System
                </h3>
                <p className="text-gray-700">
                  A web-based system to manage books, borrowing, and returns
                  efficiently.
                </p>
                <div className="mt-4">
                  <Link
                    to="/library-management-system"
                    className="px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#E38445] to-[#ff6600] hover:opacity-90 transition-all"
                  >
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <figure className="w-full h-60">
                <img
                  src="https://unispaces.sgp1.digitaloceanspaces.com/nebula/images/1716978559207.svg"
                  alt="Visa Connect"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-center p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Visa Connect
                </h3>
                <p className="text-gray-700">
                  A portal to simplify the visa application process and track
                  applications.
                </p>
                <div className="mt-4">
                  <Link
                    to="/visa-connect"
                    className="px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#E38445] to-[#ff6600] hover:opacity-90 transition-all"
                  >
                    View More / Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-[#ededed] py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Contact Info Section */}
            <div className="flex-1  p-8">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-12 relative inline-block">
                <span className="bg-gradient-to-r from-[#E38445] to-[#ff6600] text-transparent bg-clip-text">
                  Contact
                </span>
                <span className="absolute -bottom-2 left-1/2 lg:left-0 w-24 h-1 bg-[#E38445] transform -translate-x-1/2 lg:translate-x-0"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Get in touch and let me know how I can help. Fill out the form,
                and I’ll be in touch as soon as possible.
              </p>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="text-3xl text-gray-800">
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
                  <div className="text-3xl text-gray-800">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone:</h3>
                    <a
                      href="tel:+8801744248461"
                      className="text-blue-600 hover:underline"
                    >
                      +8801744248461
                    </a>
                  </div>
                </li>

                <li className="flex items-center space-x-4">
                  <div className="text-3xl text-gray-800">
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email:</h3>
                    <a
                      href="mailto:mnusrat454@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      mnusrat454@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
              <form action="#" className="space-y-6">
                {/* Name Field */}
                <div className="form-control">
                  <label htmlFor="name" className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g Mahmuda Nusrat"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#E38445] transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g mnusrat@gmail.com"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#E38445] transition-all"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="form-control">
                  <label htmlFor="phone" className="label">
                    <span className="label-text font-semibold">Phone</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="input input-bordered w-full focus:ring-2 focus:ring-[#E38445] transition-all"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-control">
                  <label htmlFor="message" className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered w-full focus:ring-2 focus:ring-[#E38445] transition-all"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#E38445] to-[#ff6600] hover:opacity-90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-8 text-center">
        <p className="text-lg text-[#5E5E5E]">
          &copy; 2025 <span className="text-[#E38445]">Mahmuda Nusrat</span>.
          All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
