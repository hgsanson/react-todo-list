import Badge from "../components/badge";
import Text from "../components/text";
import UseTasks from "../hooks/use-tasks";

export default function TasksSummary() {
	const { createdTasksCount, concludedTasksCount, isLoadingTasks } = UseTasks();

	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Created tasks
				</Text>
				<Badge
					variant="secondary"
					loading={isLoadingTasks}
					className="border border-orange-base"
				>
					{createdTasksCount}
				</Badge>
			</div>

			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Concluded
				</Text>
				<Badge
					variant="primary"
					loading={isLoadingTasks}
					className="border border-green-base"
				>
					{concludedTasksCount} de {createdTasksCount}
				</Badge>
			</div>
		</>
	);
}
