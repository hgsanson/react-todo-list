import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function UseTasks() {
	const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = useState(true);

	useEffect(() => {
		const startLoading = async () => {
			await delay(2000);
			setIsLoadingTasks(false);
		};
		startLoading();
	}, []); // executa só uma vez na montagem

	useEffect(() => {
		setTasks(tasksData);
	}, [tasksData]);

	// async function fetchTasks() {
	// 	if (isLoadingTasks) {
	// 		await delay(2000);
	// 		setIsLoadingTasks(false);
	// 	}

	// 	setTasks(tasksData);
	// }

	// useEffect(() => {
	// 	fetchTasks();
	// }, [tasksData]);

	return {
		tasks,
		createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
			.length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
		isLoadingTasks,
	};
}
