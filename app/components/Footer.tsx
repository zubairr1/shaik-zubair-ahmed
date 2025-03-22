const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">JobsPortal</h3>
            <p className="text-gray-300">
              Find your dream job in  JobPortal.com, All companies vacancies can be found here.Fulfill your career dreams of working in FAANGM companies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-gray-300 hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@jobportal.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Sattva Knowledge City, Gachibowli,Hyderabad,Telangana,India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} JobsPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 