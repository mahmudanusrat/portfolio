const TechHuntPointDetails = () => {
  return (
    <section className="p-10 bg-[#f9f9f9]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tech Hunt Point</h1>
        <p className="text-lg text-gray-600 mb-6">
          The Tech Hunt Point is a web application where users can discover, share, and interact with innovative tech products. It features a comprehensive system of user roles, a rich interface, and functionalities that facilitate interaction and content moderation.
        </p>

        {/* Live Project Link */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Project Link</h2>
          <a
            href="https://tech-hunt-point.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#E38445] to-[#ff6600] text-white hover:opacity-80 transition-all py-3 px-6 rounded-lg"
          >
            🔗 Visit Live Project
          </a>
        </div>

        {/* Main Technology Stack */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Main Technology Stack</h2>
          <p className="text-gray-600">
            The project uses a modern stack that ensures a seamless user experience and efficient backend processing. Below are the primary technologies used:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li><strong>Frontend:</strong> React.js, Tailwind CSS, DaisyUI</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Authentication:</strong> Firebase, JWT</li>
            <li><strong>State Management:</strong> Context API</li>
          </ul>
        </div>

        {/* Challenges Faced */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Challenges Faced</h2>
          <p className="text-gray-600">
            While developing this project, several challenges arose:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Integrating Firebase authentication with JWT for seamless and secure login</li>
            <li>Ensuring smooth and responsive drag-and-drop functionality for product submissions</li>
            <li>Maintaining real-time data synchronization across users</li>
            <li>Implementing effective moderation features to manage content without over-complicating the interface</li>
          </ul>
        </div>

        {/* Potential Improvements and Future Plans */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Improvements and Future Plans</h2>
          <p className="text-gray-600">
            There are several areas where the project can be improved and expanded:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Integrating more advanced filtering options for browsing products (e.g., sorting by ratings, price)</li>
            <li>Adding additional user interaction features, such as product comments and forums</li>
            <li>Implementing a robust search functionality with an intelligent search bar</li>
            <li>Improving the moderator interface with tools for batch product management</li>
            <li>Enhancing the mobile version of the site for a smoother user experience</li>
          </ul>
        </div>

        {/* GitHub Repository */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Repository</h2>
          <a
            href="https://github.com/mahmudanusrat/tech-hunt-point"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-[#E38445] to-[#ff6600] text-white hover:opacity-80 transition-all py-3 px-6 rounded-lg"
          >
            🔗 View on GitHub (Client)
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechHuntPointDetails;
