
const LibraryManagementDetails = () => {
    return (
        <section className="p-10 bg-base-200">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Project Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Nest Portal</h1>
          
          {/* Project Description */}
          <p className="text-lg text-gray-600 mb-6">
            A web-based Library Management System for a school, enabling efficient book management with features like adding, updating, borrowing, and returning books. The system ensures seamless transactions and offers a user-friendly interface for all users.
          </p>
      
          {/* Live Demo Link */}
          <a
            href="https://library-management-72d8f.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            🔗 Visit Book Nest Portal
          </a>
      
          {/* Features Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
      
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Fully responsive design for mobile, tablet, and desktop.</li>
              <li>Secure authentication using email/password or social logins (Google/GitHub).</li>
              <li>Search and filter available books by type.</li>
              <li>Toast notifications for all CRUD operations.</li>
              <li>Loading spinner during data fetch operations.</li>
            </ul>
          </div>
      
          {/* Technologies Used */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB & Mongoose</li>
              <li><strong>Authentication:</strong> Firebase Authentication</li>
            </ul>
          </div>
      
          {/* Installation and Setup */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation and Setup</h2>
            <p className="text-gray-600">To run this project locally, follow these steps:</p>
            
            <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 mt-2">
              {`# Clone the repository
      git clone https://github.com/mahmudanusrat/library-management-system.git
      
      # Navigate to the project directory
      cd library-management-system
      
      # Install dependencies
      npm install
      
      # Start the development server
      npm start`}
            </pre>
          </div>
      
          {/* GitHub Repository */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">GitHub Repository</h2>
            <a
              href="https://github.com/mahmudanusrat/library-management-system"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </section>
      
      );
    };

export default LibraryManagementDetails;