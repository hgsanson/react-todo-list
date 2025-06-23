import CheckIcon from "../assets/icons/check.svg?react";
import ClipboadIcon from "../assets/icons/clipboard.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import XIcon from "../assets/icons/x.svg?react";

import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";

export default function PageComponents() {
	return (
		<Container>
			<div className="grid gap-10">
				<div className="flex flex-col gap-2">
					<Text variant={"body-sm-bold"}>Hello, world!</Text>
					<Text variant={"body-md"}>Hello, world!</Text>
					<Text variant={"body-md-bold"}>Hello, world!</Text>
				</div>

				<div className="flex gap-1">
					<Icon svg={CheckIcon} />
					<Icon svg={ClipboadIcon} />
					<Icon svg={PencilIcon} />
					<Icon svg={PlusIcon} />
					<Icon svg={SpinnerIcon} animate />
					<Icon svg={TrashIcon} />
					<Icon svg={XIcon} />
				</div>

				<div className="flex gap-1">
					<Badge variant={"secondary"}>5</Badge>
					<Badge variant={"primary"}>2 of 5</Badge>
					<Badge loading>5</Badge>
				</div>

				<div>
					<Button variant={"primary"} icon={PlusIcon}>
						New task
					</Button>
				</div>

				<div className="flex gap-2">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon variant={"secondary"} icon={TrashIcon} />
					<ButtonIcon variant={"terciary"} icon={TrashIcon} />
					<ButtonIcon loading icon={TrashIcon} />
				</div>

				<div>
					<InputText />
				</div>

				<div>
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div>
					<Card size="md">Hello, world!</Card>
				</div>

				<div className="space-y-2">
					<Skeleton className="h-6 w-96" />
					<Skeleton className="h-6 w-96" />
					<Skeleton className="h-6 w-96" />
				</div>
			</div>
		</Container>
	);
}
