import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl mb-8">
            Browse through thousands of job opportunities
          </p>
        </div>
      </div>
      
      <SearchBar />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-8">Featured Jobs</h2>
        <JobList />
      </div>
    </main>
  );
}
