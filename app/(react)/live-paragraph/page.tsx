import LiveParagraph from "../../../ui/react/live-paragraph";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-xl font-bold">Live Paragraph</h1>

			<div>
				<LiveParagraph />
				<hr />
				<CodeHighlighter filePath="/../ui/react/live-paragraph.tsx" />
			</div>
		</div>
	);
}
