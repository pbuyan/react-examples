import Counter from "../../../ui/react/counter";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-xl font-bold">Counter</h1>

			<div>
				<Counter />
				<hr />
				<CodeHighlighter filePath="/../ui/react/counter.tsx" />
			</div>
		</div>
	);
}
