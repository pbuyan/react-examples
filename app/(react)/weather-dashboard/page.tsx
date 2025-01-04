import ColorDropdown from "../../../ui/react/weather-dashboard";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-xl font-bold">Weather Dashboard</h1>

			<div>
				<ColorDropdown />
				<hr />
				<CodeHighlighter filePath="/../ui/react/weather-dashboard.tsx" />
			</div>
		</div>
	);
}
