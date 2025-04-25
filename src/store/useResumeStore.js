import { create } from "zustand";

const useResumeStore = create((set) => ({
	personalInfo: { name: "", email: "" },

	experience: [],
	education: [],

	addExperience: (entry) =>
		set((state) => ({ experience: [...state.experience, entry] })),

	addEducation: (entry) =>
		set((state) => ({ education: [...state.education, entry] })),

	updatePersonalInfo: (info) =>
		set((state) => ({
			personalInfo: { ...state.personalInfo, ...info },
		})),
}));

export default useResumeStore;
