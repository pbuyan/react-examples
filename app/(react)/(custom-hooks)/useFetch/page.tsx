import UseFetch from '../../../../ui/react/custom-hooks/useFetch/posts';
import CodeHighlighter from '#/ui/code-highlighter';

export default async function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">useFetch</h1>

      <div>
        <UseFetch />
        <hr />
        <CodeHighlighter filePath="/../ui/react/custom-hooks/useFetch/useFetch.ts" />
        <CodeHighlighter filePath="/../ui/react/custom-hooks/useFetch/posts.tsx" />
      </div>
    </div>
  );
}
