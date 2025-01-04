import React from "react";
import List from "../../../ui/react/quiz-builder";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-center">List</h1>

			<div>
				<List />
				<hr />
				<CodeHighlighter filePath="/../ui/react/quiz-builder.tsx" />
			</div>
		</div>
	);
}
