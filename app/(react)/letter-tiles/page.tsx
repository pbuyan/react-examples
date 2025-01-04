import LetterTiles from "../../../ui/react/letter-tiles";
import CodeHighlighter from "#/ui/code-highlighter";

export default function Page() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h1 className="text-center">Letter Tiles</h1>

			<div>
				<LetterTiles />
				<hr />
				<CodeHighlighter filePath="/../ui/react/letter-tiles.tsx" />
			</div>
		</div>
	);
}
