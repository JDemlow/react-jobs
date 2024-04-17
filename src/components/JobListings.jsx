import JobListing from "./JobListing";
import jobs from "../jobs.json";

const JobListings = () => {
  const recentJobs = jobs.slice(0, 3);

  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
