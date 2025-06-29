import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import React, { useState } from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
	task: Task;
	loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
	const [isEditing, setIsEditing] = useState(
		task?.state === TaskState.Creating,
	);

	const [taskTitle, setTaskTitle] = useState(task.title || "");
	const {
		updateTask,
		updateTaskStatus,
		deleteTask,
		isUpdatingTask,
		isDeletingTask,
	} = useTask();

	function handleEditTask() {
		setIsEditing(true);
	}

	function handleExitEditTask() {
		if (task.state === TaskState.Creating) {
			deleteTask(task.id);
		}

		setIsEditing(false);
	}

	function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value || "");
	}

	async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		await updateTask(task.id, { title: taskTitle });
		setIsEditing(false);
	}

	function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
		const checked = e.target.checked;

		updateTaskStatus(task.id, checked);
	}

	async function handleDeleteTask() {
		await deleteTask(task.id);
	}

	return (
		<Card size="md">
			{!isEditing ? (
				<div className="flex items-center gap-4">
					<InputCheckbox
						checked={task?.concluded}
						onChange={handleChangeTaskStatus}
						loading={loading}
					/>
					{!loading ? (
						<Text
							className={cx("flex-1", {
								"line-through": task?.concluded,
							})}
						>
							{task?.title}
						</Text>
					) : (
						<Skeleton className="flex-1 h-6" />
					)}
					<div className="flex gap-1">
						<ButtonIcon
							icon={TrashIcon}
							variant="terciary"
							onClick={handleDeleteTask}
							loading={loading}
							handling={isDeletingTask}
						/>
						<ButtonIcon
							icon={PencilIcon}
							variant="terciary"
							onClick={handleEditTask}
							loading={loading}
						/>
					</div>
				</div>
			) : (
				<form className="flex items-center gap-4" onSubmit={handleSaveTask}>
					<InputText
						value={taskTitle}
						className="flex-1"
						onChange={handleChangeTaskTitle}
						required
						autoFocus
					/>
					<div className="flex gap-1">
						<ButtonIcon
							type="button"
							icon={XIcon}
							variant="secondary"
							onClick={handleExitEditTask}
						/>
						<ButtonIcon
							type="submit"
							icon={CheckIcon}
							variant="primary"
							handling={isUpdatingTask}
						/>
					</div>
				</form>
			)}
		</Card>
	);
}
