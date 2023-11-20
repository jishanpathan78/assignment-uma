import React from "react";

const JobInfo = ({ title, company, location }) => (
  <div>
    <div className="text-black text-2xl leading-8 whitespace-nowrap">
      {title}
    </div>
    <div className="text-black text-base leading-6 whitespace-nowrap">
      {company}
    </div>
    <div className="text-neutral-500 text-base leading-6 whitespace-nowrap">
      {location}
    </div>
  </div>
);

const JobDetails = ({ schedule, experience, salary, employees }) => {
  const detailsStyle = {
    base: "text-neutral-800 text-base leading-6 whitespace-nowrap mt-2",
  };
  return (
    <div>
      <div className={`${detailsStyle.base}`}>{schedule}</div>
      <div className={`${detailsStyle.base}`}>{experience}</div>
      <div className={`${detailsStyle.base}`}>{salary}</div>
      <div className={`${detailsStyle.base}`}>{employees}</div>
    </div>
  );
};

function SavedForm({ jobData }) {
  return (
    <div className="self-stretch border bg-white w-full xl:w-[600px] flex flex-col px-5 pb-4 border-solid border-gray-300 relative">
      <div className="flex flex-col md:flex-row gap-4 my-4 ml-6 md:ml-1">
        <div className="relative w-12 h-12 md:w-12 md:h-12">
          <img
            src={jobData.image}
            alt="Job Image"
            className="aspect-square object-contain absolute top-0 left-0 object-center w-12 h-12"
          />
        </div>
        <div className="flex flex-col justify-between">
          <JobInfo
            title={jobData.title}
            company={jobData.company}
            location={jobData.location}
          />
          <JobDetails
            schedule={jobData.schedule}
            experience={jobData.experience}
            salary={jobData.salary}
            employees={jobData.employees}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 xl:gap-4">
        <button className="text-white cursor-pointer text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch shadow-sm bg-sky-500 mt-6 px-4 py-2 rounded-md">
          Apply Now
        </button>
        <button className="text-sky-500 cursor-pointer border border-sky-500 text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch shadow-sm mt-6 px-4 py-2 rounded-md">
          External Apply
        </button>
      </div>
    </div>
  );
}

export default SavedForm;
