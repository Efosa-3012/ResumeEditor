import {
	DndContext,
	closestCenter,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {
	arrayMove,
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import useResumeStore from "../../store/useResumeStore";

function DraggableItem({ id, children }) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<div ref={setNodeRef} {...attributes} {...listeners} style={style}>
			{children}
		</div>
	);
}

export default function DraggableExperienceList() {
	const { experience, setExperience } = useResumeStore();
	const sensors = useSensors(useSensor(PointerSensor));

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active.id !== over.id) {
			const oldIndex = experience.findIndex(
				(item, i) => i.toString() === active.id
			);
			const newIndex = experience.findIndex(
				(item, i) => i.toString() === over.id
			);
			const reordered = arrayMove(experience, oldIndex, newIndex);
			setExperience(reordered);
		}
	};

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Reorder Experience</h3>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={experience.map((_, index) => index.toString())}
					strategy={verticalListSortingStrategy}
				>
					{experience.map((exp, index) => (
						<DraggableItem key={index} id={index.toString()}>
							<div className="p-3 border rounded bg-white shadow-sm">
								<strong>{exp.jobTitle}</strong> @ {exp.company}
								<div className="text-sm text-gray-600">
									{exp.startDate} – {exp.endDate}
								</div>
							</div>
						</DraggableItem>
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
}
