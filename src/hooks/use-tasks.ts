import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export default function UseTasks() {
	const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	return {
		tasks,
		tasksCount: tasks.length,
		concludedTasks: tasks.filter((task) => task.concluded).length,
	};
}
