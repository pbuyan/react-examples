import TicTacToe from '../../../ui/react/tic-tac-toe';
import CodeHighlighter from '#/ui/code-highlighter';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-center">Tic Tac Toe</h1>

      <div>
        <TicTacToe />
        <CodeHighlighter filePath="/../ui/react/tic-tac-toe.tsx" />
      </div>
    </div>
  );
}
