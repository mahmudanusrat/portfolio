const VisaConnectDetails = () => {
  return (
    <section className="p-10 bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Project Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Visa Connect Portal</h1>

        {/* Project Description */}
        <p className="text-lg text-gray-600 mb-6">
          Visa Connect Portal simplifies the visa application process, allowing users to check requirements, apply for visas online, and track their applications in real-time.
        </p>

        {/* Live Demo Link */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Demo Link</h2>
          <a
            href="https://visa-navigator-22c06.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#E38445] to-[#ff6600] text-white hover:opacity-80 transition-all py-3 px-6 rounded-lg"
          >
            🔗 Visit Visa Connect Portal
          </a>
        </div>

        {/* Main Technology Stack */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Main Technology Stack</h2>
          <p className="text-gray-600">
            The Visa Connect Portal utilizes modern web technologies to provide a seamless experience for users and admins alike:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB & Mongoose</li>
            <li><strong>Authentication:</strong> Firebase Authentication</li>
          </ul>
        </div>

        {/* Challenges Faced */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges Faced</h2>
          <p className="text-gray-600">
            During development, several challenges were encountered:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Integrating Firebase Authentication with both email/password and Google login</li>
            <li>Implementing secure handling of sensitive user information</li>
            <li>Ensuring the system can scale for future features and large user bases</li>
            <li>Building an intuitive interface for both applicants and administrators</li>
          </ul>
        </div>

        {/* Potential Improvements and Future Plans */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Improvements and Future Plans</h2>
          <p className="text-gray-600">
            Future improvements include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Adding real-time visa application status updates</li>
            <li>Integrating more advanced search and filter options for visa types and countries</li>
            <li>Providing a notification system for application milestones and updates</li>
            <li>Improving the mobile experience to ensure full functionality across all devices</li>
            <li>Enhancing the admin panel with advanced data analytics for tracking visa applications</li>
          </ul>
        </div>

        {/* GitHub Repository */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Repository</h2>
          <a
            href="https://github.com/mahmudanusrat/visa-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#E38445] to-[#ff6600] text-white hover:opacity-80 transition-all py-3 px-6 rounded-lg"
          >
            🔗 View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisaConnectDetails;
