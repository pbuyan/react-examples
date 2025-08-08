import Counter from '../../../ui/react/counter';
import CodeHighlighter from '#/ui/code-highlighter';
import BlogList from '#/components/BlogList';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <BlogList />
      <h1 className="text-xl font-bold">Counter</h1>

      <div>
        <Counter />
        <hr />
        <CodeHighlighter filePath="/../ui/react/counter.tsx" />
      </div>
    </div>
  );
}
