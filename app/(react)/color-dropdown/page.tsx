import ColorDropdown from "../../../ui/react/color-dropdown";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-xl font-bold">Color dropdown</h1>

			<div>
				<ColorDropdown />
				<hr />
				<CodeHighlighter filePath="/../ui/react/color-dropdown.tsx" />
			</div>
		</div>
	);
}
