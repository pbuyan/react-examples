import Counter from '../../../ui/react/counter';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Counter</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Counter />
      </div>
    </div>
  );
}
