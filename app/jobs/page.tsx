import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-12 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">
            Browse All Jobs
          </h1>
          <p className="text-lg">
            Find the perfect opportunity that matches your skills and interests
          </p>
        </div>
      </div>
      
      <SearchBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
        </div>
        <JobList />
      </div>
    </main>
  );
} 