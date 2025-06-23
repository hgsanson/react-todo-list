import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import ButtonIcon from "../components/button-icon";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import { useState } from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
	task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
	const [isEditing, setIsEditing] = useState(
		task?.state === TaskState.Creating,
	);

	function handleEditTask() {
		setIsEditing(false);
	}

	function handleExitEditTask() {
		setIsEditing(true);
	}

	return (
		<Card size="md" className="flex items-center gap-4">
			{!isEditing ? (
				<>
					<InputCheckbox
						value={task?.concluded?.toString()}
						checked={task?.concluded}
					/>
					<Text
						className={cx("flex-1", {
							"line-through": task?.concluded,
						})}
					>
						{task?.title}
					</Text>
					<div className="flex gap-1">
						<ButtonIcon icon={TrashIcon} variant="terciary" />
						<ButtonIcon
							icon={PencilIcon}
							variant="terciary"
							onClick={handleEditTask}
						/>
					</div>
				</>
			) : (
				<>
					<InputText className="flex-1" />
					<div className="flex gap-1">
						<ButtonIcon
							icon={XIcon}
							variant="secondary"
							onClick={handleExitEditTask}
						/>
						<ButtonIcon
							icon={CheckIcon}
							variant="primary"
							onClick={handleEditTask}
						/>
					</div>
				</>
			)}
		</Card>
	);
}
