import { useState } from "react";
import useResumeStore from "../../store/useResumeStore";

export default function ExperienceForm() {
	const { addExperience } = useResumeStore();

	const [form, setForm] = useState({
		jobTitle: "",
		company: "",
		startDate: "",
		endDate: "",
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		addExperience(form);
		setForm({
			jobTitle: "",
			company: "",
			startDate: "",
			endDate: "",
			description: "",
		});
	};

	return (
		<form className="space-y-3" onSubmit={handleSubmit}>
			<h2 className="font-semibold text-lg">Experience</h2>

			<input
				className="w-full p-2 border rounded"
				placeholder="Job Title"
				value={form.jobTitle}
				onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
			/>
			<input
				className="w-full p-2 border rounded"
				placeholder="Company"
				value={form.company}
				onChange={(e) => setForm({ ...form, company: e.target.value })}
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
			<textarea
				className="w-full p-2 border rounded"
				rows={3}
				placeholder="Description"
				value={form.description}
				onChange={(e) => setForm({ ...form, description: e.target.value })}
			></textarea>

			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
			>
				Add Experience
			</button>
		</form>
	);
}
