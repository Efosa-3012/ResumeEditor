import useResumeStore from '../../store/useResumeStore';

export default function ExperiencePreview() {
  const { experience } = useResumeStore();

  if (experience.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Experience</h3>
      <div className="space-y-4">
        {experience.map((job, index) => (
          <div key={index} className="border-b pb-2">
            <div className="flex justify-between">
              <strong>{job.jobTitle} @ {job.company}</strong>
              <span>{job.startDate} – {job.endDate}</span>
            </div>
            <p className="text-sm text-gray-700">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
