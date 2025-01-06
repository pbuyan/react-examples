import UseDebounce from '../../../../ui/react/custom-hooks/useDebounce/search';
import CodeHighlighter from '#/ui/code-highlighter';

export default async function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">useFetch</h1>

      <div>
        <UseDebounce />
        <hr />
        <CodeHighlighter filePath="/../ui/react/custom-hooks/useDebounce/useDebounce.ts" />
        <CodeHighlighter filePath="/../ui/react/custom-hooks/useDebounce/search.tsx" />
      </div>
    </div>
  );
}
