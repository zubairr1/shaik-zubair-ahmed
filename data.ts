export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer (SWE)",
    image: "/images/amazon.png",
    salary: "35k - 40k",
    location: "London,United Kingdom",
    jobtype: "full time",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    image: "/images/microsoft.png",
    salary: "35k - 40k",
    location: "Hyderabad,India",
    jobtype: "full time",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    image: "/images/google.png",
    salary: "45k - 50k",
    location: "Kolkata,India",
    jobtype: "full time",
  },
  {
    id: 4,
    title: "Backend Developer",
    image: "/images/meta.png",
    salary: "25k - 30k",
    location: "USA",
    jobtype: "Part time",
  },
  {
    id: 5,
    title: "Fullstack Developer",
    image: "/images/netflix.png",
    salary: "55k - 60k",
    location: "Australia",
    jobtype: "full time",
  },
  {
    id: 6,
    title: "Web Designer",
    image: "/images/apple.png",
    salary: "25k - 30k",
    location: "Canada",
    jobtype: "Freelance",
  },
];

export default JobData;
