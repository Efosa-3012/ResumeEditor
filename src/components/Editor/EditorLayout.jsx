import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';

export default function EditorLayout() {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Resume Editor</h2>
      <PersonalInfoForm />
      <ExperienceForm />
      <EducationForm />
    </div>
  );
}
