import type { Component } from "react";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import * as fs from "fs";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";
import { Prism, type SyntaxHighlighterProps } from "react-syntax-highlighter";
const SyntaxHighlighter = Prism as typeof Component<SyntaxHighlighterProps>;
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeHighlighter = ({ filePath }: { filePath: string }) => {
	const fPath = path.join(process.cwd(), "data", filePath);
	const code = fs.readFileSync(fPath, "utf-8");

	return (
		<SyntaxHighlighter
			style={materialDark}
			language="jsx"
			code={code}
			showLineNumbers={true}
		>
			{code}
		</SyntaxHighlighter>
	);
};

export default CodeHighlighter;
