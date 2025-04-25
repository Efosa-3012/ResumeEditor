import useResumeStore from "../../store/useResumeStore";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";

export default function ResumePreview() {
	const { personalInfo } = useResumeStore();

	return (
		<div className="bg-white p-6 rounded shadow space-y-4">
			<h1 className="text-3xl font-bold">{personalInfo.name || "Your Name"}</h1>
			<p className="text-gray-700">{personalInfo.email || "you@example.com"}</p>

			<ExperiencePreview />
			<EducationPreview />
		</div>
	);
}
