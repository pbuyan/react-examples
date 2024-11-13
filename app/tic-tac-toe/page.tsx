import TicTacToe from '../../ui/tic-tac-toe';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-center">Tic Tac Toe</h1>

      <div>
        <TicTacToe />
      </div>
    </div>
  );
}
