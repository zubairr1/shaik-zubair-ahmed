import Image from 'next/image';
import Link from 'next/link';
import { Job } from '@/data';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link href={`/jobs/${job.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src={job.image}
              alt={job.title}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <div className="flex items-center gap-4 text-gray-600 mt-1">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.jobtype}</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">{job.salary}</p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard; 