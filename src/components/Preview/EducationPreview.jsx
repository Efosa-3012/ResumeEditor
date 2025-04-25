import useResumeStore from "../../store/useResumeStore";

export default function EducationPreview() {
	const { education } = useResumeStore();

	if (education.length === 0) return null;

	return (
		<div className="mt-6">
			<h3 className="text-xl font-semibold mb-2">Education</h3>
			<div className="space-y-4">
				{education.map((edu, index) => (
					<div key={index} className="border-b pb-2">
						<div className="flex justify-between">
							<strong>{edu.school}</strong>
							<span>
								{edu.startDate} – {edu.endDate}
							</span>
						</div>
						<p className="text-sm text-gray-700">{edu.degree}</p>
					</div>
				))}
			</div>
		</div>
	);
}
