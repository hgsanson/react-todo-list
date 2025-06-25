import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState, type Task } from "../models/task";
import TaskItem from "./task-item";

export default function TasksList() {
	const { tasks, isLoadingTasks } = useTasks();
	const { prepareTask } = useTask();

	console.log(tasks);

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					className="w-full"
					onClick={handleNewTask}
					disabled={
						tasks.some((task) => task.state === TaskState.Creating) ||
						isLoadingTasks
					}
				>
					New task
				</Button>
			</section>
			<section className="space-y-2">
				{!isLoadingTasks &&
					tasks.map((task) => <TaskItem key={task.id} task={task} />)}
				{isLoadingTasks && (
					<>
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
						<TaskItem task={{} as Task} loading />
					</>
				)}
			</section>
		</>
	);
}
