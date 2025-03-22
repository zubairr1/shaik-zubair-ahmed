import Image from 'next/image';
import Link from 'next/link';
import JobData from '@/data';

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const jobId = parseInt(params.id);
  const job = JobData.find((job) => job.id === jobId);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold mb-4">Job not found</h1>
        <p className="mb-6">Sorry, the job you're looking for doesn't exist.</p>
        <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Jobs</Link>
        
        <div className="bg-white rounded-lg shadow-md p-8 mt-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="relative w-20 h-20 md:w-32 md:h-32 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={job.image}
                alt={job.title}
                fill
                className="object-contain p-2"
              />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{job.jobtype}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.salary}</span>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <p className="text-gray-700 mb-6">
              We are seeking a talented {job.title} to join our team. The ideal candidate will have a strong background in software development and a passion for creating high-quality applications.
            </p>
            
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Bachelor's degree in Computer Science or related field</li>
              <li>3+ years of experience in software development</li>
              <li>Strong knowledge of programming languages and frameworks</li>
              <li>Excellent problem-solving skills</li>
              <li>Good communication and teamwork abilities</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Competitive salary: {job.salary}</li>
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Health insurance</li>
              <li>Professional development opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 