const LibraryManagementDetails = () => {
  return (
    <section className="p-10 bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        {/* Project Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Nest Portal</h1>

        {/* Project Description */}
        <p className="text-lg text-gray-600 mb-6">
          A web-based Library Management System for a school, enabling efficient book management with features like adding, updating, borrowing, and returning books. The system ensures seamless transactions and offers a user-friendly interface for all users.
        </p>

        {/* Live Demo Link */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Demo Link</h2>
          <a
            href="https://library-management-72d8f.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#E38445] to-[#ff6600] text-white hover:opacity-80 transition-all py-3 px-6 rounded-lg"
          >
            🔗 Visit Book Nest Portal
          </a>
        </div>

        {/* Main Technology Stack */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Main Technology Stack</h2>
          <p className="text-gray-600">
            The project leverages the following technologies to provide a rich user experience and maintain seamless backend interactions:
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
            During development, a few challenges were encountered:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Ensuring secure and smooth Firebase Authentication integration</li>
            <li>Handling CRUD operations effectively for book management</li>
            <li>Creating a responsive and user-friendly design across all devices</li>
            <li>Maintaining smooth data synchronization between the frontend and backend</li>
          </ul>
        </div>

        {/* Potential Improvements and Future Plans */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Improvements and Future Plans</h2>
          <p className="text-gray-600">
            Future updates and enhancements could include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Adding advanced filtering and search functionality for books</li>
            <li>Integrating real-time updates for book availability status</li>
            <li>Adding an admin panel for managing users and books more effectively</li>
            </ul>
        </div>

        {/* GitHub Repository */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Repository</h2>
          <a
            href="https://github.com/mahmudanusrat/library-management-system"
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

export default LibraryManagementDetails;
