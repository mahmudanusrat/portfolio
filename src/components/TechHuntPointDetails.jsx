const TechHuntPointDetails = () => {
    return (
      <section className="p-10 bg-base-200">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Tech Hunt Point</h1>
          <p className="text-lg text-gray-600 mb-6">
            The Tech Hunt Point is a web application where users can discover, share, and interact with innovative tech products. It features a comprehensive system of user roles, a rich interface, and functionalities that facilitate interaction and content moderation.
          </p>
  
          <a
            href="https://tech-hunt-point.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            🔗 Visit Tech Hunt Point
          </a>
  
          {/* Features Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
  
            {/* General Features */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">General Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Fully responsive design for mobile, tablet, and desktop.</li>
                <li>Private routes ensure secure and seamless navigation.</li>
                <li>Search and filter products by tags.</li>
                <li>Secure authentication with JSON Web Tokens.</li>
              </ul>
            </div>
  
            {/* User Features */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">User Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Browse and view tech products categorized as web apps, AI tools, software, etc.</li>
                <li>Submit new tech products for review.</li>
                <li>Upvote and report products (one action per product).</li>
                <li>Post and view reviews on product detail pages.</li>
              </ul>
            </div>
  
            {/* Moderator Features */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Moderator Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Review and approve/reject submitted products.</li>
                <li>Mark products as featured for enhanced visibility.</li>
                <li>Manage reported content and remove reported products.</li>
              </ul>
            </div>
  
            {/* Admin Features */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700">Admin Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Manage user roles (assign Moderator/Admin roles).</li>
                <li>View site-wide statistics using an interactive pie chart.</li>
                <li>Create and manage discount coupons for premium memberships.</li>
              </ul>
            </div>
          </div>
  
          {/* Technologies Used */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Frontend:</strong> React.js, Tailwind CSS, DaisyUI</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> MongoDB</li>
              <li><strong>Authentication:</strong> Firebase, JWT</li>
              <li><strong>State Management:</strong> Context API</li>
            </ul>
          </div>
  
          {/* Installation and Setup */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Installation and Setup</h2>
            <p className="text-gray-600">
              To run this project locally, follow these steps:
            </p>
            <pre className="bg-gray-100 p-4 rounded-lg text-gray-700 mt-2">
              {`# Clone the repository
  git clone https://github.com/mahmudanusrat/tech-hunt-point.git
  
  # Navigate to the project directory
  cd tech-hunt-point
  
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
              href="https://github.com/mahmudanusrat/tech-hunt-point"
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
  
  export default TechHuntPointDetails;
  