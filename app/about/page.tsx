export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            About JobsPortal
          </h1>
          <p className="text-lg">
            Learn more about our mission and values
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-8">
            At JobsPortal, we are dedicated to connecting talented individuals with their dream jobs. 
            Our platform serves as a bridge between job seekers and employers, streamlining the 
            recruitment process and helping both parties find the perfect match.
          </p>
          
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Transparency</h3>
              <p className="text-gray-700">
                We believe in providing honest and clear information to both job seekers and employers.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Accessibility</h3>
              <p className="text-gray-700">
                Our platform is designed to be accessible to everyone, regardless of background or experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h3>
              <p className="text-gray-700">
                We continuously innovate to provide the best possible experience for our users.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Our Team</h2>
          <p className="text-gray-700 mb-8">
            Our diverse team of professionals is passionate about helping people find jobs they love. 
            With backgrounds in recruitment, technology, and customer service, we bring a wealth of 
            expertise to the table.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or feedback? We'd love to hear from you. Please visit our 
            <a href="/contact" className="text-blue-600 hover:underline"> Contact page</a> to get in touch.
          </p>
        </div>
      </div>
    </main>
  );
} 