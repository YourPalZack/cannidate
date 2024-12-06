import React from 'react';
import {
  MapPinIcon,
  BriefcaseIcon,
  ThumbsUpIcon,
  MessageCircleIcon,
  ShareIcon,
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Part Time Budtender',
    company: '420 Blaze It Dispensary',
    logo: 'https://source.unsplash.com/random/100x100?tech',
    description:
      'Looking for a part time bud tender in Western Colorado. 20-30 hours per week. Experience preffered. ',
    location: 'The Big Gun, Colorado',
    type: 'Part-time',
    postedAt: '2 days ago',
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    title: 'Cannabis Trimmer',
    company: 'Happy Plants',
    logo: 'https://source.unsplash.com/random/100x100?design',
    description:
      'Hiring for a role at our growing operation in Colorado. Looking for someone with cannabis trimming experience or previous horticulture experience.',
    location: 'Westside, Colorado',
    type: 'Full-time',
    postedAt: '1 week ago',
    likes: 18,
    comments: 3,
  },
  {
    id: 3,
    title: 'Weed Science Lead',
    company: 'Pothead Chemists',
    logo: 'https://source.unsplash.com/random/100x100?data',
    description:
      'Need someone with a big brain to help do science experiments with weed strains. Probably the sickest job in cannabis.',
    location: 'Remote',
    type: 'Full-time',
    postedAt: '3 days ago',
    likes: 32,
    comments: 7,
  },
];

const JobList: React.FC = () => {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
        >
          <div className="flex items-center mb-4">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {job.company}
              </h3>
              <p className="text-sm text-gray-500">{job.postedAt}</p>
            </div>
          </div>
          <h4 className="text-lg font-semibold text-green-600 mb-2">
            {job.title}
          </h4>
          <p className="text-gray-600 mb-4">{job.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center">
              <BriefcaseIcon className="w-4 h-4 mr-1" />
              {job.type}
            </div>
          </div>
          <div className="flex justify-between items-center border-t border-gray-200 pt-4">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-green-600">
                <ThumbsUpIcon className="w-5 h-5 mr-1" />
                {job.likes}
              </button>
              <button className="flex items-center text-gray-600 hover:text-green-600">
                <MessageCircleIcon className="w-5 h-5 mr-1" />
                {job.comments}
              </button>
              <button className="flex items-center text-gray-600 hover:text-green-600">
                <ShareIcon className="w-5 h-5 mr-1" />
                Share
              </button>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
