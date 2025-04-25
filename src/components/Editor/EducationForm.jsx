import { useState } from 'react';
import useResumeStore from '../../store/useResumeStore';

export default function EducationForm() {
  const { addEducation } = useResumeStore();

  const [form, setForm] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(form);
    setForm({ school: '', degree: '', startDate: '', endDate: '' });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <h2 className="font-semibold text-lg">Education</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="School Name"
        value={form.school}
        onChange={(e) => setForm({ ...form, school: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Degree / Field"
        value={form.degree}
        onChange={(e) => setForm({ ...form, degree: e.target.value })}
      />
      <div className="flex gap-2">
        <input
          className="w-full p-2 border rounded"
          placeholder="Start Date"
          value={form.startDate}
          onChange={(e) => setForm({ ...form, startDate: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="End Date"
          value={form.endDate}
          onChange={(e) => setForm({ ...form, endDate: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Education
      </button>
    </form>
  );
}
