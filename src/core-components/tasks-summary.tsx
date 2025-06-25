import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
	const { createdTasksCount, concludedTasks } = useTasks();

	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Created tasks
				</Text>
				<Badge variant="secondary" className="border border-orange-base">
					{createdTasksCount}
				</Badge>
			</div>

			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Concluded
				</Text>
				<Badge variant="primary" className="border border-green-base">
					{concludedTasks} de {createdTasksCount}
				</Badge>
			</div>
		</>
	);
}
