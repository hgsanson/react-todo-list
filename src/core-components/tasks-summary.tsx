import Badge from "../components/badge";
import Text from "../components/text";

export default function TasksSummary() {
	return (
		<>
			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Created tasks
				</Text>
				<Badge variant="secondary" className="border border-orange-base">
					5
				</Badge>
			</div>

			<div className="flex items-center gap-2">
				<Text variant="body-sm-bold" className="!text-gray-300">
					Concluded
				</Text>
				<Badge variant="primary" className="border border-green-base">
					2 de 5
				</Badge>
			</div>
		</>
	);
}
