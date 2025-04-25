import useResumeStore from '../../store/useResumeStore';

export default function PersonalInfoForm() {
  const { personalInfo, updatePersonalInfo } = useResumeStore();

  return (
    <div className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        placeholder="Full Name"
        value={personalInfo.name}
        onChange={(e) => updatePersonalInfo({ name: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) => updatePersonalInfo({ email: e.target.value })}
      />
    </div>
  );
}
